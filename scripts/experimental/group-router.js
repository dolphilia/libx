/** Pure Worker handler; its catalog is generated from verified output ownership. */
export function createGroupRouter(catalog) {
  const routes = new Map(catalog.routes.map((route) => [route.url, route]));
  return {
    async fetch(request, env) {
      const error = (status, message) =>
        new Response(request.method === 'HEAD' ? null : message, {
          status,
          headers: { 'Cache-Control': 'no-store' },
        });
      if (request.method !== 'GET' && request.method !== 'HEAD')
        return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
      const url = new URL(request.url);
      let pathname;
      try {
        pathname = url.pathname
          .split('/')
          .map((segment) => {
            const decoded = decodeURIComponent(segment);
            if (/[/\\\0]/.test(decoded) || decoded === '.' || decoded === '..')
              throw new Error('invalid path');
            return encodeURIComponent(decoded);
          })
          .join('/');
      } catch {
        return error(400, 'Invalid path');
      }
      if (pathname !== catalog.publicBase && !pathname.startsWith(`${catalog.publicBase}/`))
        return error(404, 'Not found');
      const indexAlias = pathname.endsWith('/index.html')
        ? pathname.slice(0, -'index.html'.length)
        : pathname;
      const canonical = routes.has(indexAlias)
        ? indexAlias
        : routes.has(`${indexAlias}/`)
          ? `${indexAlias}/`
          : pathname;
      const route = routes.get(canonical);
      if (route && url.pathname !== canonical) {
        url.pathname = canonical;
        return new Response(null, {
          status: 308,
          headers: { Location: url.href, 'Cache-Control': 'no-store' },
        });
      }
      const target = route ?? catalog.notFound;
      try {
        // The asset worker uses html_handling:none, so only the router redirects.
        url.pathname = target.assetPath;
        const forwarded = new Request(url, request);
        // The generated release chooses its downstream services, not the caller.
        forwarded.headers.delete('Cloudflare-Workers-Version-Overrides');
        forwarded.headers.delete('Cloudflare-Workers-Version-Key');
        if (!route) {
          for (const header of ['If-None-Match', 'If-Modified-Since', 'Range', 'If-Range'])
            forwarded.headers.delete(header);
        }
        const response = await env[target.binding].fetch(forwarded);
        if (response.status >= 400) {
          console.error(
            JSON.stringify({
              event: 'release_asset_unavailable',
              binding: target.binding,
              status: response.status,
            })
          );
          return error(503, 'Release asset unavailable');
        }
        const headers = new Headers(response.headers);
        headers.set('X-Libx-Release', catalog.revision);
        // A later retention policy may cache content-addressed assets. During the
        // prototype every response revalidates rather than mixing release caches.
        headers.set('Cache-Control', 'no-store');
        return new Response(request.method === 'HEAD' ? null : response.body, {
          status: route ? response.status : 404,
          headers,
        });
      } catch {
        return error(503, 'Release service unavailable');
      }
    },
  };
}

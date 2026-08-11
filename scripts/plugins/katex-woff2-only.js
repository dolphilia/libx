export function keepKatexWoff2Only(css) {
  return css.replace(
    /src:(url\([^)]*\.woff2\)\s*format\(["']woff2["']\)),url\([^)]*\.woff\)\s*format\(["']woff["']\),url\([^)]*\.ttf\)\s*format\(["']truetype["']\)/g,
    'src:$1'
  );
}

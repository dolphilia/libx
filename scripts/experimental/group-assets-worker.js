import { WorkerEntrypoint } from 'cloudflare:workers';

export class AssetDelivery extends WorkerEntrypoint {
  fetch(request) {
    return this.env.ASSETS.fetch(request);
  }
}

export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};

import preview from '/private/tmp/libx-gperf-import-20261004/apps/gperf/node_modules/astro/dist/core/preview/index.js';
const server=await preview({root:'/private/tmp/libx-gperf-import-20261004/apps/gperf',server:{host:'127.0.0.1',port:4076,headers:{'Permissions-Policy':'clipboard-write=()'}}});
process.on('SIGINT',async()=>{await server.stop();process.exit(0);});
await server.closed();

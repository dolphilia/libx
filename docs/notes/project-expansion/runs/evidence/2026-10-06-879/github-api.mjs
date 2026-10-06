import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
const credential=spawnSync('git',['credential','fill'],{input:'protocol=https\nhost=github.com\n\n',encoding:'utf8',env:{...process.env,GIT_TERMINAL_PROMPT:'0'}});
const token=credential.stdout?.split('\n').find(x=>x.startsWith('password='))?.slice(9);assert(token,'GitHub authentication unavailable');
export async function api(p,body){const r=await fetch('https://api.github.com/repos/dolphilia/libx'+p,{method:body?'POST':'GET',headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json',...(body?{'Content-Type':'application/json'}:{})},...(body?{body:JSON.stringify(body)}:{}),redirect:'error',signal:AbortSignal.timeout(30000)});assert(r.ok,'GitHub HTTP '+r.status);return r.status===204?{status:r.status}:r.json();}

import {readFileSync} from 'node:fs';

const htmlPath=process.argv[2];
if(!htmlPath)throw new Error('Usage: node scripts/fetch-disco-locations.mjs <network HTML>');
const html=readFileSync(htmlPath,'utf8');
const excludedAgents=new Set(['agent_usa','aurotech','asan','dhk_solution','newtronics','tesscorn','picotech']);
const keys=[...new Set([...html.matchAll(/key="([^"]+)" info="address_eg"/g)].map(match=>match[1]))]
  .filter(key=>!excludedAgents.has(key));
const body=new URLSearchParams();
for(const key of keys){body.append('keyword[]',key);body.append('info[]','address_eg');}
const response=await fetch('https://www.disco.co.jp/lib/getNetwork.php',{
  method:'POST',
  headers:{'User-Agent':'Mozilla/5.0','Referer':'https://www.disco.co.jp/eg/network/','X-Requested-With':'XMLHttpRequest','Content-Type':'application/x-www-form-urlencoded'},
  body
});
if(!response.ok)throw new Error(`DISCO network endpoint returned ${response.status}`);
const addresses=await response.json();
if(addresses.length!==keys.length)throw new Error(`Expected ${keys.length} addresses, received ${addresses.length}`);
process.stdout.write(`${JSON.stringify(keys.map((key,index)=>({key,address:addresses[index]})),null,2)}\n`);

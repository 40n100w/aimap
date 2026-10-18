import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { entities } from '../scripts/load-csv-data.mjs';
import { validateUpdates, claimSnapshot, eventChanges, eventGraph } from '../src/update-records.js';
import { buildDirectionalTrace } from '../src/relationships.js';

const source = JSON.parse(readFileSync(new URL('../data/updates.json',import.meta.url),'utf8'));
const fresh = () => structuredClone(source);
const event = source.events.find(event=>event.id==='deepseek-v3-evidence-review');

test('reviewed events have resolvable, scoped, versioned source evidence',()=>{
  assert.deepEqual(validateUpdates(source,entities),[]);
  assert.ok(source.sources.every(source=>source.url.includes(source.revision)),'Citations pin a source revision');
  const graph=eventGraph(source,event);
  assert.equal(graph.claims.length,4);
  assert.equal(graph.assessments.length,0,'Potential effects are opt-in');
  assert.ok(!graph.nodes.includes('h800-gpu'),'Serving compatibility cannot imply training hardware');
  assert.ok(!graph.nodes.includes('qwen'),'Unrelated ledger claims do not leak into an event');
  assert.equal(eventGraph(source,event,{lens:'training'}).claims.length,2);
  assert.equal(eventGraph(source,event,{snapshot:'before'}).claims.length,0);
  assert.equal(eventGraph(source,event,{effects:true}).assessments.length,1);
  assert.equal(eventChanges(source,event).filter(change=>change.action==='added').length,5);
});

test('corrections append history, change snapshots, and invalidate dependent effects',()=>{
  const data=fresh(),original=data.versions.find(version=>version.claimId==='deepseek-v3-vllm');
  const correction={...event,id:'test-correction',sequence:4,changeVersionIds:['test-withdrawal'],contextClaimIds:[]};
  const withdrawal={...original,id:'test-withdrawal',eventId:correction.id,state:'withdrawn',supersedes:original.id,statement:'Test-only withdrawal fixture.'};
  data.events.push(correction);data.versions.push(withdrawal);
  assert.deepEqual(validateUpdates(data,entities),[]);
  assert.equal(claimSnapshot(data,3).get(original.claimId).id,original.id);
  assert.equal(claimSnapshot(data,4).get(original.claimId).state,'withdrawn');
  assert.equal(eventGraph(data,correction,{snapshot:'before'}).claims.length,1);
  assert.equal(eventGraph(data,correction).claims.length,0);
  assert.equal(eventChanges(data,correction)[0].action,'withdrawn');
  assert.equal(eventGraph(data,event,{effects:true}).assessments.length,0,'A later withdrawal invalidates an older assessment too');
  withdrawal.state='published';withdrawal.basis='disputed';
  assert.equal(eventGraph(data,event,{effects:true}).assessments.length,0,'Disputed or revised evidence requires reassessment');
});

test('validation rejects missing evidence, unsafe sources, identity changes and broken revision chains',()=>{
  const missing=fresh();missing.versions[0].citations=[];
  assert.ok(validateUpdates(missing,entities).some(error=>error.includes('source excerpt')));
  const unsafe=fresh();unsafe.sources[0].url='javascript:alert(1)';
  assert.ok(validateUpdates(unsafe,entities).some(error=>error.includes('HTTPS')));
  const broken=fresh();broken.versions[0].supersedes='nonexistent';
  assert.ok(validateUpdates(broken,entities).some(error=>error.includes('previous version')));
  const unknown=fresh();unknown.versions[0].object='unknown-model';
  assert.ok(validateUpdates(unknown,entities).some(error=>error.includes('endpoints')));
  const empty=fresh();empty.events=[];
  assert.ok(validateUpdates(empty,entities).length);
});

test('scheduled shutdown is an announcement attribute, never an already-ended serving link',()=>{
  const scheduled=source.versions.find(version=>version.claimId==='o4-scheduled-shutdown');
  assert.equal(scheduled.object,null);
  assert.equal(scheduled.value,'2026-10-23');
  assert.equal(scheduled.validTo,null);
  assert.match(scheduled.scope,/does not prove an outage/);
});

test('directed supply traces preserve alternate paths and do not project company connections onto models',()=>{
  const edges=[
    {source:'lab',target:'model',type:'DEVELOPS'},
    {source:'lab',target:'company-customer',type:'SUPPLIES'},
    {source:'model',target:'runtime-a',type:'RUNS_ON'},
    {source:'model',target:'runtime-b',type:'RUNS_ON'},
    {source:'runtime-a',target:'chip',type:'DEPENDS_ON'},
    {source:'runtime-b',target:'chip',type:'DEPENDS_ON'},
    {source:'chip',target:'competitor',type:'COMPETES_WITH'},
    {source:'chip',target:'partner',type:'PARTNERS_WITH'}
  ];
  const upstream=buildDirectionalTrace(edges,'model','upstream');
  assert.equal(upstream.edges.filter(edge=>edge.target==='chip').length,2);
  assert.ok(!upstream.nodes.includes('competitor')&&!upstream.nodes.includes('partner'));
  assert.deepEqual(buildDirectionalTrace(edges,'model','downstream').nodes,['model']);
  assert.ok(upstream.edges.every(edge=>edges.includes(edge)),'All endpoints remain the recorded endpoints');
});

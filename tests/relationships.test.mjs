import test from 'node:test';
import assert from 'node:assert/strict';
import { relationshipSummary, buildDirectionalTrace } from '../src/relationships.js';
import { entities, relationships, aliases } from '../scripts/load-csv-data.mjs';

test('counts dependency directions consistently with traces and separates mutual links', () => {
  const edges = [
    {source: 'fab', target: 'chip', type: 'MANUFACTURES'},
    {source: 'lab', target: 'chip', type: 'TRAINS_ON'},
    {source: 'chip', target: 'memory', type: 'DEPENDS_ON'},
    {source: 'chip', target: 'customer', type: 'SUPPLIES'},
    {source: 'chip', target: 'peer', type: 'PARTNERS_WITH'},
    {source: 'chip', target: 'chip', type: 'TRAINS_ON'}
  ];
  const summary = relationshipSummary(edges, 'chip');
  assert.deepEqual([summary.upstream, summary.downstream, summary.mutual, summary.total], [2, 2, 1, 5]);
  assert.deepEqual(new Set(buildDirectionalTrace(edges, 'chip', 'upstream').nodes), new Set(['chip', 'fab', 'memory', 'peer']));
  assert.deepEqual(new Set(buildDirectionalTrace(edges, 'chip', 'downstream').nodes), new Set(['chip', 'lab', 'customer', 'peer']));
});

test('resolves aliases and terminates cyclic traces with limits and filters', () => {
  const edges = [{source: 'alias', target: 'chip', type: 'SUPPLIES'}];
  assert.equal(relationshipSummary(edges, 'factory', {alias: 'factory'}).downstream, 1);
  const cycle = [{source:'a',target:'b',type:'SUPPLIES'}, {source:'b',target:'c',type:'SUPPLIES'}, {source:'c',target:'a',type:'SUPPLIES'}];
  assert.deepEqual(buildDirectionalTrace(cycle,'a','downstream', id => id !== 'c').nodes, ['a','b']);
  assert.equal(buildDirectionalTrace(cycle,'a','downstream',()=>true,6,2).truncated, true);
});

test('catalog contains no canonical self-edges and NVIDIA counts partition its links', () => {
  for (const edge of relationships) assert.notEqual(aliases[edge.source] || edge.source, aliases[edge.target] || edge.target, `${edge.source} -> ${edge.target}`);
  const summary = relationshipSummary(relationships, 'nvidia', aliases);
  assert.equal(summary.total, relationships.filter(edge => [aliases[edge.source] || edge.source, aliases[edge.target] || edge.target].includes('nvidia')).length);
  assert.equal(summary.upstream + summary.downstream + summary.mutual, summary.total);
  const ids = new Set(entities.map(entity => entity.id));
  assert.ok(ids.has(aliases['apple-silicon']));
  assert.notEqual(aliases['apple-silicon'], 'mlx');
});

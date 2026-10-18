import test from 'node:test';
import assert from 'node:assert/strict';
import { coverageSummary } from '../src/coverage.js';

test('coverage distinguishes missing research and handles empty filtered scopes', () => {
  const result = coverageSummary([{timelineYear:1993,profileSources:['https://example.org'],catalogReview:{reviewedOn:'2026-10-18'}},{timelineYear:null,profileSources:[]}],[{sourceUrl:'https://example.org'},{}]);
  assert.deepEqual(result,{total:2,dated:1,percent:'50.0',profiles:1,reviewed:1,relationships:2,sourcedRelationships:1});
  assert.equal(coverageSummary([],[]).percent,'0.0');
});

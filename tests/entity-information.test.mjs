import test from 'node:test';
import assert from 'node:assert/strict';
import { entityInformation, fieldEvidence, productInformation, safeSourceUrl, isGenericProfile, evidenceDetails, excerptSource } from '../src/entity-information.js';

const source = { id:'docs', title:'Company documentation', url:'https://example.com/docs' };
const fact = (field, value) => ({ field, value, reviewedOn:'2026-10-20', scope:'Only the stated value was reviewed.', sources:[source] });

test('field evidence is scoped to the exact displayed value and never spreads across the profile', () => {
  const entity = { type:'Company', website:'https://example.com', headquarters:'London', fieldFacts:[fact('website','https://example.com')], profileSources:[source.url], catalogReview:{ reviewedOn:'2026-10-20', scope:'Website only' } };
  assert.ok(fieldEvidence(entity, 'website'));
  assert.equal(fieldEvidence(entity, 'headquarters'), null);
  assert.deepEqual(entityInformation(entity).reviewedFields, ['website']);
  assert.equal(fieldEvidence({ ...entity, website:'https://changed.example' }, 'website'), null);
  assert.equal(fieldEvidence({ ...entity, fieldFacts:[{ ...fact('website',entity.website), scope:'' }] }, 'website'), null);
  assert.equal(fieldEvidence({ ...entity, fieldFacts:[{ ...fact('website',entity.website), reviewedOn:'2026-02-31' }] }, 'website'), null);
});

test('a documented tool does not verify generic hardware categories or a legacy catalog portfolio', () => {
  const entity = { products:['DRAM','NAND','HBM'], catalogReview:{ reviewedOn:'2026-10-20', scope:'Selected products' }, productFacts:[{ name:'Memory SDK', role:'Software toolkit', reviewedOn:'2026-10-20', scope:'Documents a software tool, not the hardware portfolio.', sources:[source] }] };
  const products = productInformation(entity);
  assert.deepEqual(products.documented.map(item => item.name), ['Memory SDK']);
  assert.deepEqual(products.unreviewed, ['DRAM','NAND','HBM']);
  assert.equal(products.portfolioEvidence, null);
  assert.equal(productInformation({ ...entity, fieldFacts:[fact('products',['DRAM'])] }).documented.length, 1);
  assert.equal(productInformation({ ...entity, fieldFacts:[fact('products',entity.products)] }).unreviewed.length, 0);
});

test('generic company profiles expose missing details without inventing facts or confusing launch dates', () => {
  const entity = { type:'Company', country:'Various', description:'A company participates in memory, with relevance to DRAM.', timelineYear:1999, timelineBasis:'Launched', products:['DRAM'] };
  const information = entityInformation(entity);
  assert.equal(information.genericDescription, true);
  assert.ok(information.missing.includes('Founded / launched'));
  assert.ok(information.missing.includes('Headquarters'));
  assert.ok(information.missing.includes('Country / region'));
  assert.match(information.fields.find(field => field.key === 'type').note, /Identity needs review/);
  assert.equal(information.fields.find(field => field.key === 'founded').value, '');
  const founded = entityInformation({ ...entity, timelineBasis:'Founded' }).fields.find(field => field.key === 'founded');
  assert.equal(founded.value, '1999');
  assert.equal(founded.evidence, null);
  assert.match(founded.note, /not been rechecked/);
  assert.equal(entityInformation({ type:'Model', products:[] }).fields.some(field => field.key === 'founded'), false);
  assert.equal(isGenericProfile('This company develops a documented compiler.'), false);
});

test('unsafe, credential-bearing and malformed sources never become clickable evidence', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,hi', '/local', 'https://user:secret@example.com', 'not a url']) assert.equal(safeSourceUrl(url), null);
  assert.equal(safeSourceUrl('https://example.com/docs'), 'https://example.com/docs');
  const unsafe = { ...fact('products',['A']), sources:[{ url:'javascript:alert(1)' }] };
  assert.equal(fieldEvidence({ products:['A'], fieldFacts:[unsafe] }, 'products'), null);
  assert.equal(productInformation({ products:['A'], productFacts:[{ ...unsafe, name:'A' }] }).documented.length, 0);
});

test('recorded regional headquarters remain dated location records and never populate global headquarters', () => {
  const entity = { type:'Company', recordedLocations:[{ locationName:'Regional headquarters', address:'An address', verifiedOn:'2026-08-24', sourceUrl:source.url }] };
  const information = entityInformation(entity);
  assert.ok(information.missing.includes('Headquarters'));
  assert.equal(information.locations[0].locationName, 'Regional headquarters');
  assert.equal(information.locations[0].verifiedOn, '2026-08-24');
});

test('Qwen and Tencent Cloud introductions are not labelled as company founding dates', () => {
  for (const entity of [
    { id:'qwen', type:'Model lab', founded:'Model family introduced in 2023', timelineBasis:'Model family launched', timelineYear:2023 },
    { id:'tencent-cloud', type:'Company', founded:'Publicly launched in 2013', timelineBasis:'Public launch', timelineYear:2013 }
  ]) {
    const date = entityInformation(entity).fields.find(field => field.key === 'founded');
    assert.equal(date.label, 'Founded / launched');
    assert.equal(date.value, entity.founded);
    assert.equal(date.evidence, null);
  }
});

test('open-source status is not presented as a geographic country', () => {
  const entity = { id:'pytorch', type:'Framework', country:'Open source' };
  const information = entityInformation(entity);
  assert.ok(information.missing.includes('Country / region'));
  assert.equal(information.fields.find(field => field.key === 'country').value, '');
  assert.equal(entity.country, 'Open source');
});

test('shared headquarters associations retain the original organization and location qualification', () => {
  const information = entityInformation({
    id:'recursion-valence-labs', type:'Company',
    recordedLocations:[{
      companyId:'recursion', companyName:'Recursion',
      locationName:'Recursion headquarters', address:'Salt Lake City, Utah',
      researchNote:'Valence Labs is based in Montreal; this is the associated Recursion headquarters.',
      sourceUrl:source.url
    }]
  });
  assert.equal(information.locations[0].recordedFor, 'Recursion');
  assert.match(information.locations[0].researchNote, /Montreal/);
  assert.ok(information.missing.includes('Headquarters'));
  assert.equal(entityInformation({ recordedLocations:[{ companyId:'recursion', address:'Salt Lake City' }] }).locations[0].recordedFor, 'recursion');
});

test('availability, lifecycle and product attributes retain their scoped meaning and zero values', () => {
  const details = evidenceDetails({
    kind:'software_sdk', availability:'Private beta; invitations required.', lifecycleStatus:'Deprecated; support ends on the stated date.',
    releaseDate:'2026-03-15', evidenceAsOf:'2026-10-20',
    documentedAttributes:{ supportedAPIs:['Responses','Messages'], hostedGPUCount:0, requiredSDK:'SDK <2.0', absentValue:null }
  });
  assert.equal(details.find(row => row.label === 'Kind').value, 'Software SDK');
  assert.equal(details.find(row => row.label === 'Availability / support').value, 'Private beta; invitations required.');
  assert.match(details.find(row => row.label === 'Lifecycle status').value, /Deprecated/);
  assert.equal(details.find(row => row.label === 'Recorded release date').value, '2026-03-15');
  assert.equal(details.find(row => row.label === 'Evidence as of').value, '2026-10-20');
  assert.equal(details.find(row => row.label === 'Supported APIs').value, 'Responses · Messages');
  assert.equal(details.find(row => row.label === 'Hosted GPU Count').value, '0');
  assert.equal(details.find(row => row.label === 'Required SDK').value, 'SDK <2.0');
  assert.ok(!details.some(row => row.label === 'Absent Value'));
});

test('an item quote identifies its own source without guessing among multiple documents', () => {
  const other = { id:'other', title:'Second product document', url:'https://example.com/other' };
  assert.equal(excerptSource({ sources:[source,other], evidenceSourceId:'other' }).id, 'other');
  assert.equal(excerptSource({ sources:[source,other] }), null);
  assert.equal(excerptSource({ sources:[source], evidenceSourceId:'missing' }), null);
  assert.equal(excerptSource({ sources:[source] }).id, source.id);
  assert.equal(excerptSource({ sources:[{ id:'unsafe', url:'javascript:alert(1)' }], evidenceSourceId:'unsafe' }), null);
});

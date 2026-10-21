// Read-only inventory audit. Run from any directory; JSON is written to stdout.
// A source-linked legacy relationship is not necessarily a verified claim.
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { entities, relationships, aliases, LAYERS, modelTrainingEvidence } from './load-csv-data.mjs';

const root = new URL('../', import.meta.url);
const byId = new Map(entities.map(entity => [entity.id, entity]));
const canonical = id => aliases[id] || id;
const linked = relation => Boolean(relation.sourceUrl?.trim()) && ['confirmed', 'reported'].includes(relation.status);
const edges = relationships.map(relation => ({ ...relation, source: canonical(relation.source), target: canonical(relation.target) }));
const incident = id => edges.filter(relation => relation.source === id || relation.target === id);
const countBy = (rows, key) => Object.fromEntries([...new Set(rows.map(row => row[key]))].sort().map(value => [value, rows.filter(row => row[key] === value).length]));
const inventory = rows => ({
  entries: rows.length,
  connected: rows.filter(row => incident(row.id).length).length,
  isolated: rows.filter(row => !incident(row.id).length).length,
  withSourceLinkedNonIllustrativeEdge: rows.filter(row => incident(row.id).some(linked)).length
});
const makerIds = [
  'openai', 'anthropic', 'deepmind', 'meta-ai', 'xai', 'mistral', 'cohere',
  'deepseek', 'qwen', 'moonshot-ai', 'zhipu-ai', 'minimax', 'bytedance-seed',
  'tencent-hunyuan', 'baidu-ernie', 'huawei', 'amazon-agi-lab',
  'apple-foundation-models', 'ibm-granite'
];
const physicalLayers = new Set(['materials', 'equipment', 'fabrication', 'compute', 'datacenter', 'cloud']);
const dataFiles = readdirSync(new URL('data/', root)).filter(name => /\.(csv|json)$/.test(name)).sort();
const updates = JSON.parse(readFileSync(new URL('data/updates.json', root), 'utf8'));
const report = {
  schemaVersion: 1,
  repositoryCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  definitions: {
    connected: 'At least one incident legacy relationships.csv row after alias resolution; no direction, evidence quality, or supply-chain completeness implied.',
    companyLabLabels: 'Company, Model lab, or Research lab type. Counts are labels, not deduplicated legal organizations.',
    sourceLinkedNonIllustrative: 'A nonempty sourceUrl and legacy status confirmed or reported. Source presence is not independent verification.',
    makerScope: '19 selected global general-purpose model-making organizations/units; not a ranking or an exhaustive list of all model developers.',
    excludedFromGraphCounts: 'Reviewed updates ledger, representative-paths.csv, map datasets and office locations are reported separately and do not create legacy graph edges.'
  },
  totals: {
    ...inventory(entities),
    models: entities.filter(row => row.type === 'Model').length,
    relationships: edges.length,
    withSourceUrl: edges.filter(row => row.sourceUrl?.trim()).length,
    sourceLinkedNonIllustrativeEdges: edges.filter(linked).length,
    confirmedWithoutSourceUrl: edges.filter(row => row.status === 'confirmed' && !row.sourceUrl?.trim()).length,
    withAnyActiveDate: edges.filter(row => row.activeFrom != null || row.activeTo != null).length,
    unresolvedEndpointIds: [...new Set(edges.flatMap(row => [row.source, row.target]).filter(id => !byId.has(id)))]
  },
  entityTypes: countBy(entities, 'type'),
  companyLabLabeled: inventory(entities.filter(row => ['Company', 'Model lab', 'Research lab'].includes(row.type))),
  physicalAndCloudLayers: inventory(entities.filter(row => physicalLayers.has(row.layer))),
  relationshipStatuses: Object.fromEntries(Object.entries(countBy(edges, 'status')).map(([status, count]) => [status, {
    count, withSourceUrl: edges.filter(row => row.status === status && row.sourceUrl?.trim()).length
  }])),
  relationshipTypes: countBy(edges, 'type'),
  layers: LAYERS.map(layer => ({ id: layer.id, name: layer.name, ...inventory(entities.filter(row => row.layer === layer.id)) })),
  makers: makerIds.map(id => {
    if (!byId.has(id)) throw new Error(`Missing audit maker: ${id}`);
    const modelIds = [...new Set(edges.filter(row => row.source === id && row.type === 'DEVELOPS' && byId.get(row.target)?.type === 'Model').map(row => row.target))];
    return {
      id, name: byId.get(id).name, coreModelCount: modelIds.length, modelIds,
      directNonDeveloperEdges: incident(id).filter(row => row.type !== 'DEVELOPS'),
      modelTrainingEdges: edges.filter(row => modelIds.includes(row.source) && row.type === 'TRAINS_ON')
    };
  }),
  trainingMap: {
    rows: modelTrainingEvidence.length,
    references: modelTrainingEvidence.map(row => ({
      id: row.model_id, name: row.model_name,
      coreEntityType: byId.get(canonical(row.model_id))?.type || null,
      evidenceLevel: row.evidence_level
    }))
  },
  reviewedLedger: {
    events: updates.events.length, versions: updates.versions.length, sources: updates.sources.length,
    note: 'Separately reviewed claims; not evidence that all legacy relationships are reviewed.'
  },
  inputSha256: Object.fromEntries(dataFiles.map(name => [name, createHash('sha256').update(readFileSync(new URL(`data/${name}`, root))).digest('hex')]))
};
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

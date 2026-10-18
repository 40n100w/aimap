// Record time is independent of source publication and real-world validity.
// An event is an atomic transaction. Earlier/updated views compare its ledger
// sequence, never infer that an unrecorded relationship did not exist.
export const LENSES = ['serving', 'training', 'hardware'];
export const BASIS = {primary: 'Reviewed primary source', reported: 'Reported', disputed: 'Disputed'};
const date = value => /^\d{4}-\d{2}-\d{2}$/.test(value || '') && !Number.isNaN(Date.parse(value));
const safeUrl = value => { try { return new URL(value).protocol === 'https:'; } catch { return false; } };

export function validateUpdates(data, atlasEntities) {
  const errors = [], need = (condition, message) => { if (!condition) errors.push(message); };
  need(data?.schemaVersion === 1, 'Unsupported updates schema');
  for (const field of ['sources', 'nodes', 'events', 'versions', 'assessments']) need(Array.isArray(data?.[field]), `${field} must be an array`);
  if (errors.length) return errors;
  need(data.events.length > 0, 'At least one reviewed event is required');
  need(date(data.reviewedOn), 'Missing coverage review date');
  const index = (rows, label) => {
    const map = new Map();
    for (const row of rows) { need(typeof row.id === 'string' && /^[a-z0-9-]+$/.test(row.id), `${label}: invalid ID`); need(!map.has(row.id), `${label}: duplicate ${row.id}`); map.set(row.id, row); }
    return map;
  };
  const atlas = new Map(atlasEntities.map(entity => [entity.id, entity]));
  const sources = index(data.sources, 'source'), nodes = index(data.nodes, 'node'), events = index(data.events, 'event'), versions = index(data.versions, 'version');
  index(data.assessments, 'assessment');
  const hasEntity = id => atlas.has(id) || nodes.has(id);
  for (const source of sources.values()) {
    need(safeUrl(source.url), `${source.id}: HTTPS source required`);
    need(source.title && source.publisher && date(source.retrievedOn), `${source.id}: incomplete provenance`);
    need(source.publishedOn === null || date(source.publishedOn), `${source.id}: invalid publication date`);
    need(/^[a-f0-9]{64}$/.test(source.sha256 || ''), `${source.id}: content hash required`);
  }
  for (const node of nodes.values()) {
    need(!atlas.has(node.id), `${node.id}: extra node shadows atlas entity`);
    need(node.name && ['hardware','software','organization','model'].includes(node.kind), `${node.id}: invalid node`);
    need(node.sourceIds?.length && node.sourceIds.every(id => sources.has(id)), `${node.id}: source required`);
  }
  const sequences = new Set(), claimIds = new Set(data.versions.map(version => version.claimId));
  for (const event of events.values()) {
    need(Number.isInteger(event.sequence) && event.sequence > 0 && !sequences.has(event.sequence), `${event.id}: unique sequence required`); sequences.add(event.sequence);
    need(event.title && event.summary && event.unknowns && event.scope, `${event.id}: incomplete editorial scope`);
    need(date(event.recordedOn) && date(event.reviewedOn), `${event.id}: record and review dates required`);
    need(event.occurredOn === null || date(event.occurredOn), `${event.id}: invalid occurrence date`);
    need(hasEntity(event.root) && event.namedEntityIds?.includes(event.root) && event.namedEntityIds.every(hasEntity), `${event.id}: unresolved entity`);
    need(LENSES.includes(event.lens), `${event.id}: invalid lens`);
    need(event.contextClaimIds?.every(id => claimIds.has(id)), `${event.id}: unresolved context claim`);
    need(event.changeVersionIds?.length && event.changeVersionIds.every(id => versions.get(id)?.eventId === event.id), `${event.id}: unresolved changes`);
  }
  const versionsByClaim = new Map();
  for (const version of versions.values()) {
    const event = events.get(version.eventId);
    need(event?.changeVersionIds?.includes(version.id), `${version.id}: not listed in event transaction`);
    need(version.claimId && hasEntity(version.subject) && (version.object === null || hasEntity(version.object)), `${version.id}: invalid claim endpoints`);
    need(version.object !== version.subject, `${version.id}: self relationship`);
    need(version.statement && version.scope && version.relation && (version.object || version.value), `${version.id}: claim scope required`);
    need(['published','withdrawn'].includes(version.state) && Boolean(BASIS[version.basis]), `${version.id}: invalid evidence state`);
    need(version.lenses?.length && version.lenses.every(lens => LENSES.includes(lens)), `${version.id}: invalid lenses`);
    need(version.citations?.length && version.citations.every(citation => sources.has(citation.sourceId) && citation.excerpt?.trim()), `${version.id}: source excerpt required`);
    need((version.validFrom === null || date(version.validFrom)) && (version.validTo === null || date(version.validTo)), `${version.id}: invalid validity dates`);
    need(!version.validFrom || !version.validTo || version.validFrom <= version.validTo, `${version.id}: inverted validity interval`);
    if (!versionsByClaim.has(version.claimId)) versionsByClaim.set(version.claimId, []);
    versionsByClaim.get(version.claimId).push(version);
  }
  for (const [id, history] of versionsByClaim) {
    history.sort((a,b) => (events.get(a.eventId)?.sequence || 0) - (events.get(b.eventId)?.sequence || 0));
    history.forEach((version, i) => {
      const previous = history[i-1];
      need(version.supersedes === (previous?.id || null), `${id}: revisions must append to the previous version`);
      need(!previous || events.get(previous.eventId)?.sequence < events.get(version.eventId)?.sequence, `${id}: one version per event`);
      need(previous || version.state !== 'withdrawn', `${id}: cannot withdraw a missing claim`);
      need(!previous || version.subject === previous.subject && version.object === previous.object && version.relation === previous.relation, `${id}: revision changes identity; create a new claim instead`);
    });
  }
  for (const assessment of data.assessments) {
    const event = events.get(assessment.eventId);
    need(Boolean(event) && hasEntity(assessment.subject) && hasEntity(assessment.object) && LENSES.includes(assessment.lens), `${assessment.id}: invalid assessment scope`);
    need(assessment.status === 'potential' && assessment.mechanism && assessment.assumptions?.length && assessment.horizon && assessment.unknowns, `${assessment.id}: potential effects need assumptions and limits`);
    need(assessment.basedOnVersionIds?.length && assessment.basedOnVersionIds.every(id => versions.has(id) && versions.get(id).state === 'published' && events.get(versions.get(id).eventId)?.sequence <= event?.sequence), `${assessment.id}: invalid evidence dependencies`);
  }
  return errors;
}

export function claimSnapshot(data, sequence) {
  const eventSequences = new Map(data.events.map(event => [event.id, event.sequence]));
  const latest = new Map();
  for (const version of [...data.versions].sort((a,b) => eventSequences.get(a.eventId)-eventSequences.get(b.eventId))) {
    if (eventSequences.get(version.eventId) <= sequence) latest.set(version.claimId, version);
  }
  return latest;
}

export function eventChanges(data, event) {
  return event.changeVersionIds.map(id => {
    const version = data.versions.find(item => item.id === id);
    return {version, action:version.state === 'withdrawn' ? 'withdrawn' : version.supersedes ? 'revised' : 'added'};
  });
}

export function eventGraph(data, event, {snapshot='after', lens=event.lens, effects=false}={}) {
  const sequence = event.sequence - (snapshot === 'before' ? 1 : 0);
  const latest = claimSnapshot(data, sequence);
  const current = claimSnapshot(data, Math.max(...data.events.map(item => item.sequence)));
  const scope = new Set([...event.contextClaimIds, ...eventChanges(data,event).map(change => change.version.claimId)]);
  const claims = [...latest.values()].filter(version => scope.has(version.claimId) && version.state === 'published' && version.lenses.includes(lens));
  // A revision, dispute or withdrawal invalidates an assessment's exact inputs.
  const assessments = effects && snapshot === 'after' ? data.assessments.filter(assessment => assessment.eventId === event.id && assessment.lens === lens && assessment.basedOnVersionIds.every(id => {
    const version = data.versions.find(item => item.id === id), active = latest.get(version?.claimId), today = current.get(version?.claimId);
    return active?.id === id && active.state === 'published' && active.basis !== 'disputed' && today?.id === id && today.state === 'published' && today.basis !== 'disputed';
  })) : [];
  const nodes = new Set([event.root]);
  for (const claim of claims) { nodes.add(claim.subject); if (claim.object) nodes.add(claim.object); }
  for (const assessment of assessments) { nodes.add(assessment.subject); nodes.add(assessment.object); }
  return {claims, assessments, nodes:[...nodes], latest};
}

export const DEPENDENCY_SOURCE = new Set(['RUNS_ON', 'TRAINS_ON', 'DEPENDS_ON', 'USES_MODEL_FROM']);
export const MUTUAL = new Set(['PARTNERS_WITH', 'INTEGRATES_WITH', 'COMPETES_WITH']);

export function directionalNeighbor(relationship, current, direction) {
  if (relationship.source === relationship.target) return null;
  if (MUTUAL.has(relationship.type)) {
    return relationship.source === current ? relationship.target : relationship.target === current ? relationship.source : null;
  }
  const [consumer, provider] = DEPENDENCY_SOURCE.has(relationship.type)
    ? [relationship.source, relationship.target] : [relationship.target, relationship.source];
  return direction === 'upstream' ? (consumer === current ? provider : null) : (provider === current ? consumer : null);
}

export function relationshipSummary(relationships, id, aliases = {}) {
  const normalized = relationships.map(edge => ({...edge, source: aliases[edge.source] || edge.source, target: aliases[edge.target] || edge.target}));
  const edges = normalized.filter(edge => edge.source !== edge.target && (edge.source === id || edge.target === id));
  const mutual = edges.filter(edge => MUTUAL.has(edge.type));
  const directed = edges.filter(edge => !MUTUAL.has(edge.type));
  return {
    edges,
    upstream: directed.filter(edge => directionalNeighbor(edge, id, 'upstream')).length,
    downstream: directed.filter(edge => directionalNeighbor(edge, id, 'downstream')).length,
    mutual: mutual.length,
    total: edges.length
  };
}

export function buildDirectionalTrace(relationships, root, direction, canVisit = () => true, maxHops = 6, maxNodes = 180) {
  const hops = new Map([[root, 0]]), nodes = [root], edges = [], queue = [root];
  let truncated = false;
  while (queue.length) {
    const current = queue.shift(), hop = hops.get(current);
    if (hop >= maxHops) continue;
    for (const relationship of relationships) {
      const next = directionalNeighbor(relationship, current, direction);
      if (!next || !canVisit(next) || hops.has(next)) continue;
      if (nodes.length >= maxNodes) { truncated = true; continue; }
      hops.set(next, hop + 1); nodes.push(next); queue.push(next); edges.push(relationship);
    }
  }
  return {nodes, edges, hops, truncated, maxDepth: Math.max(0, ...hops.values())};
}

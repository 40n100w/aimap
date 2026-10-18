import { LAYERS } from './data.js';
import { buildDirectionalTrace } from './relationships.js';

// A usable catalog when a browser cannot create a WebGL context.
export class TextScene {
  constructor(mount, entities, relationships, onSelect) {
    Object.assign(this, {mount, entities, relationships, onSelect, view: 'ecosystem', activeGeography: 'all', relationFilter: 'ALL', timeYear: 2026});
    this.controls = {autoRotate: false};
    this.visibleLayers = new Set(LAYERS.map(layer => layer.id));
    this.nodes = new Map(entities.map(entity => [entity.id, {visible: true, parent: {visible: true}, userData: {entity}}]));
    this.modelEntities = entities.filter(entity => entity.type === 'Model');
    this.limit = 40;
    document.body.classList.add('text-mode', 'entered');
    mount.setAttribute('role', 'region');
    mount.setAttribute('aria-label', 'AI ecosystem catalog');
    mount.innerHTML = '<section class="text-catalog"><header><p class="eyebrow">Catalog view</p><h1>Explore the ecosystem</h1><p role="status">3D rendering is unavailable in this browser. Search, profiles, relationships, timeline, and maps are still available.</p><button type="button" data-retry-render>Retry 3D rendering</button></header><p class="catalog-summary"></p><div class="catalog-entries"></div><button type="button" data-more-entities>Show more entities</button></section>';
    mount.querySelector('[data-retry-render]').onclick = () => location.reload();
    mount.querySelector('[data-more-entities]').onclick = () => { this.limit += 40; this.render(); };
    this.render();
  }
  render() {
    const entries = (this.traceIds ? this.traceIds.map(id => this.entities.find(entity => entity.id === id)) : this.entities)
      .filter(entity => entity && this.nodes.get(entity.id).visible && (this.traceIds || this.view !== 'models' || entity.type === 'Model'));
    if (!this.traceIds) entries.sort((a, b) => b.importanceLevel - a.importanceLevel || a.name.localeCompare(b.name));
    this.mount.querySelector('.catalog-summary').textContent = `${entries.length} ${this.traceIds ? 'entities in this path' : 'entities in this view'} · Use search to find any entity.`;
    const list = this.mount.querySelector('.catalog-entries');
    list.replaceChildren(...entries.slice(0, this.limit).map(entity => {
      const button = document.createElement('button'), name = document.createElement('strong'), description = document.createElement('span');
      name.textContent = entity.name; description.textContent = entity.description;
      button.append(name, description); button.onclick = () => this.onSelect(entity.id);
      return button;
    }));
    this.mount.querySelector('[data-more-entities]').hidden = entries.length <= this.limit;
  }
  applyVisibility() {
    for (const node of this.nodes.values()) {
      const entity = node.userData.entity;
      node.visible = this.visibleLayers.has(entity.layer) && (this.activeGeography === 'all' || entity.geography === this.activeGeography);
    }
    this.render();
  }
  setLayers(layers) { this.visibleLayers = new Set(layers); this.applyVisibility(); }
  setGeography(geography) { this.activeGeography = geography; this.applyVisibility(); }
  setRelation(type) { this.relationFilter = type; }
  setTime(year) { this.timeYear = Number(year); }
  setView(view) { this.view = view; this.reset(); }
  select(id) { this.selectedId = id; }
  focus(id) { this.selectedId = id; }
  cameraCommand() { /* Camera controls are hidden in catalog mode. */ }
  reset() { this.traceIds = null; this.limit = 40; this.render(); }
  trace(ids) { this.traceIds = ids; this.limit = ids.length; this.render(); }
  traceGraph(root, ids) { this.trace(ids); }
  relationshipVisible(edge) { return (!edge.activeFrom || edge.activeFrom <= this.timeYear) && (!edge.activeTo || edge.activeTo >= this.timeYear); }
  buildModelBranch(root, direction, maxHops = 6, maxNodes = 90) {
    return buildDirectionalTrace(this.relationships.filter(edge => this.relationshipVisible(edge) && (this.relationFilter === 'ALL' || edge.type === this.relationFilter)), root, direction, id => this.nodes.get(id)?.visible, maxHops, maxNodes);
  }
}

import './styles.css';
import './navigation.css';
import './timeline.css';
import './map-view.css';
import './usability.css';
import './mobile.css';
import './updates.css';
import { entities, loadCoreData, relationships, representativePaths } from './data.js';
import { EcosystemScene } from './scene.js';
import { TextScene } from './text-scene.js';
import { UI } from './ui.js';
import { loadMapData } from './map-data.js';
import { MobileUI } from './mobile-ui.js';
import { UpdatesView } from './updates-view.js';

async function start() {
  await loadCoreData();
  window.ecosystemData = {representativePaths};
  const mount = document.querySelector('#scene');
  let ui, scene;
  const select = id => { ui.showEntity(id); ui.renderEntityProfile(id); ui.renderModelPortfolio(id); ui.appendPhysicalProvenance(id); };
  try {
    scene = new EcosystemScene(mount, entities, relationships, select);
  } catch (error) {
    // The catalog and core data do not require a GPU or map data.
    console.warn('3D rendering is unavailable; using the catalog.', error);
    mount.replaceChildren();
    scene = new TextScene(mount, entities, relationships, select);
  }
  ui = new UI(entities, relationships, scene, select, [], {}, loadMapData);
  const mobileUI = new MobileUI(ui, scene);
  new UpdatesView(ui, mobileUI);
  document.querySelector('#app').setAttribute('data-ready', 'true');
}

start().catch(error => {
  const scene = document.querySelector('#scene');
  scene.setAttribute('aria-label', 'Core atlas data could not be loaded.');
  const panel = document.createElement('div');
  panel.className = 'data-load-error';
  panel.setAttribute('role', 'alert');
  const title = document.createElement('strong');
  title.textContent = 'The atlas data is unavailable';
  const detail = document.createElement('p');
  detail.textContent = location.protocol === 'file:'
    ? 'Reload and choose the complete data folder to continue.'
    : 'A required data file could not be loaded. Check your connection and retry.';
  const retry = document.createElement('button');
  retry.type = 'button'; retry.textContent = 'Retry loading'; retry.onclick = () => location.reload();
  panel.append(title, detail, retry); scene.replaceChildren(panel);
  console.error('Core atlas data failed to load.', error);
});

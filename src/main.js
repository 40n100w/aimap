import './styles.css';
import './navigation.css';
import './timeline.css';
import { entities,relationships,representativePaths } from './data.js';
import { EcosystemScene } from './scene.js';
import { UI } from './ui.js';

window.ecosystemData={representativePaths};
const scene=new EcosystemScene(document.querySelector('#scene'),entities,relationships,id=>{ui.showEntity(id);ui.renderEntityProfile(id);ui.renderModelPortfolio(id)});
const ui=new UI(entities,relationships,scene,id=>{ui.showEntity(id);ui.renderEntityProfile(id);ui.renderModelPortfolio(id)});

// Textual fallback: the searchable interface and detail panels remain usable if WebGL fails.
window.addEventListener('error',event=>{if(String(event.message).toLowerCase().includes('webgl'))document.querySelector('#scene').setAttribute('aria-label','3D rendering is unavailable. Use search, layers, journeys and entity detail panels to explore the ecosystem textually.')});

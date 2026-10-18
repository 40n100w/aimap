import { MOBILE_QUERY } from './mobile-layout.js';

const icons = {
  ecosystem:'<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(-35 12 12)"/>',
  architecture:'<path d="m3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4"/>',
  gravity:'<circle cx="12" cy="12" r="3"/><path d="M5 4a10 10 0 0 1 15 13M19 20A10 10 0 0 1 4 7"/><circle cx="5" cy="4" r="2"/><circle cx="19" cy="20" r="2"/>',
  models:'<path d="m12 3 9 5v8l-9 5-9-5V8l9-5Zm0 9v9M3 8l9 4 9-4"/>',
  timeline:'<path d="M4 4v16h17M8 14l4-5 4 2 5-7"/><circle cx="12" cy="9" r="1"/>',
  map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Zm6-2v16m6-14v16"/>',
  search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  filters:'<path d="M3 6h18M3 12h18M3 18h18"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>'
};
const svg = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
const focusable = 'button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),summary,[tabindex="0"]';
const visible = element => element && !element.closest('[hidden]') && element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden';

// The mobile presentation reuses the existing controls and feature controllers.
// No separate data, duplicate view state, or alternate mobile URLs are needed.
export class MobileUI {
  constructor(ui, scene) {
    Object.assign(this, {ui, scene, media:matchMedia(MOBILE_QUERY), searchOpen:false, activeDialog:null, inertElements:[], dialogAttributes:new WeakMap()});
    this.app = document.querySelector('#app');
    this.dock = document.querySelector('.control-dock');
    this.createControls();
    document.addEventListener('click', event => this.onClick(event), true);
    document.addEventListener('keydown', event => this.onKeydown(event), true);
    this.media.addEventListener('change', () => this.updateMode());
    window.visualViewport?.addEventListener('resize', () => this.updateViewport());
    window.visualViewport?.addEventListener('scroll', () => this.updateViewport());
    addEventListener('resize', () => this.updateViewport());
    document.addEventListener('fullscreenchange', () => this.scheduleSync());
    this.observer = new MutationObserver(records => {
      // Animated node labels change every frame; only interface changes need
      // to update sheets and focus management.
      if (records.some(record => !record.target.closest?.('#scene'))) this.scheduleSync();
    });
    this.observer.observe(this.app, {subtree:true, childList:true, attributes:true, attributeFilter:['hidden','open']});
    this.observer.observe(document.body, {attributes:true, attributeFilter:['class']});
    this.updateMode();
  }

  createControls() {
    const labels = {ecosystem:'Explore',architecture:'Stack',gravity:'Gravity',models:'Models',timeline:'History',map:'Map'};
    for (const button of document.querySelectorAll('.view-switch [data-view]')) {
      const name = button.textContent;
      button.innerHTML = `<span class="mobile-view-icon">${svg(button.dataset.view)}</span><span class="desktop-view-label">${name}</span><span class="mobile-only mobile-view-label">${labels[button.dataset.view]}</span>`;
      // Keep the full name for assistive technology, including "Architecture".
      button.setAttribute('aria-label', name);
    }
    document.querySelector('.topbar').insertAdjacentHTML('beforeend', `<button class="mobile-only mobile-menu-button" data-mobile="menu" aria-label="All tools and help" aria-controls="mobileMenu" aria-expanded="false">${svg('menu')}<span>More</span></button>`);
    this.app.insertAdjacentHTML('beforeend', `
      <div class="mobile-only mobile-toolbar" aria-label="Atlas shortcuts">
        <button data-mobile="search" aria-controls="mobileSearch" aria-expanded="false">${svg('search')}<span>Search the atlas</span><small>${this.ui.entities.length.toLocaleString()} entries</small></button>
        <button data-mobile="filters" aria-label="Filter layers, relationships and geography">${svg('filters')}<span>Filters</span></button>
      </div>
      <button class="mobile-only mobile-backdrop" hidden data-mobile="dismiss" aria-label="Close open panel" tabindex="-1"></button>
      <aside id="mobileMenu" class="mobile-only mobile-menu" hidden aria-label="All tools and help">
        <div class="panel-head"><div><p class="eyebrow">Your atlas</p><h2>Explore more</h2></div><button data-mobile="dismiss" aria-label="Close tools">×</button></div>
        <p class="mobile-scope"></p>
        <div class="mobile-tool-list">
          <button data-action="journeys"><strong>Guided journeys</strong><span>Follow a path through the whole stack ↗</span></button>
          <button data-action="time"><strong>Relationship time</strong><span>Explore connections by year ↗</span></button>
          <button data-action="layers"><strong>Layers, links &amp; geography</strong><span>Choose what appears in the atlas ↗</span></button>
          <button data-action="methodology"><strong>About &amp; sources</strong><span>Coverage, confidence and review dates ↗</span></button>
          <button data-mobile="fullscreen"><strong>Fullscreen</strong><span class="mobile-fullscreen-label">Use all available screen space ↗</span></button>
        </div>
        <section class="mobile-camera-tools"><h3>3D camera</h3><div><button data-camera="fit">Fit all</button><button data-camera="front">Front</button><button data-camera="top">Top</button><button data-camera="zoom-out" aria-label="Zoom out">−</button><button data-camera="zoom-in" aria-label="Zoom in">+</button></div><p>Drag with one finger to orbit. Pinch to zoom. Drag with two fingers to pan. Tap a node to open its profile.</p></section>
        <section><h3>Reading the scene</h3><p>Circles represent organizations, squares represent hardware, and diamonds represent software. Arrows show flow direction; each profile includes the recorded relationship evidence.</p></section>
        <button class="mobile-reset" data-action="reset">Reset the current view ↺</button>
      </aside>
      <nav class="mobile-only mobile-camera-bar" aria-label="Quick camera controls"><button data-camera="fit">Fit</button><button data-camera="zoom-out" aria-label="Zoom out">−</button><button data-camera="zoom-in" aria-label="Zoom in">+</button></nav>
      <p class="mobile-only mobile-gesture-hint">Drag to orbit · Pinch to zoom · Tap to explore</p>`);
    this.dock.insertAdjacentHTML('afterbegin','<div class="mobile-only mobile-search-head panel-head"><strong>Search &amp; explore</strong><button data-mobile="dismiss" aria-label="Close search">×</button></div>');
    this.dock.id = 'mobileSearch';
    this.menu = document.querySelector('#mobileMenu');
    this.backdrop = document.querySelector('.mobile-backdrop');
  }

  updateMode() {
    const enabled = this.media.matches;
    document.body.classList.toggle('mobile-layout', enabled);
    this.scene.setMobileMode?.(enabled);
    if (enabled) {
      this.desktopDockCollapsed = this.dock.classList.contains('is-collapsed');
      this.dock.classList.remove('is-collapsed');
      for (const details of document.querySelectorAll('.office-map-head,.china-network-legend')) {
        details.dataset.desktopOpen = String(details.open); details.open = false;
      }
    } else {
      this.hideOwnedPanels(); this.setDialog(null);
      this.dock.classList.toggle('is-collapsed', Boolean(this.desktopDockCollapsed));
      for (const details of document.querySelectorAll('[data-desktop-open]')) {
        details.open = details.dataset.desktopOpen === 'true'; delete details.dataset.desktopOpen;
      }
      document.querySelectorAll('.view-switch [aria-current]').forEach(button => button.removeAttribute('aria-current'));
    }
    this.updateViewport(); this.sync();
    requestAnimationFrame(() => this.ui.officeMap.map?.invalidateSize());
  }

  updateViewport() {
    if (!this.media.matches) return;
    const viewport = window.visualViewport;
    document.documentElement.style.setProperty('--mobile-vh', `${viewport?.height || innerHeight}px`);
    document.documentElement.style.setProperty('--mobile-vtop', `${viewport?.offsetTop || 0}px`);
  }

  hideOwnedPanels() {
    this.searchOpen = false; if (!this.menu.hidden) this.menu.hidden = true;
    this.dock.classList.remove('mobile-search-open');
  }

  closeSupplementalPanels() {
    this.ui.timeline.closeDetail();
    if (!document.querySelector('#cableDetail').hidden) document.querySelector('[data-close-cable]')?.click();
    document.querySelectorAll('.office-map-head,.china-network-legend').forEach(details => { details.open=false; });
  }

  onClick(event) {
    if (!this.media.matches) return;
    if (event.target.closest('.skip-link')) {
      event.preventDefault(); event.stopPropagation(); document.querySelector('[data-mobile="search"]').click(); return;
    }
    const button = event.target.closest('[data-mobile],[data-action],[data-view],[data-camera],[data-entity],[data-journey]');
    if (!button) return;
    if (button.dataset.mobile) {
      event.preventDefault(); event.stopPropagation();
      const action=button.dataset.mobile;
      if (action==='dismiss') { this.dismiss(); return; }
      if (action==='fullscreen') { this.ui.toggleFullscreen(); return; }
      this.returnFocus=button;
      this.ui.enter(); this.ui.closeAll(); this.hideOwnedPanels(); this.closeSupplementalPanels();
      if (action==='search') {
        this.searchOpen=true; this.dock.classList.add('mobile-search-open'); this.sync();
        // Focus in the tap handler so iOS can open its keyboard deliberately.
        document.querySelector('#searchInput').focus({preventScroll:true});
      } else if (action==='menu') this.menu.hidden=false;
      else if (action==='filters') this.ui.showFilters('layers');
      this.sync(); return;
    }
    if (button.dataset.action==='explore') {
      event.preventDefault(); event.stopPropagation(); this.ui.enter(); this.sync(); return;
    }
    if (button.dataset.action==='close') {
      event.preventDefault(); event.stopPropagation(); this.dismiss(); return;
    }
    if (button.dataset.view || button.dataset.journey || ['upstream','downstream','stack'].includes(button.dataset.action)) {
      this.ui.enter(); this.hideOwnedPanels(); this.closeSupplementalPanels();
      if (!button.dataset.view && ['timeline','map'].includes(this.currentView())) document.querySelector('[data-view="ecosystem"]').click();
    }
    if (button.dataset.camera && ['timeline','map'].includes(this.currentView())) document.querySelector('[data-view="ecosystem"]').click();
    if (button.dataset.entity || button.dataset.journey || button.dataset.camera || ['layers','relations','geography','time','journeys','methodology','reset'].includes(button.dataset.action)) {
      this.hideOwnedPanels();
      if (document.activeElement?.matches('input')) document.activeElement.blur();
    }
    this.scheduleSync();
  }

  currentView() { return document.querySelector('.view-switch .active')?.dataset.view || 'ecosystem'; }
  scheduleSync() {
    if (this.syncPending) return;
    this.syncPending=true;
    queueMicrotask(() => { this.syncPending=false; this.sync(); });
  }
  sync() {
    if (!this.media.matches) return;
    const view=this.currentView();
    if (document.body.dataset.mobileView!==view) document.body.dataset.mobileView=view;
    this.addTimelinePicker();
    const panels=['#detailPanel','#filterPanel','#journeyPanel','#methodPanel','#timelineInspector','#cableDetail'].map(selector=>document.querySelector(selector));
    let dialog=panels.find(visible);
    if (dialog) this.hideOwnedPanels();
    if (dialog?.id==='cableDetail') document.querySelectorAll('.office-map-head,.china-network-legend').forEach(details=>{if(details.open)details.open=false;});
    dialog ||= this.searchOpen?this.dock:!this.menu.hidden?this.menu:document.querySelector('.office-map-head[open],.china-network-legend[open]');
    if (dialog && !visible(dialog)) dialog=null;
    this.setDialog(dialog);
    if (dialog && !this.dialogAttributes.get(dialog)?.['aria-label']) dialog.setAttribute('aria-label',dialog.querySelector('h2')?.textContent||'Atlas details');
    for (const button of document.querySelectorAll('[data-mobile="search"],[data-mobile="menu"]')) button.setAttribute('aria-expanded',String(button.dataset.mobile==='search'?this.searchOpen:!this.menu.hidden));
    const scope=this.menu.querySelector('.mobile-scope'), text=document.querySelector('#scopeCount').textContent;
    if (scope.textContent!==text) scope.textContent=text;
    const fullscreen=this.menu.querySelector('[data-mobile="fullscreen"]');
    fullscreen.disabled=!document.documentElement.requestFullscreen;
    const fullscreenLabel=fullscreen.querySelector('span'), fullscreenText=fullscreen.disabled?'Use your browser’s display controls':document.fullscreenElement?'Exit fullscreen ↗':'Use all available screen space ↗';
    if (fullscreenLabel.textContent!==fullscreenText) fullscreenLabel.textContent=fullscreenText;
    for (const button of document.querySelectorAll('.view-switch [data-view]')) {
      if (button.dataset.view===view) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
    }
    this.scene.mobilePaused=Boolean(dialog)||view==='map'||view==='timeline';
  }

  addTimelinePicker() {
    const controls=document.querySelector('.timeline-controls');
    if (!controls || document.querySelector('#mobileTimelineYear')) return;
    const label=document.createElement('label'); label.className='mobile-only mobile-year-picker';
    label.innerHTML='<span>Browse a year</span><select id="mobileTimelineYear" aria-label="Browse timeline entries by year"><option value="">Choose a year…</option></select><small>Swipe charts sideways for detail, or choose a year to explore every dated entry.</small>';
    const select=label.querySelector('select');
    const years=[...new Set(this.ui.timeline.scoped().map(entity=>entity.timelineYear).filter(Boolean))].sort((a,b)=>b-a);
    for (const year of years) { const option=document.createElement('option'); option.value=year; option.textContent=year; select.append(option); }
    select.onchange=()=>{if(select.value)this.ui.timeline.showYearDetail(Number(select.value));};
    controls.after(label);
  }

  setDialog(dialog) {
    if (dialog===this.activeDialog) return;
    const previous=this.activeDialog;
    for (const [element,inert] of this.inertElements) element.inert=inert;
    this.inertElements=[];
    for (const host of this.dialogHosts||[]) host.classList.remove('mobile-dialog-host');
    this.dialogHosts=[];
    if (previous) {
      previous.classList.remove('mobile-dialog');
      for (const [attribute,value] of Object.entries(this.dialogAttributes.get(previous))) value===null?previous.removeAttribute(attribute):previous.setAttribute(attribute,value);
    }
    this.activeDialog=dialog;
    (dialog?.parentElement||this.app).append(this.backdrop);
    this.backdrop.hidden=!dialog;
    document.body.classList.toggle('mobile-panel-open',Boolean(dialog));
    if (!dialog) {
      if (previous && this.media.matches) {
        const target=visible(this.returnFocus)?this.returnFocus:document.querySelector('[data-mobile="search"]');
        target?.focus({preventScroll:true});
      }
      return;
    }
    if (!previous && !visible(this.returnFocus)) this.returnFocus=document.activeElement!==document.body && visible(document.activeElement)?document.activeElement:document.querySelector('[data-mobile="search"]');
    const attributes=Object.fromEntries(['role','aria-modal','aria-label','tabindex'].map(key=>[key,dialog.getAttribute(key)]));
    this.dialogAttributes.set(dialog,attributes);
    dialog.classList.add('mobile-dialog'); dialog.setAttribute('role','dialog'); dialog.setAttribute('aria-modal','true'); dialog.tabIndex=-1;
    dialog.setAttribute('aria-label',attributes['aria-label']||dialog.querySelector('h2')?.textContent||'Atlas details');
    for (let host=dialog.parentElement; host && host!==this.app; host=host.parentElement) {
      host.classList.add('mobile-dialog-host'); this.dialogHosts.push(host);
    }
    // Make only the path to the active sheet interactive; this also handles
    // nested timeline and Leaflet panels without moving their DOM nodes.
    for (let child=dialog; child && child!==this.app; child=child.parentElement) {
      for (const sibling of child.parentElement.children) if (sibling!==child && sibling!==this.backdrop) {
        this.inertElements.push([sibling,sibling.inert]); sibling.inert=true;
      }
    }
    if (!dialog.contains(document.activeElement)) dialog.focus({preventScroll:true});
  }

  dismiss() {
    const dialog=this.activeDialog;
    if (!dialog) return;
    if (dialog===this.dock || dialog===this.menu) this.hideOwnedPanels();
    else if (dialog.matches('details')) dialog.open=false;
    else if (dialog.id==='cableDetail') dialog.querySelector('[data-close-cable]')?.click();
    else if (dialog.id==='timelineInspector') this.ui.timeline.closeDetail();
    else dialog.hidden=true;
    this.sync();
  }

  onKeydown(event) {
    if (!this.media.matches) return;
    if ((event.metaKey||event.ctrlKey) && event.key.toLowerCase()==='k') {
      event.preventDefault(); event.stopImmediatePropagation(); document.querySelector('[data-mobile="search"]').click(); return;
    }
    if (!this.activeDialog) return;
    if (event.key==='Escape') { event.preventDefault(); event.stopImmediatePropagation(); this.dismiss(); return; }
    if (event.key!=='Tab') return;
    const items=[...this.activeDialog.querySelectorAll(focusable)].filter(visible);
    const first=items[0], last=items.at(-1);
    if (!first) { event.preventDefault(); this.activeDialog.focus(); }
    else if (event.shiftKey && (document.activeElement===first || !items.includes(document.activeElement))) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && (document.activeElement===last || !this.activeDialog.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
  }
}

// Small RFC 4180-style parser kept in the bundle so the atlas stays dependency-free.
export function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') { cell += '"'; index += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(cell); cell = ''; }
    else if (char === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (char !== '\r') cell += char;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [headers = [], ...values] = rows;
  return values.filter(columns => columns.some(Boolean)).map(columns => Object.fromEntries(headers.map((header, index) => [header, columns[index] ?? ''])));
}

export const numberOrNull = value => value === '' ? null : Number(value);
export const jsonArray = value => value ? JSON.parse(value) : [];

let localFilesPromise;

function chooseLocalDataFolder() {
  if (localFilesPromise) return localFilesPromise;
  localFilesPromise = new Promise(resolve => {
    const scene = document.querySelector('#scene');
    const picker = document.createElement('div');
    picker.className = 'local-data-picker';
    picker.innerHTML = `<strong>Load the atlas data folder</strong><span>Drag the complete <b>data</b> folder onto this box, or use the folder picker if your browser supports it.</span><button type="button">Choose “data” folder</button><input type="file" multiple accept=".csv,text/csv"><small>No files are uploaded. They remain on this machine.</small>`;
    const button = picker.querySelector('button');
    const input = picker.querySelector('input');
    input.setAttribute('webkitdirectory', '');
    input.setAttribute('directory', '');
    input.webkitdirectory = true;
    const finish = files => {
      picker.remove();
      resolve(new Map(files.filter(file => file.name.endsWith('.csv')).map(file => [file.name, file])));
    };
    const readEntry = entry => new Promise((resolveEntry, rejectEntry) => entry.file(resolveEntry, rejectEntry));
    const readDirectory = async directory => {
      const reader = directory.createReader(), files = [];
      while (true) {
        const entries = await new Promise((resolveEntries, rejectEntries) => reader.readEntries(resolveEntries, rejectEntries));
        if (!entries.length) break;
        for (const entry of entries) {
          if (entry.isFile) files.push(await readEntry(entry));
          else if (entry.isDirectory) files.push(...await readDirectory(entry));
        }
      }
      return files;
    };
    picker.addEventListener('dragover', event => { event.preventDefault(); picker.classList.add('is-dragging'); });
    picker.addEventListener('dragleave', () => picker.classList.remove('is-dragging'));
    picker.addEventListener('drop', async event => {
      event.preventDefault();
      picker.classList.remove('is-dragging');
      const entries = [...event.dataTransfer.items].map(item => item.webkitGetAsEntry?.()).filter(Boolean);
      const files = [];
      for (const entry of entries) {
        if (entry.isDirectory) files.push(...await readDirectory(entry));
        else if (entry.isFile) files.push(await readEntry(entry));
      }
      if (files.length) finish(files);
    });
    button.addEventListener('click', async () => {
      if (!window.showDirectoryPicker) { input.click(); return; }
      try {
        const directory = await window.showDirectoryPicker({ mode: 'read' });
        const files = [];
        for await (const entry of directory.values()) if (entry.kind === 'file') files.push(await entry.getFile());
        finish(files);
      } catch (error) {
        if (error.name !== 'AbortError') throw error;
      }
    });
    input.addEventListener('change', () => {
      finish([...input.files]);
    }, { once: true });
    scene.append(picker);
  });
  return localFilesPromise;
}

export async function loadCsv(name) {
  if (location.protocol === 'file:') {
    const files = await chooseLocalDataFolder();
    const file = files.get(name);
    if (!file) throw new Error(`${name} was not found in the selected folder`);
    return parseCsv(await file.text());
  }
  const response = await fetch(new URL(`data/${name}`, document.baseURI), { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load data/${name} (${response.status})`);
  return parseCsv(await response.text());
}

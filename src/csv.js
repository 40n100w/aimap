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

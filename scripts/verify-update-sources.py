"""Read-only source verification; does not rewrite the reviewed ledger."""
import hashlib
import json
from pathlib import Path
from urllib.request import urlopen

root = Path(__file__).resolve().parent.parent
data = json.loads((root / "data/updates.json").read_text())
failures = []
for source in data["sources"]:
    try:
        with urlopen(source["url"], timeout=30) as response:
            body = response.read()
        if hashlib.sha256(body).hexdigest() != source["sha256"]:
            failures.append(f'{source["id"]}: source hash differs')
        text = body.decode("utf-8")
        for version in data["versions"]:
            for citation in version["citations"]:
                if citation["sourceId"] == source["id"] and citation["excerpt"] not in text:
                    failures.append(f'{version["id"]}: excerpt absent from pinned source')
        print(f'Checked {source["id"]}: {len(body)} bytes')
    except Exception as error:
        failures.append(f'{source["id"]}: {error}')
if failures:
    raise SystemExit("\n".join(failures))
print("All source hashes and claim excerpts verified.")

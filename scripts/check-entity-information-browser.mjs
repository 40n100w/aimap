import assert from 'node:assert/strict';

// Uses the production app and the shared browser harness; no separate server or
// browser lifecycle is needed. Searches exercise the same dossier path as users.
export async function checkEntityInformation({ check, ready, mobileDialog }) {
  const openEntity = async (page, id, query) => {
    await ready(page);

    if (await page.locator('[data-mobile="search"]').isVisible()) await page.locator('[data-mobile="search"]').tap();
    await page.locator('#searchInput').fill(query);
    await page.locator(`#searchResults [data-entity="${id}"]`).click();
    await page.locator('#detailPanel .entity-profile').waitFor();
  };
  const product = (page, name) => page.locator('.documented-product').filter({ has:page.getByText(name, { exact:true }) });
  const field = (page, label) => page.locator('.entity-profile dl > div').filter({ has:page.locator('dt').filter({ hasText:new RegExp(`^${label}$`) }) });

  await check('entity information: generic Nanya categories remain unreviewed and gaps remain visible', async page => {
    await openEntity(page, 'nanya-technology', 'Nanya Technology');
    assert.equal(await page.locator('#detailPanel h2').innerText(), 'Nanya Technology');
    assert.match(await page.locator('.information-summary').innerText(), /category overview/);
    assert.match(await page.locator('.entity-products').innerText(), /Not individually reviewed/);
    assert.deepEqual(await page.locator('.unreviewed-products .chips span').allTextContents(), ['DRAM','NAND','HBM']);
    assert.equal(await page.locator('.documented-product').count(), 0);
    assert.match(await field(page, 'Website / documentation').innerText(), /Not yet recorded/);
    assert.match(await field(page, 'Country / region').innerText(), /Not yet recorded/);
    assert.match(await field(page, 'Catalog classification').innerText(), /Identity needs review/);
  });

  await check('entity information: Scale products expose specific evidence and preserve unreviewed categories', async page => {
    await openEntity(page, 'scale-ai', 'Scale AI');
    const nucleus = product(page, 'Scale Nucleus');
    await nucleus.locator('.field-evidence > summary').click();
    assert.match(await nucleus.innerText(), /Documented Nucleus capabilities/);
    assert.match(await nucleus.innerText(), /current account availability/i);
    assert.match(await nucleus.locator('.field-evidence a').first().getAttribute('href'), /^https:\/\/raw\.githubusercontent\.com\/scaleapi\/nucleus-python-client\/[a-f0-9]{40}\//);
    assert.ok((await nucleus.locator('blockquote').innerText()).length > 40);
    const agentex = product(page, 'Agentex');
    await agentex.locator('.field-evidence > summary').click();
    assert.match(await agentex.innerText(), /no inference about deployment customers or paid-service availability/i);
    assert.match(await agentex.locator('.field-evidence a').first().getAttribute('href'), /^https:\/\/raw\.githubusercontent\.com\/scaleapi\/scale-agentex\/[a-f0-9]{40}\//);
    assert.ok((await page.locator('.unreviewed-products .chips span').allTextContents()).includes('Data labeling'));
  });

  await check('entity information: Graviton is hardware and unsupported processor categories are absent', async page => {
    await openEntity(page, 'aws-graviton', 'AWS Graviton');
    assert.match(await page.locator('#detailPanel .entity-type').innerText(), /Hardware \/ physical product/i);
    assert.doesNotMatch(await page.locator('#detailPanel .entity-type').innerText(), /Company \/ organization/i);
    assert.match(await field(page, 'Catalog classification').innerText(), /Technology/);
    const names = await page.locator('.entity-products .chips span, .entity-products .documented-product > strong').allTextContents();
    assert.doesNotMatch(names.join(' '), /x86|RISC-V/i);
    assert.ok(names.some(name => /Graviton/.test(name)));
    const family = product(page, 'Graviton processor family');
    assert.match(await family.innerText(), /Arm-based processors/);
    await family.locator('.field-evidence > summary').click();
    assert.match(await family.innerText(), /Architecture and documented family identities only/);
  });

  await check('entity information: SK hynix software evidence does not certify its HBM portfolio', async page => {
    await openEntity(page, 'sk-hynix', 'SK hynix');
    const reviewedNames = await page.locator('.documented-product > strong').allTextContents();
    assert.ok(reviewedNames.includes('HMSDK'));
    assert.ok(reviewedNames.includes('MemFlow'));
    assert.ok(reviewedNames.every(name => !/^HBM/.test(name)));
    assert.deepEqual(await page.locator('.unreviewed-products .chips span').allTextContents(), ['HBM3E','HBM4']);
    const hmsdk = product(page, 'HMSDK');
    await hmsdk.locator('.field-evidence > summary').click();
    assert.match(await hmsdk.innerText(), /CXL software functionality; no commercial hardware portfolio claim/);
    const memflow = product(page, 'MemFlow');
    await memflow.locator('.field-evidence > summary').click();
    assert.match(await memflow.innerText(), /not HBM\/DRAM hardware or a model-maker supplier relationship/);
  });

  await check('entity information: shared headquarters evidence identifies Recursion and retains its original date', async page => {
    await openEntity(page, 'recursion-valence-labs', 'Recursion Valence Labs');
    assert.equal(await page.locator('#detailPanel h2').innerText(), 'Recursion Valence Labs');
    assert.match(await field(page, 'Headquarters').innerText(), /Not yet recorded/);
    await page.locator('.recorded-locations > summary').click();
    const record = page.locator('.recorded-location').filter({ hasText:'Salt Lake City headquarters' });
    assert.match(await record.innerText(), /Recorded for: Recursion/);
    assert.match(await record.innerText(), /Recorded verification: 2026-08-25/);
    assert.match(await record.innerText(), /Montreal Valence Labs/);
    assert.match(await page.locator('.recorded-locations').innerText(), /do not establish the current global headquarters/);
    assert.match(await record.locator('a').getAttribute('href'), /^https:\/\/www\.sec\.gov\//);
  });

  await check('entity information: deprecated SDK status and its exact source remain visible', async page => {
    await openEntity(page, 'speechmatics', 'Speechmatics');
    const legacy = product(page, 'speechmatics-python (legacy)');
    await legacy.locator('.field-evidence > summary').click();
    assert.match(await legacy.locator('.evidence-attributes').innerText(), /Deprecated[\s\S]*2025-12-31/);
    assert.match(await legacy.locator('blockquote').innerText(), /has been deprecated/);
    assert.match(await legacy.locator('blockquote').innerText(), /2025-12-31/);
    assert.match(await legacy.locator('.field-evidence a').first().getAttribute('href'), /^https:\/\/raw\.githubusercontent\.com\/speechmatics\//);
  });

  await check('entity information: on-device requirements remain scoped to the Apple SDK on mobile', async page => {
    await openEntity(page, 'apple-foundation-models', 'Apple Foundation Models');
    const sdk = product(page, 'Foundation Models SDK for Python');
    await sdk.locator('.field-evidence > summary').tap();
    const attributes = await sdk.locator('.evidence-attributes').innerText();
    assert.match(attributes, /26\.0/);
    assert.match(attributes, /3\.10/);
    assert.match(attributes, /Apple Intelligence enabled on a compatible Mac/);
    assert.match(await page.locator('.information-summary').innerText(), /does not establish an independent company/);
    assert.ok(await page.locator('#detailPanel').evaluate(element => element.scrollWidth <= element.clientWidth + 1));
  }, 390, 844, true);

  await check('entity information: mobile product evidence remains readable and touch accessible', async page => {
    await openEntity(page, 'scale-ai', 'Scale AI');
    if (mobileDialog) await mobileDialog(page, '#detailPanel');
    const nucleus = product(page, 'Scale Nucleus');
    const summary = nucleus.locator('.field-evidence > summary');
    await summary.scrollIntoViewIfNeeded();
    assert.ok((await summary.boundingBox()).height >= 44, 'Evidence accordions need a 44px touch target');
    await summary.tap();
    assert.equal(await nucleus.locator('.field-evidence').getAttribute('open'), '');
    assert.match(await nucleus.innerText(), /Documented Nucleus capabilities/);
    const link = nucleus.locator('.field-evidence a').first();
    await link.scrollIntoViewIfNeeded();
    assert.ok((await link.boundingBox()).height >= 44, 'Source links need a 44px touch target');
    assert.ok(await page.locator('#detailPanel').evaluate(element => element.scrollWidth <= element.clientWidth + 1), 'Expanded evidence must not overflow the sheet horizontally');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await summary.scrollIntoViewIfNeeded();
    await summary.tap();
    assert.equal(await nucleus.locator('.field-evidence').getAttribute('open'), null);
  }, 390, 844, true);
}

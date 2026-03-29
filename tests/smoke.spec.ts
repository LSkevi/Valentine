import { test, expect, Page } from '@playwright/test';

/** Enter the game and dismiss any blocking overlays */
async function enterGame(page: Page) {
  await page.goto('/');
  await page.locator('#titleEnter').click();
  await page.locator('#gameScreen').waitFor({ state: 'visible', timeout: 5000 });
  // Wait for deferred init and overlays to appear
  await page.waitForTimeout(1200);
  // Dismiss overlays in order — daily login appears on top of tutorial
  for (let i = 0; i < 5; i++) {
    // Daily login gift
    const loginBtn = page.locator('.btn-login-claim');
    if (await loginBtn.isVisible({ timeout: 300 }).catch(() => false)) {
      await loginBtn.click();
      await page.waitForTimeout(400);
      continue;
    }
    // Tutorial skip
    const skipBtn = page.locator('#tutorialSkip');
    if (await skipBtn.isVisible({ timeout: 300 }).catch(() => false)) {
      await skipBtn.click();
      await page.waitForTimeout(400);
      continue;
    }
    // Tutorial next (if skip isn't visible but next is)
    const nextBtn = page.locator('#tutorialNext');
    if (await nextBtn.isVisible({ timeout: 300 }).catch(() => false)) {
      await nextBtn.click();
      await page.waitForTimeout(300);
      continue;
    }
    break; // no more overlays
  }
  await page.waitForTimeout(300);
}

test.describe('Yurie Flower Shop — Smoke Tests', () => {

  test('title screen loads and shows Enter button', async ({ page }) => {
    await page.goto('/');
    const title = page.locator('.title-name');
    await expect(title).toBeVisible();
    await expect(title).toContainText("Yurie's");
    const enterBtn = page.locator('#titleEnter');
    await expect(enterBtn).toBeVisible();
  });

  test('can enter the game', async ({ page }) => {
    await page.goto('/');
    await page.locator('#titleEnter').click();
    const gameScreen = page.locator('#gameScreen');
    await expect(gameScreen).toBeVisible({ timeout: 5000 });
    const titleScreen = page.locator('#titleScreen');
    await expect(titleScreen).toBeHidden({ timeout: 3000 });
  });

  test('HUD displays correctly', async ({ page }) => {
    await enterGame(page);
    const coinDisp = page.locator('#coinDisp');
    await expect(coinDisp).toBeVisible();
    const coinText = await coinDisp.textContent();
    expect(Number(coinText)).toBeGreaterThanOrEqual(0);
    const pktDisp = page.locator('#pktDisp');
    await expect(pktDisp).toBeVisible();
  });

  test('garden grid renders with pots', async ({ page }) => {
    await enterGame(page);
    const plots = page.locator('#gardenGrid .plot');
    const count = await plots.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('Packets modal opens and closes', async ({ page }) => {
    await enterGame(page);
    await page.locator('#btnOpenPkt').click();
    // Either packet overlay opens OR toast appears (no packets)
    const overlay = page.locator('#pktOverlay');
    const toast = page.locator('#toast');
    const opened = await overlay.getAttribute('class').then(c => c?.includes('on')).catch(() => false);
    const toastShown = await toast.getAttribute('class').then(c => c?.includes('show')).catch(() => false);
    expect(opened || toastShown).toBeTruthy();
    if (opened) {
      await overlay.locator('.sh-close').click();
      await page.waitForTimeout(500);
    }
  });

  test('Shop modal opens with items', async ({ page }) => {
    await enterGame(page);
    await page.locator('#btnShop').click();
    const overlay = page.locator('#shopOverlay');
    await expect(overlay).toHaveClass(/on/, { timeout: 3000 });
    const items = overlay.locator('.shop-item');
    const count = await items.count();
    expect(count).toBeGreaterThanOrEqual(4);
    await overlay.locator('.sh-close').click();
  });

  test('Journal modal opens', async ({ page }) => {
    await enterGame(page);
    await page.locator('#btnJournal').click();
    const overlay = page.locator('#journalOverlay');
    await expect(overlay).toHaveClass(/on/, { timeout: 3000 });
    await overlay.locator('.sh-close').click();
  });

  test('Achievements modal opens', async ({ page }) => {
    await enterGame(page);
    await page.locator('#btnAchieve').click();
    const overlay = page.locator('#achieveOverlay');
    await expect(overlay).toHaveClass(/on/, { timeout: 3000 });
    await overlay.locator('.sh-close').click();
  });

  test('Garden House modal opens', async ({ page }) => {
    await enterGame(page);
    await page.locator('#btnInv').click();
    const overlay = page.locator('#invOverlay');
    await expect(overlay).toHaveClass(/on/, { timeout: 3000 });
    await overlay.locator('.sh-close').click();
  });

  test('Style/Customize modal opens', async ({ page }) => {
    await enterGame(page);
    await page.locator('#btnCustom').click();
    const overlay = page.locator('#customOverlay');
    await expect(overlay).toHaveClass(/on/, { timeout: 3000 });
    await overlay.locator('.sh-close').click();
  });

  test('water section renders', async ({ page }) => {
    await enterGame(page);
    const drops = page.locator('#dropRow .wdrop');
    const count = await drops.count();
    expect(count).toBeGreaterThanOrEqual(1);
    const whirlBtn = page.locator('#whirlBtn');
    await expect(whirlBtn).toBeVisible();
  });

  test('seed tray is present', async ({ page }) => {
    await enterGame(page);
    const tray = page.locator('.seed-tray');
    await expect(tray).toBeVisible();
  });

  test('SVG pots render in garden', async ({ page }) => {
    await enterGame(page);
    const potSvgs = page.locator('#gardenGrid .pot-svg');
    const count = await potSvgs.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('help button opens help guide', async ({ page }) => {
    await enterGame(page);
    await page.locator('#helpBtn').click();
    const overlay = page.locator('#helpOverlay');
    await expect(overlay).toHaveClass(/on/, { timeout: 3000 });
    const content = page.locator('#helpContent');
    await expect(content).toBeVisible();
    await overlay.locator('.sh-close').click();
  });

  test('tapping a pot opens a modal or shows toast', async ({ page }) => {
    await enterGame(page);
    const firstPlot = page.locator('#gardenGrid .plot').first();
    await expect(firstPlot).toBeVisible();
    await firstPlot.click();
    await page.waitForTimeout(500);
    // Either a planting/bloom modal opens or a "no seeds" toast appears
    const [plantOpen, bloomOpen, toastShown] = await Promise.all([
      page.locator('#plantOverlay').getAttribute('class').then(c => c?.includes('on')).catch(() => false),
      page.locator('#bloomOverlay').getAttribute('class').then(c => c?.includes('on')).catch(() => false),
      page.locator('#toast').getAttribute('class').then(c => c?.includes('show')).catch(() => false),
    ]);
    expect(plantOpen || bloomOpen || toastShown).toBeTruthy();
  });

  test('no critical JS errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await enterGame(page);
    await page.waitForTimeout(1000);
    // No uncaught exceptions
    expect(errors).toHaveLength(0);
  });
});

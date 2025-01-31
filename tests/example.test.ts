import { test } from '../src/PlaywrightLogger';

test('Example test with logs', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('text=More information');
});

test('Example test with logging number 2', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('text=More information');
  await page.fill('input[name="q"]', 'Playwright');
  await page.click('text=Search');
  await page.waitForSelector('text=Results');
});

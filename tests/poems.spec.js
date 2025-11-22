import { test, expect } from '@playwright/test';

test.describe('诗歌集页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/poems');
  });

  test('应该显示页面标题', async ({ page }) => {
    await expect(page).toHaveTitle(/诗歌集/);
    await expect(page.locator('h1')).toContainText('我的诗歌集');
  });

  test('应该显示统计数据', async ({ page }) => {
    await expect(page.locator('text=诗歌作品')).toBeVisible();
    await expect(page.locator('text=4')).toBeVisible(); // 创作年份
  });

  test('应该显示创作介绍', async ({ page }) => {
    await expect(page.locator('text=关于我的诗歌创作')).toBeVisible();
    await expect(page.locator('text=四年来')).toBeVisible();
  });

  test('应该显示创作理念', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    await expect(page.locator('text=我的创作理念')).toBeVisible();
    await expect(page.locator('text=观察生活')).toBeVisible();
    await expect(page.locator('text=真实情感')).toBeVisible();
    await expect(page.locator('text=坚持创作')).toBeVisible();
    await expect(page.locator('text=不断进步')).toBeVisible();
  });

  test('应该显示创作主题', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // 如果诗歌正在整理，应该显示主题类别
    const hasPoems = await page.locator('text=诗歌作品').count();
    if (hasPoems === 0) {
      await expect(page.locator('text=自然主题')).toBeVisible();
      await expect(page.locator('text=生活感悟')).toBeVisible();
    }
  });

  test('应该显示名言', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    await expect(page.locator('text=文字是心灵的画笔')).toBeVisible();
  });
});


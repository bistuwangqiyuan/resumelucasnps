import { test, expect } from '@playwright/test';

test.describe('奖项成就页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/achievements');
  });

  test('应该显示页面标题', async ({ page }) => {
    await expect(page).toHaveTitle(/奖项成就/);
    await expect(page.locator('h1')).toContainText('奖项成就');
  });

  test('应该显示统计数据', async ({ page }) => {
    await expect(page.locator('text=7')).toBeVisible(); // 国家级
    await expect(page.locator('text=5')).toBeVisible(); // 省部级
    await expect(page.locator('text=4')).toBeVisible(); // 校级
  });

  test('应该显示分类统计', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('text=作文')).toBeVisible();
    await expect(page.locator('text=AI/机器人')).toBeVisible();
    await expect(page.locator('text=体育/武术')).toBeVisible();
  });

  test('应该显示奖项时间线', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // 检查最新的奖项
    await expect(page.locator('text=2025.01')).toBeVisible();
    await expect(page.locator('text=叶圣陶杯')).toBeVisible();
    await expect(page.locator('text=韶华杯')).toBeVisible();
  });

  test('应该显示证书图片', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // 检查图片元素存在
    const images = page.locator('img[alt*="奖"]');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test('应该显示奖项级别标签', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('text=国家级').first()).toBeVisible();
    await expect(page.locator('text=省部级').first()).toBeVisible();
  });

  test('应该显示坚持的力量部分', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    await expect(page.locator('text=坚持的力量')).toBeVisible();
  });
});


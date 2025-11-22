import { test, expect } from '@playwright/test';

test.describe('关于我页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('应该显示页面标题', async ({ page }) => {
    await expect(page).toHaveTitle(/关于我/);
    await expect(page.locator('h1')).toContainText('关于我');
  });

  test('应该显示基本信息', async ({ page }) => {
    await expect(page.locator('text=王一然')).toBeVisible();
    await expect(page.locator('text=永泰小学')).toBeVisible();
    await expect(page.locator('text=五年级四班')).toBeVisible();
    await expect(page.locator('text=班级旗手')).toBeVisible();
  });

  test('应该显示家庭信息', async ({ page }) => {
    await expect(page.locator('text=王启源')).toBeVisible();
    await expect(page.locator('text=赵彩萍')).toBeVisible();
    await expect(page.locator('text=北京信息科技大学')).toBeVisible();
  });

  test('应该显示自荐信', async ({ page }) => {
    await expect(page.locator('text=大家好，我是王一然')).toBeVisible();
    await expect(page.locator('text=叶圣陶')).toBeVisible();
  });

  test('应该显示五大自荐理由', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('text=人文素养与科技适应')).toBeVisible();
    await expect(page.locator('text=价值观与品德')).toBeVisible();
    await expect(page.locator('text=科学精神')).toBeVisible();
    await expect(page.locator('text=实践能力')).toBeVisible();
    await expect(page.locator('text=身心健康与理想')).toBeVisible();
  });

  test('应该显示学业成绩', async ({ page }) => {
    await expect(page.locator('text=学业成绩')).toBeVisible();
    await expect(page.locator('text=语文')).toBeVisible();
    await expect(page.locator('text=数学')).toBeVisible();
    await expect(page.locator('text=英语')).toBeVisible();
    await expect(page.locator('text=104.3分')).toBeVisible();
  });
});


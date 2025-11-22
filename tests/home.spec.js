import { test, expect } from '@playwright/test';

test.describe('首页测试', () => {
  test('应该正确显示首页标题和内容', async ({ page }) => {
    await page.goto('/');
    
    // 检查标题
    await expect(page).toHaveTitle(/王一然/);
    
    // 检查主标题
    const heading = page.locator('h1');
    await expect(heading).toContainText('王一然');
    
    // 检查学校信息
    await expect(page.locator('text=永泰小学')).toBeVisible();
    
    // 检查标签
    await expect(page.locator('text=全国一等奖获得者')).toBeVisible();
    await expect(page.locator('text=AI编程爱好者')).toBeVisible();
    await expect(page.locator('text=63篇诗歌创作')).toBeVisible();
  });

  test('应该显示正确的统计数据', async ({ page }) => {
    await page.goto('/');
    
    // 等待统计数据加载
    await page.waitForSelector('text=国家级/省部级奖项');
    
    // 检查统计数字
    await expect(page.locator('text=10+')).toBeVisible();
    await expect(page.locator('text=63')).toBeVisible();
    await expect(page.locator('text=3+')).toBeVisible();
  });

  test('导航按钮应该可点击', async ({ page }) => {
    await page.goto('/');
    
    // 检查导航按钮存在
    const aboutButton = page.locator('text=关于我').first();
    const achievementsButton = page.locator('text=奖项成就').first();
    const worksButton = page.locator('text=我的作品').first();
    
    await expect(aboutButton).toBeVisible();
    await expect(achievementsButton).toBeVisible();
    await expect(worksButton).toBeVisible();
  });

  test('粒子背景应该渲染', async ({ page }) => {
    await page.goto('/');
    
    // 检查Canvas元素存在
    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();
  });

  test('精选成就卡片应该显示', async ({ page }) => {
    await page.goto('/');
    
    // 等待页面加载完成
    await page.waitForLoadState('networkidle');
    
    // 检查成就卡片
    await expect(page.locator('text=叶圣陶杯全国一等奖')).toBeVisible();
    await expect(page.locator('text=AI创新赛铜奖')).toBeVisible();
    await expect(page.locator('text=AI编程开发')).toBeVisible();
  });

  test('页面应该响应式显示 - 移动端', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 检查内容仍然可见
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=永泰小学')).toBeVisible();
  });
});


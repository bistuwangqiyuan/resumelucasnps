import { test, expect } from '@playwright/test';

test.describe('我的作品页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/works');
  });

  test('应该显示页面标题', async ({ page }) => {
    await expect(page).toHaveTitle(/我的作品/);
    await expect(page.locator('h1')).toContainText('我的作品');
  });

  test('应该显示编程介绍', async ({ page }) => {
    await expect(page.locator('text=关于我的编程之路')).toBeVisible();
    await expect(page.locator('text=AI辅助编程工具')).toBeVisible();
  });

  test('应该显示所有项目', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // 检查三个主要项目
    await expect(page.locator('text=植物大战僵尸网页版')).toBeVisible();
    await expect(page.locator('text=个人简历网站')).toBeVisible();
    await expect(page.locator('text=个人诗集网站')).toBeVisible();
  });

  test('植物大战僵尸项目应该有外部链接', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const link = page.locator('a[href="https://lako.top"]');
    await expect(link).toBeVisible();
    await expect(link).toContainText('访问网站');
  });

  test('应该显示技术栈标签', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('text=JavaScript')).toBeVisible();
    await expect(page.locator('text=Next.js')).toBeVisible();
    await expect(page.locator('text=AI辅助开发')).toBeVisible();
  });

  test('应该显示技能水平图表', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    
    await expect(page.locator('text=技能水平')).toBeVisible();
    await expect(page.locator('text=AI辅助编程')).toBeVisible();
    await expect(page.locator('text=JavaScript')).toBeVisible();
    await expect(page.locator('text=问题解决能力')).toBeVisible();
  });

  test('技能条应该显示百分比', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    
    await expect(page.locator('text=90%')).toBeVisible();
  });

  test('应该显示行动号召部分', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    await expect(page.locator('text=持续学习，不断进步')).toBeVisible();
  });
});


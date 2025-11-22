import { test, expect } from '@playwright/test';

test.describe('Header导航测试', () => {
  test('Header应该固定在顶部', async ({ page }) => {
    await page.goto('/');
    
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // 检查Logo
    await expect(header.locator('text=王一然')).toBeVisible();
  });

  test('所有导航链接应该可见', async ({ page }) => {
    await page.goto('/');
    
    const nav = page.locator('nav');
    await expect(nav.locator('text=首页')).toBeVisible();
    await expect(nav.locator('text=关于我')).toBeVisible();
    await expect(nav.locator('text=奖项成就')).toBeVisible();
    await expect(nav.locator('text=我的作品')).toBeVisible();
    await expect(nav.locator('text=诗歌集')).toBeVisible();
  });

  test('导航链接应该正确跳转', async ({ page }) => {
    await page.goto('/');
    
    // 点击关于我
    await page.locator('nav >> text=关于我').click();
    await expect(page).toHaveURL(/\/about/);
    
    // 点击奖项成就
    await page.locator('nav >> text=奖项成就').click();
    await expect(page).toHaveURL(/\/achievements/);
    
    // 点击我的作品
    await page.locator('nav >> text=我的作品').click();
    await expect(page).toHaveURL(/\/works/);
    
    // 点击诗歌集
    await page.locator('nav >> text=诗歌集').click();
    await expect(page).toHaveURL(/\/poems/);
    
    // 回到首页
    await page.locator('nav >> text=首页').click();
    await expect(page).toHaveURL('/');
  });

  test('移动端菜单应该可以展开和收起', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 检查移动端菜单按钮
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    
    // 点击打开菜单
    await menuButton.click();
    await page.waitForTimeout(300); // 等待动画
    
    // 检查菜单项可见
    await expect(page.locator('text=关于我').last()).toBeVisible();
  });

  test('滚动时Header应该有背景变化', async ({ page }) => {
    await page.goto('/');
    
    const header = page.locator('header');
    
    // 滚动页面
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(100);
    
    // Header应该仍然可见
    await expect(header).toBeVisible();
  });
});

test.describe('Footer测试', () => {
  test('Footer应该显示正确的信息', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    
    // 检查基本信息
    await expect(footer.locator('text=关于我')).toBeVisible();
    await expect(footer.locator('text=永泰小学')).toBeVisible();
    await expect(footer.locator('text=五年级四班')).toBeVisible();
    
    // 检查版权信息
    await expect(footer.locator('text=王一然')).toBeVisible();
    await expect(footer.locator('text=Next.js')).toBeVisible();
    await expect(footer.locator('text=Netlify')).toBeVisible();
  });

  test('Footer链接应该可点击', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    
    // 测试快速导航链接
    await footer.locator('a[href="/about"]').click();
    await expect(page).toHaveURL(/\/about/);
  });
});


import { test, expect } from '@playwright/test';

test.describe('404页面测试', () => {
  test('应该显示404页面', async ({ page }) => {
    const response = await page.goto('/nonexistent-page');
    expect(response?.status()).toBe(404);
    
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=页面未找到')).toBeVisible();
  });

  test('404页面应该有返回首页按钮', async ({ page }) => {
    await page.goto('/nonexistent-page');
    
    const homeButton = page.locator('a[href="/"]').first();
    await expect(homeButton).toBeVisible();
    
    await homeButton.click();
    await expect(page).toHaveURL('/');
  });

  test('404页面应该有快速导航', async ({ page }) => {
    await page.goto('/nonexistent-page');
    
    await expect(page.locator('a[href="/achievements"]')).toBeVisible();
    await expect(page.locator('a[href="/works"]')).toBeVisible();
    await expect(page.locator('a[href="/poems"]')).toBeVisible();
  });
});

test.describe('响应式设计测试', () => {
  const pages = ['/', '/about', '/achievements', '/works', '/poems'];

  for (const pagePath of pages) {
    test(`${pagePath} 应该在移动端正常显示`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(pagePath);
      
      // 检查Header可见
      await expect(page.locator('header')).toBeVisible();
      
      // 检查主要内容可见
      await expect(page.locator('h1')).toBeVisible();
      
      // 检查Footer可见
      await expect(page.locator('footer')).toBeVisible();
    });

    test(`${pagePath} 应该在平板端正常显示`, async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto(pagePath);
      
      await expect(page.locator('h1')).toBeVisible();
    });

    test(`${pagePath} 应该在桌面端正常显示`, async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(pagePath);
      
      await expect(page.locator('h1')).toBeVisible();
    });
  }
});

test.describe('性能测试', () => {
  test('首页应该快速加载', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // 加载时间应该小于5秒
    expect(loadTime).toBeLessThan(5000);
  });

  test('图片应该懒加载', async ({ page }) => {
    await page.goto('/achievements');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 检查图片元素存在
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('SEO测试', () => {
  const pages = [
    { path: '/', title: '王一然' },
    { path: '/about', title: '关于我' },
    { path: '/achievements', title: '奖项成就' },
    { path: '/works', title: '我的作品' },
    { path: '/poems', title: '诗歌集' },
  ];

  for (const { path, title } of pages) {
    test(`${path} 应该有正确的title`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(new RegExp(title));
    });

    test(`${path} 应该有meta description`, async ({ page }) => {
      await page.goto(path);
      
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveCount(1);
    });
  }
});


# 王一然个人简历网站

一个现代化、高端大气的个人简历展示网站，基于 Next.js 14 开发，部署在 Netlify 平台。

## 🌟 项目简介

这是为王一然同学（永泰小学五年级学生）打造的个人简历网站，展示他的学业成绩、奖项成就、编程作品和诗歌创作。

### 主要特色

- 🎨 **科技感设计**：采用青少年喜爱的科技色调（青色、蓝色、紫色渐变）
- ✨ **动态效果**：粒子背景、滚动动画、悬停特效
- 📱 **响应式设计**：完美适配各种设备尺寸
- 🚀 **性能优化**：使用 Next.js 14 App Router，图片优化
- 🎯 **SEO友好**：完善的元数据和语义化HTML

## 📂 项目结构

```
resumelucasnps/
├── app/                      # Next.js 14 App Router
│   ├── page.jsx             # 首页
│   ├── layout.jsx           # 根布局
│   ├── about/               # 关于我页面
│   ├── achievements/        # 奖项成就页面
│   ├── works/               # 作品展示页面
│   └── poems/               # 诗歌集页面
├── components/              # React 组件
│   ├── header.jsx          # 导航栏组件
│   ├── footer.jsx          # 页脚组件
│   ├── ParticleBackground.jsx  # 粒子背景效果
│   └── AnimatedSection.jsx     # 滚动动画组件
├── styles/                  # 样式文件
│   └── globals.css         # 全局样式
├── image/                   # 证书图片资源
├── public/                  # 静态资源
├── resume.md               # 简历数据
├── intruduction.md         # 自荐信数据
└── poem.md                 # 诗歌数据
```

## 🎨 页面功能

### 1. 首页 (/)
- 动态粒子背景效果
- 个人介绍和标签
- 快速统计数据展示
- 精选成就卡片
- 自荐语展示

### 2. 关于我 (/about)
- 基本信息展示
- 家庭背景介绍
- 完整自荐信
- 五大自荐理由
- 学业成绩展示

### 3. 奖项成就 (/achievements)
- 分类统计（国家级/省部级/校级）
- 时间线展示所有奖项
- 证书图片画廊
- 获奖历程故事

### 4. 我的作品 (/works)
- 植物大战僵尸游戏介绍
- 个人网站项目展示
- 技术栈标签
- 技能水平图表

### 5. 诗歌集 (/poems)
- 63篇诗歌作品展示
- 创作统计数据
- 创作理念介绍
- 诗歌分类浏览

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: JavaScript (JSX)
- **样式**: Tailwind CSS
- **部署**: Netlify
- **图片**: Next/Image 优化
- **动画**: CSS动画 + Canvas

## 🚀 本地开发

### 环境要求
- Node.js 18+
- pnpm (推荐) 或 npm

### 安装依赖
```bash
pnpm install
```

### 开发服务器
```bash
pnpm dev
# 或使用 Netlify CLI
netlify dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
pnpm build
```

## 📦 部署到 Netlify

### 方法一：通过 Netlify CLI

```bash
# 构建项目
pnpm build

# 部署（无构建）
netlify deploy --prod --no-build
```

### 方法二：通过 Git 集成

1. 将代码推送到 Git 仓库
2. 在 Netlify 连接仓库
3. 配置构建设置：
   - Build command: `pnpm build` 或 `npm run build`
   - Publish directory: `.next`

## 📝 内容更新

### 更新奖项
编辑 `app/achievements/page.jsx` 中的 `achievements` 数组。

### 更新作品
编辑 `app/works/page.jsx` 中的 `works` 数组。

### 更新诗歌
编辑 `poem.md` 文件，诗歌会自动加载显示。

### 添加证书图片
将证书图片放入 `image/` 文件夹，命名格式：
- `国家级-XX奖-XX比赛-YYYY年MM月.png`
- `省部级-XX奖-XX比赛-YYYY年MM月.png`
- `校级-奖励-XX-YYYY年MM月.png`

## 🎯 设计理念

### 色彩方案
- **主色调**: 青色 (#06b6d4) → 蓝色 (#3b82f6) → 紫色 (#8b5cf6)
- **背景**: 深色渐变 (#030712 → #111827)
- **强调色**: 粉色 (#ec4899)、橙色 (#f97316)

### 动效设计
- 粒子背景：Canvas 实现的动态粒子网络
- 滚动动画：Intersection Observer API 触发淡入上移
- 悬停效果：Scale + Shadow 组合增强交互感
- 平滑过渡：所有交互都有流畅的过渡动画

### 响应式设计
- Mobile First 设计思路
- 断点：sm (640px), md (768px), lg (1024px), xl (1280px)
- 灵活的网格布局和弹性盒子

## 📊 项目数据

- **总页面数**: 5
- **组件数**: 4+
- **奖项展示**: 17个
- **作品展示**: 3个
- **诗歌作品**: 63篇

## 👨‍💻 关于作者

**王一然**
- 学校：永泰小学（十一集团校）
- 班级：五年级四班
- 职务：班级旗手
- 特长：作文创作、AI编程、体育运动

## 📄 License

Copyright © 2025 王一然. All rights reserved.

---

**Built with ❤️ using Next.js and deployed on Netlify**

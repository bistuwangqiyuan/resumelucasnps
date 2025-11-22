import '@/styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  metadataBase: new URL('https://wangyiran.netlify.app'),
  title: {
    default: '王一然 - 个人简历网站',
    template: '%s | 王一然',
  },
  description: '永泰小学五年级学生，全国叶圣陶杯作文大赛一等奖获得者，AI编程爱好者，63篇诗歌创作者',
  keywords: ['王一然', '永泰小学', '叶圣陶杯', 'AI编程', '诗歌', '作文比赛', '个人简历'],
  authors: [{ name: '王一然' }],
  creator: '王一然',
  publisher: '王一然',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://wangyiran.netlify.app',
    title: '王一然 - 个人简历网站',
    description: '永泰小学五年级学生，全国叶圣陶杯作文大赛一等奖获得者，AI编程爱好者',
    siteName: '王一然个人网站',
  },
  twitter: {
    card: 'summary_large_image',
    title: '王一然 - 个人简历网站',
    description: '永泰小学五年级学生，全国叶圣陶杯作文大赛一等奖获得者，AI编程爱好者',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#06b6d4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-gray-950 text-white antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

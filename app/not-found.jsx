import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                404
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              页面未找到
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              抱歉，您访问的页面不存在。可能是链接错误或页面已被移除。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                返回首页
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                关于我
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                href="/achievements" 
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-gray-300 text-sm">奖项成就</div>
              </Link>
              
              <Link 
                href="/works" 
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">💻</div>
                <div className="text-gray-300 text-sm">我的作品</div>
              </Link>
              
              <Link 
                href="/poems" 
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">📖</div>
                <div className="text-gray-300 text-sm">诗歌集</div>
              </Link>
              
              <Link 
                href="/about" 
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">👤</div>
                <div className="text-gray-300 text-sm">关于我</div>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


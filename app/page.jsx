import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: '王一然 - 个人简历网站',
  description: '永泰小学五年级学生，全国叶圣陶杯作文大赛一等奖获得者，AI编程爱好者',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Particle Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection delay={0}>
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-6xl font-bold text-white">王</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              王一然
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              永泰小学（十一集团校）五年级学生
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium shadow-lg shadow-cyan-500/50">
                🏆 全国一等奖获得者
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium shadow-lg shadow-blue-500/50">
                💻 AI编程爱好者
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium shadow-lg shadow-purple-500/50">
                ✍️ 63篇诗歌创作
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/about" 
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="flex items-center gap-2">
                  关于我
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link 
                href="/achievements" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="flex items-center gap-2">
                  奖项成就
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link 
                href="/works" 
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="flex items-center gap-2">
                  我的作品
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">国家级/省部级奖项</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-blue-400 mb-2">63</div>
                <div className="text-gray-300">诗歌作品</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-300">编程项目</div>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-pink-400 mb-2">优秀</div>
                <div className="text-gray-300">学业成绩</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              精选成就
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">叶圣陶杯全国一等奖</h3>
                <p className="text-gray-300 mb-4">2025年1月获得全国"叶圣陶杯"华人青少年作文大赛小学组一等奖</p>
                <Link href="/achievements" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
                  查看详情 <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">AI创新赛铜奖</h3>
                <p className="text-gray-300 mb-4">2023年10月获全国青少年人工智能挑战赛铜奖，机器人工程设计专项赛</p>
                <Link href="/achievements" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  查看详情 <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">AI编程开发</h3>
                <p className="text-gray-300 mb-4">自主使用AI开发植物大战僵尸网页版游戏及多个个人网站项目</p>
                <Link href="/works" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  查看详情 <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Self-Introduction Highlight */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                关于我
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                大家好，我是王一然，我很希望能收获您手中小小的票。就像我从22年起参加了一共6次叶圣陶的作文比赛，
                一共参加了数次线下的作文活动，大多数都是没有奖项或者二等奖，但是经过多次的坚持，就能获得更好的未来，
                就像每一位向上的同学，只要努力就有收获，只要努力就能变成更好的自己。
              </p>
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                了解更多
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export const metadata = {
  title: '我的作品 - 王一然',
  description: '查看王一然的编程作品、游戏开发和其他创意项目',
};

export default function WorksPage() {
  const works = [
    {
      title: '植物大战僵尸网页版',
      description: '基于AI编程技术开发的经典塔防游戏网页版，实现了完整的游戏机制、精美的界面设计和流畅的游戏体验。这个项目展示了我对游戏开发的热情和对AI编程的掌握。',
      tech: ['JavaScript', 'HTML5', 'Canvas', 'AI辅助开发'],
      link: 'https://lako.top',
      status: '已上线',
      icon: '🎮',
      gradient: 'from-green-500 to-emerald-600',
      features: [
        '完整的游戏关卡设计',
        '多种植物和僵尸类型',
        '流畅的动画效果',
        '响应式界面设计',
        '存档系统',
      ],
    },
    {
      title: '个人简历网站',
      description: '你现在正在浏览的这个网站！使用Next.js和现代化的前端技术栈开发，展示个人信息、奖项成就和作品集。采用科技感十足的设计风格，包含粒子特效、滚动动画等动态效果。',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
      link: '#',
      status: '当前网站',
      icon: '🌐',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        '响应式设计',
        '动态粒子背景',
        '滚动动画效果',
        '图片画廊展示',
        'SEO优化',
      ],
    },
    {
      title: '个人诗集网站',
      description: '展示63篇原创诗歌作品的在线诗集平台。通过优雅的排版和精心设计的阅读体验，让每一首诗歌都能完美呈现。支持分类浏览、搜索功能和收藏系统。',
      tech: ['Next.js', 'React', 'Markdown', 'AI辅助开发'],
      link: '/poems',
      status: '集成中',
      icon: '📖',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        '63篇原创诗歌',
        '优雅的阅读体验',
        '分类和标签系统',
        '搜索功能',
        '响应式设计',
      ],
    },
  ];

  const skills = [
    { name: 'AI辅助编程', level: 90, color: 'from-cyan-500 to-blue-500', icon: '🤖' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500', icon: '📜' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500', icon: '🎨' },
    { name: 'Next.js/React', level: 80, color: 'from-blue-500 to-purple-500', icon: '⚛️' },
    { name: '游戏开发', level: 75, color: 'from-purple-500 to-pink-500', icon: '🎮' },
    { name: '问题解决能力', level: 95, color: 'from-green-500 to-emerald-500', icon: '💡' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              我的作品
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              用AI编程创造未来 · 让创意变为现实
            </p>
          </div>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💻</div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-400 mb-3">关于我的编程之路</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    作为一名小学五年级学生，我对编程和科技充满热情。通过学习和使用AI辅助编程工具，
                    我能够将创意快速转化为实际的项目。虽然我还在学习的道路上，但我相信通过不断的实践和努力，
                    能够创造出更多有趣和有价值的作品。
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    编程不仅让我学会了如何解决问题，更重要的是培养了我的逻辑思维能力和创造力。
                    我期待在未来能够用技术为更多人带来便利和快乐。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection delay={0.3}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              项目展示
            </h2>
            <div className="space-y-8">
              {works.map((work, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-102 shadow-xl"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${work.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {work.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 bg-gradient-to-r ${work.gradient} text-white rounded-full text-sm font-bold`}>
                                {work.status}
                              </span>
                            </div>
                          </div>
                          {work.link && work.link !== '#' && (
                            <a
                              href={work.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
                            >
                              访问网站 →
                            </a>
                          )}
                          {work.link === '#' && (
                            <div className="px-6 py-3 bg-gray-700 rounded-lg text-gray-300 font-medium">
                              当前网站
                            </div>
                          )}
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          {work.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">技术栈：</div>
                          <div className="flex flex-wrap gap-2">
                            {work.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">主要特性：</div>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {work.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                                <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              技能水平
            </h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                    </div>
                    <span className="text-lg font-bold text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">持续学习，不断进步</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                编程是一个永无止境的学习过程。我会继续探索新技术，挑战新项目，
                用代码创造更多有趣的作品。期待未来能够为社会做出更大的贡献！
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/achievements"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
                >
                  查看我的奖项 →
                </Link>
                <Link
                  href="/poems"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-purple-500/30"
                >
                  阅读我的诗歌 →
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


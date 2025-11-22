import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export const metadata = {
  title: '奖项成就 - 王一然',
  description: '查看王一然获得的各项荣誉和奖项',
};

export default function AchievementsPage() {
  // 按照时间倒序排列的奖项列表
  const achievements = [
    {
      date: '2025.01',
      title: '全国"叶圣陶杯"华人青少年作文大赛小学组一等奖',
      level: '国家级',
      category: '作文',
      image: '/image/国家级-一等奖-叶圣陶作文-2025年1月.png',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      date: '2025.01',
      title: '北京市"韶华杯"青少年美育征文小学高年级组二等奖',
      level: '省部级',
      category: '作文',
      image: '/image/省部级-二等奖-韶华杯青少年作文-2025年1月14日.png',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      date: '2025.01',
      title: '中华儿童文化艺术促进会社会实践证书',
      level: '省部级',
      category: '社会实践',
      image: '/image/省部级-奖励-中华儿童文化艺术促进会社会时间证书2025年1月14日.png',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      date: '2024.12',
      title: '永泰小学"探寻生态智慧 畅享科技之旅"研学活动 "研究小达人"称号',
      level: '校级',
      category: '研学',
      image: '/image/校级-奖励-永泰小学研究小达人-2024年12月.png',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      date: '2024.07',
      title: '永泰小学 "文明之星"称号',
      level: '校级',
      category: '综合',
      image: '/image/校级-奖励-永泰小学文明之星-2024年7月.png',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      date: '2024.01',
      title: '永泰小学 "朗读之星"称号',
      level: '校级',
      category: '语文',
      image: '/image/校级-奖励-永泰小学朗读之星-2024年1月.png',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      date: '2024.01',
      title: '全国"叶圣陶杯"华人青少年作文大赛小学组一等奖',
      level: '国家级',
      category: '作文',
      image: '/image/国家级-一等奖-叶圣陶作文-2024年1月.png',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      date: '2023.12',
      title: '北京市"叶圣陶杯"华人青少年作文大赛小学组二等奖',
      level: '省部级',
      category: '作文',
      image: '/image/省部级-二等奖-叶圣陶作文-2023年12月.png',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      date: '2023.10',
      title: '全国青少年人工智能挑战赛铜奖（机器人工程设计专项赛）',
      level: '国家级',
      category: 'AI/机器人',
      image: '/image/国家级-铜奖-全国青少年人工智能创新赛-2023年10月.png',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      date: '2023.09',
      title: '北京市青少年人工智能创新赛二等奖',
      level: '省部级',
      category: 'AI/机器人',
      image: '/image/省部级-二等奖-北京市青少年人工智能创新赛-2023年9月.png',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      date: '2023.08',
      title: '全国"叶圣陶杯"华人青少年作文大赛小学组二等奖',
      level: '国家级',
      category: '作文',
      image: '/image/国家级-二等奖-叶圣陶作文-2023年8月.png',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      date: '2023.07',
      title: '永泰小学 "朗读之星"称号',
      level: '校级',
      category: '语文',
      image: '/image/校级-奖励-永泰小学朗读之星-2023年7月.png',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      date: '2023.06',
      title: '北京市"叶圣陶杯"华人青少年作文大赛小学组二等奖',
      level: '省部级',
      category: '作文',
      image: '/image/省部级-二等奖-叶圣陶作文-2023年6月.png',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      date: '2023.04',
      title: '全国第七届华夏武状元少年英雄争霸赛 男子少儿丙组 第二名',
      level: '国家级',
      category: '体育/武术',
      image: '/image/国家级-少儿武术运动水平等级达标赛-第二名-2023年4月.jpg',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      date: '2023.04',
      title: '全国少儿武术运动水平等级达标赛 "最佳运动员"称号',
      level: '国家级',
      category: '体育/武术',
      image: '/image/国家级-少儿武术运动水平等级达标赛-最佳运动员-2023年4月.jpg',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  const levelColors = {
    '国家级': 'bg-red-500',
    '省部级': 'bg-blue-500',
    '校级': 'bg-green-500',
  };

  const categoryStats = {
    '作文': 8,
    'AI/机器人': 2,
    '体育/武术': 2,
    '语文': 2,
    '综合': 1,
    '研学': 1,
    '社会实践': 1,
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              奖项成就
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              坚持不懈，追求卓越 · 每一份荣誉都是努力的见证
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Overview */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">7</div>
              <div className="text-gray-300 text-lg">国家级奖项</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300 text-lg">省部级奖项</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">4</div>
              <div className="text-gray-300 text-lg">校级荣誉</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Stats */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              分类统计
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(categoryStats).map(([category, count]) => (
                <div
                  key={category}
                  className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300">{category}</span>
                  <span className="ml-2 px-2 py-1 bg-cyan-500 text-white rounded-full text-sm font-bold">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              荣誉时间线
            </h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Timeline Line */}
                  {index !== achievements.length - 1 && (
                    <div className="absolute left-6 md:left-32 top-24 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                  )}

                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Date */}
                    <div className="flex-shrink-0 md:w-24">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-bold shadow-lg shadow-cyan-500/30">
                        {achievement.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-102 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                          {/* Text Content */}
                          <div className="flex flex-col justify-between">
                            <div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`px-3 py-1 ${levelColors[achievement.level]} text-white rounded-full text-sm font-bold`}>
                                  {achievement.level}
                                </span>
                                <span className={`px-3 py-1 bg-gradient-to-r ${achievement.gradient} text-white rounded-full text-sm font-bold`}>
                                  {achievement.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-3 leading-relaxed">
                                {achievement.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 mt-4">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{achievement.date}</span>
                            </div>
                          </div>

                          {/* Certificate Image */}
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 shadow-2xl group-hover:shadow-cyan-500/20 transition-shadow">
                            <Image
                              src={achievement.image}
                              alt={achievement.title}
                              fill
                              className="object-contain hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Closing Message */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <div className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">坚持的力量</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                从2022年起参加了6次叶圣陶的作文比赛，参加了数次线下的作文活动，大多数都是没有奖项或者二等奖，
                但是经过多次的坚持，终于在2024年和2025年获得了全国一等奖。
                这证明了：<span className="text-purple-400 font-bold">只要努力就有收获，只要努力就能变成更好的自己。</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


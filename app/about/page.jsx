import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export const metadata = {
  title: '关于我 - 王一然',
  description: '了解更多关于王一然的个人信息、自荐理由和成长经历',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              关于我
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              永泰小学（十一集团校）五年级学生 · 全国一等奖获得者 · AI编程爱好者
            </p>
          </div>
        </AnimatedSection>

        {/* 基本信息 */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">基本信息</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">姓名</div>
                    <div className="text-white font-medium">王一然</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">学校</div>
                    <div className="text-white font-medium">永泰小学（十一集团校）</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">班级</div>
                    <div className="text-white font-medium">五年级四班</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">社会工作</div>
                    <div className="text-white font-medium">班级旗手</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">👨‍🏫</span>
                    <span className="text-gray-400">父亲</span>
                  </div>
                  <div className="text-white font-medium mb-1">王启源</div>
                  <div className="text-gray-400 text-sm">北京信息科技大学 计算机学院教师</div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">👩‍💼</span>
                    <span className="text-gray-400">母亲</span>
                  </div>
                  <div className="text-white font-medium mb-1">赵彩萍</div>
                  <div className="text-gray-400 text-sm">国家电网国电南瑞集团 职工</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 自荐信 */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">自荐信</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  大家好，我是王一然，我很希望能收获您手中小小的票。这虽对你是举手之劳，却对我非常重要。如果你能送出您手中小小的票，我极为感谢。如果不行的话也没事，毕竟大家都要选自己喜欢的送手。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  我曾在2025年1月获得了叶圣陶的全国一等奖，虽然我与完美差距巨大，可我也想试试，至少我努力过。就像我从22年起参加了一共6次叶圣陶的作文比赛，一共参加了数次线下的作文活动，大多数都是没有奖项或者二等奖，但是经过多次的坚持，就能获得更好的未来，就像每一位向上的同学，只要努力就有收获，只要努力就能变成更好的自己。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  希望大家能投我一票。谢谢大家。
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 自荐理由 */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              自荐理由
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: '📝',
                  title: '人文素养与科技适应',
                  content: '获得作文比赛一等奖，说明我有较好的人文素养能力，同时，我也知道学习的重要性，我还自主用AI开发了游戏，说明我能适应科技发展。四年积累了63篇诗歌习作，我课堂上积极回答问题，公开课上积极回答问题，不断培养和积累人文素养。',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: '🇨🇳',
                  title: '价值观与品德',
                  content: '我爱祖国、爱人民，爱劳动，喜爱科学，也努力践行社会主义价值观。',
                  gradient: 'from-blue-500 to-purple-500',
                },
                {
                  icon: '🔬',
                  title: '科学精神',
                  content: '我崇尚真理，从不倔强，有着不畏困难的精神，有科学精神。',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: '🤖',
                  title: '实践能力',
                  content: '我崇尚唯物主义，并能用科学去认识事物。从我曾得到机器人大赛的全国铜奖说明我有很强的实践能力和科学精神，且我善于发现问题。',
                  gradient: 'from-pink-500 to-red-500',
                },
                {
                  icon: '💪',
                  title: '身心健康与理想',
                  content: '我当前从事着篮球运动，曾经经过数月艰苦训练，付出多少次汗水和眼泪才获得全国少儿拳击赛的银牌，说明我的身心很健康。我具有很强的安全意识与保护能力，我的理想是通过好好学习，将来更好为大家服务，让大家更健康，更省力，更快乐。',
                  gradient: 'from-red-500 to-orange-500',
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-102"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${reason.gradient} rounded-lg flex items-center justify-center text-2xl shadow-lg`}>
                      {reason.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{reason.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 学业成绩 */}
        <AnimatedSection delay={0.8}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">学业成绩</h2>
              
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20">
                <div className="text-gray-300 mb-2">上学年成绩排名预计：<span className="text-2xl font-bold text-purple-400">第2名</span>（班级预估）</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  { subject: '语文', score: '优（96）' },
                  { subject: '数学', score: '优（98）' },
                  { subject: '英语', score: '优（97）' },
                  { subject: '科学', score: '优' },
                  { subject: '体育', score: '优' },
                  { subject: '道德与法治', score: '优' },
                  { subject: '音乐', score: '优' },
                  { subject: '美术', score: '优' },
                  { subject: '综合实践活动', score: '优' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-900/50 rounded-lg text-center hover:bg-gray-900/70 transition-colors"
                  >
                    <div className="text-gray-400 text-sm mb-1">{item.subject}</div>
                    <div className="text-white font-bold">{item.score}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">国家学生体质健康标准</span>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-green-400">104.3分</span>
                    <span className="px-4 py-1 bg-green-500 text-white rounded-full font-bold">优秀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


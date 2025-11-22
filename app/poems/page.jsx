import AnimatedSection from '@/components/AnimatedSection';
import { promises as fs } from 'fs';
import path from 'path';

export const metadata = {
  title: '诗歌集 - 王一然',
  description: '阅读王一然创作的63篇诗歌作品',
};

async function getPoemsContent() {
  try {
    const filePath = path.join(process.cwd(), 'poem.md');
    const content = await fs.readFile(filePath, 'utf8');
    
    // 按空行分割诗歌
    const poems = content.split('\n\n').filter(p => p.trim());
    
    // 处理每首诗歌，尝试提取标题和内容
    const processedPoems = poems.map((poem, index) => {
      const lines = poem.trim().split('\n').filter(line => line.trim());
      if (lines.length === 0) return null;
      
      // 第一行作为标题，如果有的话
      const title = lines[0] || `诗歌 ${index + 1}`;
      const content = lines.slice(1).join('\n') || lines[0];
      
      return {
        id: index + 1,
        title: title.replace(/^[#*\-\s]+/, '').trim() || `诗歌 ${index + 1}`,
        content: content.trim() || title.trim(),
        date: null, // 可以从内容中提取日期
      };
    }).filter(Boolean);
    
    return processedPoems;
  } catch (error) {
    console.error('Error reading poems:', error);
    return [];
  }
}

export default async function PoemsPage() {
  const poems = await getPoemsContent();
  const totalPoems = poems.length || 63;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
              我的诗歌集
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              四年积累 · {totalPoems}篇原创诗歌 · 记录成长的足迹
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">{totalPoems}</div>
              <div className="text-gray-300 text-lg">诗歌作品</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl border border-pink-500/20 text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">4</div>
              <div className="text-gray-300 text-lg">创作年份</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-300 text-lg">创作灵感</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✍️</div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-400 mb-3">关于我的诗歌创作</h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    从小学一年级开始，我就喜欢用文字记录生活中的点点滴滴。四年来，我创作了{totalPoems}篇诗歌，
                    每一首诗都承载着我对生活的观察、对自然的感悟、对未来的憧憬。
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    诗歌让我学会了用不同的视角看世界，用更细腻的情感表达内心。
                    这些作品见证了我的成长，也记录了我对文学艺术的热爱和追求。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Poems Grid */}
        {poems.length > 0 ? (
          <AnimatedSection delay={0.4}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                诗歌作品
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {poems.map((poem, index) => (
                  <div
                    key={poem.id}
                    className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-102 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                        {poem.id}
                      </div>
                      <div className="text-sm text-gray-400">#{poem.id}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {poem.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-4 leading-relaxed">
                      {poem.content}
                    </p>
                    <div className="mt-4 text-sm text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      阅读全文 →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.4}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-4">诗歌集正在整理中</h3>
                <p className="text-gray-400 mb-6">
                  四年来创作的{totalPoems}篇诗歌作品正在精心整理，敬请期待！
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-2xl mb-2">🌸</div>
                    <div className="text-gray-300">自然主题</div>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="text-gray-300">生活感悟</div>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-gray-300">未来畅想</div>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-2xl mb-2">❤️</div>
                    <div className="text-gray-300">情感抒发</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Creative Process */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto mt-16">
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">我的创作理念</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">👁️</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">观察生活</h4>
                    <p className="text-gray-400 text-sm">用心观察身边的人和事，从日常中发现诗意</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💭</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">真实情感</h4>
                    <p className="text-gray-400 text-sm">每一首诗都源自内心真实的感受和体验</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">坚持创作</h4>
                    <p className="text-gray-400 text-sm">四年如一日，持续记录成长的每一个瞬间</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">不断进步</h4>
                    <p className="text-gray-400 text-sm">在老师和父母的指导下，不断提升文学素养</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection delay={0.7}>
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text leading-relaxed">
              "文字是心灵的画笔，诗歌是成长的印记"
            </blockquote>
            <p className="text-gray-400 mt-4">—— 王一然</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              关于我
            </h3>
            <p className="text-gray-400 leading-relaxed">
              永泰小学（十一集团校）五年级学生，全国叶圣陶杯作文大赛一等奖获得者，AI编程爱好者，拥有63篇诗歌创作。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              快速导航
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">首页</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">关于我</a>
              </li>
              <li>
                <a href="/achievements" className="text-gray-400 hover:text-cyan-400 transition-colors">奖项成就</a>
              </li>
              <li>
                <a href="/works" className="text-gray-400 hover:text-cyan-400 transition-colors">我的作品</a>
              </li>
              <li>
                <a href="/poems" className="text-gray-400 hover:text-cyan-400 transition-colors">诗歌集</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              联系方式
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>学校：永泰小学（十一集团校）</li>
              <li>班级：五年级四班</li>
              <li>职务：班级旗手</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} 王一然. All rights reserved. | 
            <span className="ml-2">Built with Next.js & Deployed on Netlify</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

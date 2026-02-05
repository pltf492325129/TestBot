import Navbar from '@/components/Navbar'
import WebGLBackground from '@/components/WebGLBackground'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <WebGLBackground />
      
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">博客</h1>
          
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <article
                key={i}
                className="glass-card p-6 hover-glow transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-violet-400 font-mono">技术 · 2026.02.03</span>
                    <h2 className="text-xl font-semibold mt-2 mb-3 hover:text-violet-400 transition-colors">
                      文章标题示例 {i}
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                      这是一篇示例文章的摘要描述，展示博客列表页面的布局样式。实际内容可以从 Markdown 文件读取。
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

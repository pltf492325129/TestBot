import Navbar from '@/components/Navbar'
import WebGLBackground from '@/components/WebGLBackground'
import { Github, Mail, Twitter } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <WebGLBackground />
      
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-6 gradient-text">关于我</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                你好，我是 <strong className="text-[var(--text-primary)]">VoidTile</strong>，
                一名热爱图形学和 AI 的全栈开发者。
              </p>

              <p className="text-[var(--text-secondary)] mb-6">
                我专注于前端工程化、WebGL 图形渲染以及 AI 应用开发。
                相信代码可以构建美好的数字世界，也相信技术应该为人服务。
              </p>

              <p className="text-[var(--text-secondary)] mb-8">
                在工作之余，我喜欢探索新的技术栈、阅读技术书籍、
                偶尔写写博客记录学习心得。欢迎与我交流！
              </p>

              <h2 className="text-xl font-semibold mb-4">联系方式</h2>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/pltf492325129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass-card hover-glow transition-all"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-2 px-4 py-2 glass-card hover-glow transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code2, Palette, Cpu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WebGLBackground from '@/components/WebGLBackground'

const skills = [
  { icon: Code2, title: '全栈开发', desc: 'React / Node.js / TypeScript' },
  { icon: Palette, title: '图形学', desc: 'WebGL / Three.js / Shader' },
  { icon: Cpu, title: 'AI 开发', desc: '机器学习 / 计算机视觉' },
  { icon: Sparkles, title: '架构设计', desc: '系统架构 / 性能优化' },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <WebGLBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[var(--accent-secondary)] font-mono mb-4">你好，我是</p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">VoidTile</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              全栈开发者 · 图形学爱好者 · AI 探索者
            </p>
            
            <p className="text-[var(--text-secondary)] mb-12 max-w-xl mx-auto leading-relaxed">
              热爱用代码构建世界，痴迷于图形渲染的魔力，在 AI 的浪潮中寻找新的可能性。
              这里记录我的技术探索、实验项目与生活碎片。
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="px-8 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full font-medium hover-glow"
              >
                阅读博客
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-[var(--border-color)] rounded-full font-medium hover:bg-[var(--bg-card)] transition-colors"
              >
                查看项目
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-[var(--text-secondary)] animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">技术领域</h2>
            <p className="text-[var(--text-secondary)]">探索与创造的边界</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover-glow group"
              >
                <skill.icon className="w-10 h-10 text-violet-400 mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 px-4 bg-[var(--bg-secondary)]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">最新文章</h2>
            <p className="text-[var(--text-secondary)]">思考、实践与记录</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden hover-glow"
              >
                <div className="h-40 bg-gradient-to-br from-violet-500/20 to-cyan-500/20" />
                <div className="p-6">
                  <span className="text-xs text-violet-400 font-mono">2026.02.03</span>
                  <h3 className="text-lg font-semibold mt-2 mb-3">示例文章标题 {i}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">这是一篇示例文章摘要，展示博客文章卡片的基本样式...</p>
                  <Link href="/blog" className="text-violet-400 hover:text-cyan-400 text-sm transition-colors">
                    阅读更多 →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              查看全部文章
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[var(--text-secondary)] text-sm">
            © 2026 VoidTile. Built with Next.js & Three.js. 🌪️
          </p>
        </div>
      </footer>
    </>
  )
}

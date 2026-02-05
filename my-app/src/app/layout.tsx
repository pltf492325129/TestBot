import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'VoidTile | 全栈开发者 · 图形学 · AI',
  description: 'VoidTile 的个人博客 - 专注图形学领域的全栈开发者，分享技术文章、项目展示与生活随笔',
  keywords: ['VoidTile', '全栈开发', '图形学', 'WebGL', 'AI', '前端开发'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

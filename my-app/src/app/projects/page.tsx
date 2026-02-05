import Navbar from '@/components/Navbar'
import WebGLBackground from '@/components/WebGLBackground'

const projects = [
  {
    title: '3D 粒子系统',
    desc: '基于 WebGL 的高性能粒子渲染引擎，支持百万级粒子实时计算',
    tags: ['WebGL', 'TypeScript', 'Rust/WASM'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'AI 图像生成器',
    desc: '本地部署的 Stable Diffusion 前端，支持实时预览和参数调节',
    tags: ['React', 'Python', 'PyTorch'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: '实时协作编辑器',
    desc: '支持多人实时协作的富文本编辑器，CRDT 算法实现冲突解决',
    tags: ['Node.js', 'Socket.io', 'Yjs'],
    color: 'from-emerald-500 to-teal-600',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <WebGLBackground />
      
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 gradient-text">项目展示</h1>
          <p className="text-[var(--text-secondary)] mb-12 max-w-2xl">
            这里展示我的开源项目、实验性 Demo 以及正在进行的创意作品。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="glass-card overflow-hidden hover-glow group"
              >
                <div className={`h-32 bg-gradient-to-br ${project.color} opacity-80`} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-sm">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-[var(--bg-primary)] rounded-full text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

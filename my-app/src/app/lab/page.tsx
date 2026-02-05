import Navbar from '@/components/Navbar'
import WebGLBackground from '@/components/WebGLBackground'

const experiments = [
  {
    title: 'Shader Playground',
    desc: '实时 GLSL Shader 编辑器，支持多种预设效果',
    status: '在线',
  },
  {
    title: 'Ray Marching',
    desc: 'WebGL 实现的实时光线行进渲染器',
    status: '开发中',
  },
  {
    title: 'Neural Network Viz',
    desc: '神经网络结构可视化工具',
    status: '规划中',
  },
]

export default function LabPage() {
  return (
    <>
      <Navbar />
      <WebGLBackground />
      
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 gradient-text">实验室</h1>
          
          <p className="text-[var(--text-secondary)] mb-12 max-w-2xl">
            这里是图形学和前端实验的游乐场，包含 WebGL Demo、Shader 效果和交互原型。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiments.map((exp, i) => (
              <div
                key={i}
                className="glass-card p-6 hover-glow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                    {exp.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exp.status === '在线' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : exp.status === '开发中'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {exp.status}
                  </span>
                </div>
                
                <p className="text-[var(--text-secondary)]">{exp.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 glass-card text-center">
            <p className="text-[var(--text-secondary)]">
              🚧 更多实验内容正在开发中...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

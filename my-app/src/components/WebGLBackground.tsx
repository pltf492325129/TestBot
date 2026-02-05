'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.2 + 0.7, 0.8, 0.5)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.1
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.5
    })
  })

  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[Math.cos(i * 1.5) * 3, 0, Math.sin(i * 1.5) * 3]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingOrbs />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/50 to-[var(--bg-primary)]" />
    </div>
  )
}

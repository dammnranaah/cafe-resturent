"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

function Waves() {
  const mesh = useRef<THREE.Mesh>(null!)
  const t = useRef(0)
  useFrame((state, delta) => {
    t.current += delta * 0.5
    const geo = mesh.current.geometry as THREE.PlaneGeometry
    const pos = geo.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const wave = Math.sin(x * 0.6 + t.current) * 0.08 + Math.cos(y * 0.6 + t.current * 0.8) * 0.08
      pos.setZ(i, wave)
    }
    pos.needsUpdate = true
    mesh.current.rotation.z += delta * 0.02
  })
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, -0.5, 0]}
    >
      <planeGeometry args={[6, 6, 64, 64]} />
      <meshStandardMaterial color={new THREE.Color('#6b4c35')} roughness={0.9} metalness={0.05} />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-0">
      <Canvas camera={{ position: [0, 1.2, 1.8], fov: 60 }} dpr={[1, 1.5]}>
        <color attach="background" args={[new THREE.Color('#faf6f1')]} />
        <hemisphereLight intensity={0.6} groundColor={new THREE.Color('#faf6f1')} />
        <directionalLight position={[3, 3, 2]} intensity={0.6} color={new THREE.Color('#c8a96a')} />
        <Waves />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream"></div>
    </div>
  )
}

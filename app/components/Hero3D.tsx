"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Torus } from "@react-three/drei";
import Image from "next/image";
import * as THREE from "three";

function GlobeScene() {
  const groupRef = useRef<THREE.Group>(null);
  const coinsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
    if (coinsRef.current) {
      coinsRef.current.rotation.y = -(t * 0.15);
      coinsRef.current.position.y = Math.sin(t) * 0.2; 
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} color="#3b82f6" intensity={2.5} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={2.5} />

      {/* Center Globe */}
      <group ref={groupRef}>
        <Sphere args={[2.2, 34, 34]}>
          <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
        </Sphere>
        <Sphere args={[2.1, 34, 34]}>
          <meshStandardMaterial color="#0a0524" />
        </Sphere>
        
        {/* Logo Pengganti Huruf M */}
        <Html center transform distanceFactor={5}>
          <div className="relative w-28 h-28 flex items-center justify-center select-none pointer-events-none drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]">
            <Image 
              src="/mudapedia-logo.png" 
              alt="Logo Tengah Globe"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </Html>
      </group>

      {/* Orbiting Coins & Elements */}
      <group ref={coinsRef}>
        {/* Bitcoin */}
        <Html position={[2.2, 1.0, 0]} center transform distanceFactor={4}>
          <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-purple-500 bg-purple-900/40 backdrop-blur-md shadow-[0_0_15px_#a855f7] select-none pointer-events-none">
            <span className="text-2xl font-bold text-white">₿</span>
          </div>
        </Html>
        {/* Solana */}
        <Html position={[-2.2, -0.6, 1]} center transform distanceFactor={4}>
          <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-500 bg-blue-900/40 backdrop-blur-md shadow-[0_0_15px_#3b82f6] select-none pointer-events-none">
             <span className="text-2xl font-bold text-white">≡</span>
          </div>
        </Html>
        {/* Ethereum */}
        <Html position={[1.2, -1.5, 1.5]} center transform distanceFactor={4}>
          <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-purple-400 bg-purple-900/40 backdrop-blur-md shadow-[0_0_15px_#a855f7] select-none pointer-events-none">
             <span className="text-2xl font-bold text-white">♦</span>
          </div>
        </Html>
      </group>

      {/* Bottom Pedestal Rings */}
      <group position={[0, 0.2, 0]}>
        <Torus args={[2.2, 0.02, 16, 100]} position={[0, -2.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
        </Torus>
        <Torus args={[1.9, 0.05, 16, 100]} position={[0, -2.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1} />
        </Torus>
        <Torus args={[2.6, 0.01, 16, 100]} position={[0, -2.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
        </Torus>
      </group>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Kamera dimundurkan ke z: 11 dan FOV diperbesar ke 50 agar area pandang lebih luas */}
      <Canvas camera={{ position: [0, -0.2, 11], fov: 50 }}>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        <GlobeScene />
      </Canvas>
    </div>
  );
}
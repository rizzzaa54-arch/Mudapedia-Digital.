"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Torus } from "@react-three/drei";
import Image from "next/image";
import * as THREE from "three";

function GlobeScene() {
  const groupRef = useRef<THREE.Group>(null);
  const logoGroupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Bola berputar dengan kecepatan normal (0.1)
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }

    // Logo berputar dengan kecepatan berbeda (0.06) agar tercipta efek dinamis
    if (logoGroupRef.current) {
      logoGroupRef.current.rotation.y = t * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} color="#3b82f6" intensity={2.5} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={2.5} />

      {/* Center Globe (Bola Utama) */}
      <group ref={groupRef}>
        <Sphere args={[2.2, 34, 34]}>
          <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
        </Sphere>
        <Sphere args={[2.1, 34, 34]}>
          <meshStandardMaterial color="#0a0524" />
        </Sphere> 
      </group>

      {/* Group Khusus Logo yang Berputar dengan Kecepatan Berbeda di dalam Bola */}
      <group ref={logoGroupRef}>
        <Html center transform distanceFactor={5} position={[0, 0, 0]}>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 flex items-center justify-center select-none pointer-events-none drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]">
            <Image 
              src="/mudapedia-logo.png" 
              alt="Logo Tengah Globe"
              width={180}
              height={180}
              className="w-full h-full object-contain translate-x-3"
              priority
            />
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
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ touchAction: "none" }}>
      <Canvas 
        camera={{ position: [0, -0.2, 11], fov: 50 }}
        style={{ pointerEvents: "none" }}
      >
        <OrbitControls enabled={false} enableZoom={false} enableRotate={false} />
        <GlobeScene />
      </Canvas>
    </div>
  );
}
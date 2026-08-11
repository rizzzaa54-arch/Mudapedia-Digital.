"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function TokenObject({ color = "#3b82f6" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3; // Rotasi bola luar
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.4;
      cubeRef.current.rotation.y = t * 0.5; // Rotasi kubus bagian dalam secara dinamis
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, 0.2, 0]}>
        
        {/* 1. Bola Transparan / Wireframe Luar */}
        <Sphere args={[0.9, 24, 24]}>
          <meshStandardMaterial 
            color={color} 
            wireframe 
            transparent 
            opacity={0.4} 
          />
        </Sphere>
        
        {/* Bola Solid Transparan di dalam */}
        <Sphere args={[0.88, 24, 24]}>
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.15} 
            roughness={0.1}
          />
        </Sphere>

        {/* 2. Kubus / Kotak Miring di Dalam Bola */}
        <mesh ref={cubeRef} rotation={[0.6, 0.6, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* 3. Cincin Orbit Melingkar di Tengah Bola */}
        <Torus args={[1.1, 0.02, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </Torus>
      </group>

      {/* 4. Podium / Cincin Dasar di Bawah */}
      <group position={[0, -0.9, 0]}>
        <Torus args={[0.9, 0.03, 16, 64]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
        </Torus>
        <Torus args={[1.1, 0.015, 16, 64]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </Torus>
      </group>
    </Float>
  );
}

export default function Package3D({ color = "#3b82f6" }: { color?: string }) {
  return (
    <div className="w-full h-[150px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 3]} color={color} intensity={2.5} />
        <pointLight position={[-3, -3, -3]} color="#8b5cf6" intensity={1.5} />
        <TokenObject color={color} />
      </Canvas>
    </div>
  );
}
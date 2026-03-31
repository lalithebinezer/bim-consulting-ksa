"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { asset } from "@/lib/utils";

/* ─── 3D GBS Logo Disk ────────────────────────────────────── */
function GBSLogoDisk() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, asset("/gbs-logo.png"));

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.4;
    // Dramatic pulse effect
    const time = state.clock.getElapsedTime();
    meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Glow Backlight */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[2.2, 32]} />
        <meshBasicMaterial color="#00ADEF" transparent opacity={0.15} />
      </mesh>
      
      {/* Main Logo Disk */}
      <mesh ref={meshRef}>
        <circleGeometry args={[2, 64]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Decorative Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00ADEF" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/* ─── Floating grid plane ─────────────────────────────────── */
function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeGeometry args={[50, 50, 40, 40]} />
      <meshBasicMaterial
        color="#00ADEF"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

/* ─── Orbiting particles ──────────────────────────────────── */
function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#00ADEF" 
        transparent 
        opacity={0.4} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ─── Main exported Canvas ────────────────────────────────── */
export default function Scene3D() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 10, 5]} intensity={2} color="#00ADEF" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#1282C4" />

      <Stars radius={100} depth={50} count={1200} factor={4} fade speed={1} />
      <GridPlane />
      <Particles />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <GBSLogoDisk />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
    </Canvas>
  );
}

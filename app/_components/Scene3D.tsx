"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ─── Wireframe BIM Building ─────────────────────────────── */
function BIMBuilding() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.18;
  });

  const orange = new THREE.Color("#F97316");
  const orangeDim = new THREE.Color("#7c3a0a");

  // Floor plates
  const floors = [0, 0.7, 1.4, 2.1, 2.8, 3.5];
  // Column positions
  const cols = [
    [-1.2, -1.2], [1.2, -1.2],
    [-1.2, 1.2],  [1.2, 1.2],
    [0, -1.2],    [0, 1.2],
    [-1.2, 0],    [1.2, 0],
  ] as [number, number][];

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Floor plates */}
      {floors.map((y, i) => (
        <lineSegments key={`floor-${i}`} position={[0, y, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(2.6, 0.04, 2.6)]} />
          <lineBasicMaterial color={i === 0 || i === floors.length - 1 ? orange : orangeDim} linewidth={1} />
        </lineSegments>
      ))}

      {/* Vertical columns */}
      {cols.map(([x, z], i) => (
        <lineSegments key={`col-${i}`} position={[x, 1.75, z]}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.04, 3.5, 0.04)]} />
          <lineBasicMaterial color={orangeDim} />
        </lineSegments>
      ))}

      {/* Inner structural cross-bracing on each face */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((rot, i) => (
        <group key={`brace-${i}`} rotation={[0, rot, 0]}>
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([-1.2, 0, 1.2, 1.2, 3.5, 1.2]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={orangeDim} />
          </line>
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([1.2, 0, 1.2, -1.2, 3.5, 1.2]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={orangeDim} />
          </line>
        </group>
      ))}

      {/* Roof detail */}
      <lineSegments position={[0, 3.85, 0]}>
        <edgesGeometry args={[new THREE.CylinderGeometry(0.5, 1.3, 0.7, 4, 1, false)]} />
        <lineBasicMaterial color={orange} />
      </lineSegments>

      {/* Ground plane grid */}
      <gridHelper args={[8, 12, "#2a1200", "#1a0c00"]} position={[0, -0.05, 0]} />
    </group>
  );
}

/* ─── Floating grid plane ─────────────────────────────────── */
function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[40, 40, 30, 30]} />
      <meshBasicMaterial
        color="#F97316"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

/* ─── Orbiting particles ──────────────────────────────────── */
function Particles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line react-hooks/purity
      arr[i * 3]     = (Math.random() - 0.5) * 18;
      // eslint-disable-next-line react-hooks/purity
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      // eslint-disable-next-line react-hooks/purity
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#F97316" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

/* ─── Main exported Canvas ────────────────────────────────── */
export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [6, 4, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 8, 5]} intensity={1.5} color="#F97316" />
      <pointLight position={[-5, -2, -5]} intensity={0.5} color="#0066CC" />

      <Stars radius={60} depth={40} count={800} factor={2} fade speed={0.5} />
      <GridPlane />
      <Particles />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <BIMBuilding />
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

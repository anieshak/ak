import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 700;
    const radius = 14;
    const positionArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);

    const colorNear = new THREE.Color("#7dd3fc");
    const colorFar = new THREE.Color("#60a5fa");

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positionArray[i3] = r * Math.sin(phi) * Math.cos(theta);
      positionArray[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positionArray[i3 + 2] = r * Math.cos(phi);

      const mixed = colorNear.clone().lerp(colorFar, Math.random());
      colorArray[i3] = mixed.r;
      colorArray[i3 + 1] = mixed.g;
      colorArray[i3 + 2] = mixed.b;
    }

    return { positions: positionArray, colors: colorArray };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || reducedMotion) return;

    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.035;
    pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ThreeBackground({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 1.75]}>
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 6, 18]} />
        <ambientLight intensity={0.35} />
        <Particles reducedMotion={reducedMotion} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/35 to-sky-900/20" />
    </div>
  );
}

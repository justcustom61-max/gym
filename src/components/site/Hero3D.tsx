import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Barbell() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.35;
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.12;
  });
  return (
    <group ref={ref}>
      <mesh castShadow>
        <cylinderGeometry args={[0.08, 0.08, 5.2, 32]} />
        <meshStandardMaterial color="#cfcfcf" metalness={1} roughness={0.18} />
      </mesh>
      {[-2.2, 2.2].map((x) => (
        <mesh key={`sl-${x}`} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.7, 24]} />
          <meshStandardMaterial color="#9a9a9a" metalness={1} roughness={0.25} />
        </mesh>
      ))}
      {[
        { x: -1.9, r: 0.85, color: "#e10600" },
        { x: -1.55, r: 0.7, color: "#101010" },
        { x: 1.55, r: 0.7, color: "#101010" },
        { x: 1.9, r: 0.85, color: "#e10600" },
      ].map((p, i) => (
        <mesh key={i} position={[p.x, 0, 0]} castShadow>
          <cylinderGeometry args={[p.r, p.r, 0.18, 48]} />
          <meshStandardMaterial
            color={p.color}
            metalness={0.55}
            roughness={0.35}
            emissive={p.color === "#e10600" ? "#5a0200" : "#000"}
            emissiveIntensity={p.color === "#e10600" ? 0.45 : 0}
          />
        </mesh>
      ))}
      {[-1.4, 1.4].map((x) => (
        <mesh key={`c-${x}`} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 24]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function HexFloor() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.ShaderMaterial;
    if (mat.uniforms?.uTime) mat.uniforms.uTime.value = state.clock.elapsedTime;
  });

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#e10600") },
  };

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.2, 0]}
      receiveShadow
    >
      <planeGeometry args={[60, 60, 1, 1]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          precision mediump float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor;

          float hex(vec2 p){
            p.x *= 0.8660254;
            p.y += mod(floor(p.x), 2.0) * 0.5;
            p = abs(fract(p) - 0.5);
            return abs(max(p.x*1.5 + p.y, p.y*2.0) - 1.0);
          }

          void main(){
            vec2 uv = (vUv - 0.5) * 60.0;
            float d = hex(uv * 0.5);
            float line = smoothstep(0.06, 0.0, d);
            float pulse = 0.5 + 0.5 * sin(uTime * 1.2 - length(uv) * 0.2);
            float fade = smoothstep(1.0, 0.0, length(vUv - 0.5) * 1.6);
            vec3 col = uColor * line * (0.6 + pulse * 0.7);
            float alpha = line * fade * 0.95;
            gl_FragColor = vec4(col, alpha);
          }
        `}
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 8, 22]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} castShadow />
      <pointLight position={[-4, 2, 3]} intensity={1.2} color="#e10600" />
      <pointLight position={[4, 1, -3]} intensity={0.6} color="#ffffff" />
      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.6}>
          <Barbell />
        </Float>
        <HexFloor />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}

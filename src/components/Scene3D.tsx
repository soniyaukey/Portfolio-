import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShape({ position, geometry }: { position: [number, number, number], geometry: 'sphere' | 'box' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const shapeProps = {
    ref: meshRef,
    position,
  };

  return (
    <group>
      {geometry === 'sphere' && (
        <Sphere {...shapeProps} args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={0.5}
            wireframe
          />
        </Sphere>
      )}
      {geometry === 'box' && (
        <Box {...shapeProps} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.4}
            wireframe
          />
        </Box>
      )}
      {geometry === 'torus' && (
        <Torus {...shapeProps} args={[0.5, 0.2, 16, 32]}>
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#06B6D4"
            emissiveIntensity={0.5}
            wireframe
          />
        </Torus>
      )}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
      
      <FloatingShape position={[-3, 2, -5]} geometry="sphere" />
      <FloatingShape position={[3, -1, -4]} geometry="box" />
      <FloatingShape position={[0, 1, -6]} geometry="torus" />
      <FloatingShape position={[-2, -2, -3]} geometry="sphere" />
      <FloatingShape position={[2, 2, -5]} geometry="box" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

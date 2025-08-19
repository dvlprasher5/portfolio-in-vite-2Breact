import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingCube from './FloatingCube';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  className?: string;
}

export default function Scene3D({ children, enableControls = false, className = "h-full w-full" }: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Floating elements */}
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <FloatingCube position={[-3, 2, 0]} color="#06b6d4" speed={0.8} />
          </Float>
          
          <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
            <FloatingCube position={[3, -1, -2]} color="#8b5cf6" speed={1.2} />
          </Float>
          
          <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
            <FloatingCube position={[0, 3, -3]} color="#ec4899" speed={1} size={0.8} />
          </Float>
          
          <Float speed={1.3} rotationIntensity={1.2} floatIntensity={1.8}>
            <FloatingCube position={[-2, -2, 1]} color="#10b981" speed={0.9} size={1.2} />
          </Float>
          
          {children}
          
          {enableControls && <OrbitControls enableZoom={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
}

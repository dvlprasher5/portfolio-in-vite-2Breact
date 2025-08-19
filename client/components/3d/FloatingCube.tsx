import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import * as THREE from "three";

interface FloatingCubeProps {
  position: [number, number, number];
  size?: number;
  color?: string;
  speed?: number;
}

export default function FloatingCube({
  position,
  size = 1,
  color = "#8b5cf6",
  speed = 1,
}: FloatingCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.5;
      meshRef.current.rotation.y += delta * speed * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[size, size, size]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </Box>
  );
}

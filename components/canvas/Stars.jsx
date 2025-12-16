'use client'
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useMemo, useRef } from "react";
import { useDeviceCapabilities } from "@/utils/deviceDetection";

const Stars = (props) => {
  const ref = useRef();
  const capabilities = useDeviceCapabilities();

  const sphere = useMemo(() => {
    // Reduce particle count on mobile/low-end devices
    const particleCount = capabilities?.maxParticles || 5000;
    const positions = new Float32Array(particleCount * 3);
    random.inSphere(positions, { radius: 1.2 });

    // Replace any NaN values with 0
    for (let i = 0; i < positions.length; i++) {
      if (!Number.isFinite(positions[i])) {
        positions[i] = 0;
      }
    }

    return positions;
  }, [capabilities]);

  useFrame((state, delta) => {
    // Slower rotation on mobile to reduce CPU usage
    const rotationSpeed = capabilities?.shouldSimplify3D ? delta / 20 : delta / 10;
    ref.current.rotation.x -= rotationSpeed;
    ref.current.rotation.y -= rotationSpeed;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={capabilities?.shouldSimplify3D ? 0.003 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
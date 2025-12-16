'use client'

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useDeviceCapabilities } from "@/utils/deviceDetection";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  const capabilities = useDeviceCapabilities();

  return (
    <primitive
      object={earth.scene}
      scale={capabilities?.isMobile ? 2 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  const capabilities = useDeviceCapabilities();
  const isMobile = capabilities?.isMobile;

  return (
    <Canvas
      shadows={!isMobile}
      frameloop='demand'
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        powerPreference: isMobile ? "low-power" : "high-performance"
      }}
      camera={{
        fov: isMobile ? 50 : 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-3, 2, 5] : [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={isMobile ? 2 : 4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;

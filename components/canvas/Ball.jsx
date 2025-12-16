'use client'

import {
  Decal, Float, OrbitControls, Preload, useTexture
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useDeviceCapabilities } from "@/utils/deviceDetection";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl.src || props.imgUrl]);
  const capabilities = useDeviceCapabilities();

  return (
    <Float
      speed={capabilities?.shouldSimplify3D ? 1 : 1.75}
      rotationIntensity={capabilities?.shouldSimplify3D ? 0.5 : 1}
      floatIntensity={capabilities?.shouldSimplify3D ? 1 : 2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow={!capabilities?.shouldSimplify3D}
        receiveShadow={!capabilities?.shouldSimplify3D}
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6 ]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  const capabilities = useDeviceCapabilities();

  return (
    <Canvas
      frameloop="demand"
      gl={{
        preserveDrawingBuffer: true,
        antialias: !capabilities?.shouldSimplify3D
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;

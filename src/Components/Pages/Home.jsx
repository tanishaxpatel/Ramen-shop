import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  Box,
  CameraControls,
  Html,
  OrbitControls,
  Sphere,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import { Gradient, LayerMaterial } from "lamina";
import { SpotLightHelper } from "three";
import Shop from "../3d/Shop";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Charter from "../3d/Charter";
import HomePageContainer from "./HomePageContainer";
import { useNavigate } from "react-router-dom";

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function Background() {
  return (
    <>
      <Sphere scale={[100, 100, 100]} rotateY={Math.PI / 2}>
        <LayerMaterial
          lighting="physical"
          transmission={2}
          side={THREE.BackSide}
        >
          <Gradient colorA={"#54295c"} colorB={"#1e0f1d"} axes="y" />
        </LayerMaterial>
      </Sphere>
    </>
  );
}
function CameraZoomEffect() {
  const { camera } = useThree();

  useEffect(() => {
    // Initial zoom-out effect
    let start = null;
    const zoomOutTarget = [9, 4, 12]; // Final zoomed-out camera position
    const startPosition = [10, 30, 100]; // Initial closer camera position

    // The animation function
    const animateZoomOut = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / 9000; // Duration of 5 seconds for smooth zoom-out

      // Apply linear interpolation for smooth zoom-out
      camera.position.lerp(new THREE.Vector3(...zoomOutTarget), progress);

      // Continue animation until zoom-out is complete
      if (progress < 1) {
        requestAnimationFrame(animateZoomOut);
      }
    };

    // Set the initial position to closer and then animate zoom-out
    camera.position.set(...startPosition);
    requestAnimationFrame(animateZoomOut);

    return () => {
      // Cleanup if necessary
    };
  }, [camera]);

  return null;
}
function Lights() {
  const light = useRef();
  useHelper(light, THREE.SpotLightHelper, "red");
  return (
    <spotLight
      ref={light}
      position={[15, 7, 0]}
      intensity={300}
      color={"#FF5733"}
      castShadow
      shadow-mapSize-width={1024} // Set shadow map size for better quality
      shadow-mapSize-height={1024} // Set shadow map size for better quality
      shadow-bias={-0.0001} // Prevent shadow artifacts (optional)
    />
  );
}

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chicken-noodles");
  };
  return (
    <div className="h-screen">
      <Canvas
        camera={{ position: [10, 8, 20] }}
        shadows
        gl={{ antialias: true }}
      >
        <CameraZoomEffect />
        <Suspense fallback={null}>
          <Background />

          <Lights />
          <Shop />
          <Html fullscreen>
            <HomePageContainer handleClick={handleClick} />
          </Html>
          <ambientLight intensity={0.4} />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;

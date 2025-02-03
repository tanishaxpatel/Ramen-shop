import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import Red from "../3d/Red";
import Orange from "../3d/Orange";
import Yellow from "../3d/Yellow";
import Black from "../3d/Black";
import { Html, OrbitControls } from "@react-three/drei";
import { noodleOptions } from "./Constant";

function CameraController() {
  const cameraRef = useRef();

  useFrame(({ mouse, camera }) => {
    if (cameraRef.current) {
      camera.rotation.y = mouse.x * Math.PI * 0.2; // Horizontal movement
      camera.rotation.x = -mouse.y * Math.PI * 0.2; // Vertical movement
    }
  });

  return <perspectiveCamera ref={cameraRef} />;
}

const Hero = ({ noodles }) => {
  const [selectedNoodles, setSelectedNoodles] = useState(noodles);
  console.log(selectedNoodles, "hero");

  const renderNoodlesComponent = () => {
    switch (noodles) {
      case "red":
        return <Red />;
      case "yellow":
        return <Yellow />;
      case "green":
        return <Black />;
      case "Orange":
        return <Orange />;
      default:
        return <Red />;
    }
  };

  return (
    <div
      className="h-screen "
      style={{ backgroundColor: noodleOptions[noodles]?.color }}
    >
      <div
        className="absolute top-1/2 left-full transform -translate-y-1/2 whitespace-nowrap  text-8xl animate-banner"
        style={{ color: noodleOptions[noodles]?.titleColor }}
      >
        <p>
          {noodleOptions[noodles]?.subTitle} {noodleOptions[noodles]?.subTitle}{" "}
          {noodleOptions[noodles]?.subTitle} {noodleOptions[noodles]?.subTitle}{" "}
          {noodleOptions[noodles]?.subTitle}
        </p>
      </div>
      <Canvas camera={{ position: [5, 1, 8] }}>
        {renderNoodlesComponent()}

        <ambientLight intensity={2} />
      </Canvas>
    </div>
  );
};

export default Hero;

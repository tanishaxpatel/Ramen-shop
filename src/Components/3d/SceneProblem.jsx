import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import { Gradient } from "lamina";

export default function Shop1(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");

  // useEffect(() => {
  //   // Attach a point light to the glowing billboard mesh (Vert_Billboard_0)
  //   const glowingMesh = nodes.Vert_Billboard_0;

  //   if (glowingMesh) {
  //     // Create a point light with a color matching the emissive glow
  //     const pointLight = new THREE.SpotLight(0xff9900, 10, 100, 2); // Adjust intensity and range
  //     pointLight.position.set(
  //       glowingMesh.position.x,
  //       glowingMesh.position.y,
  //       glowingMesh.position.z
  //     );
  //     pointLight.castShadow = true; // Optionally, enable shadow casting
  //     glowingMesh.add(pointLight); // Attach the light to the mesh
  //   }
  // }, [nodes]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube002_Boards_0.geometry}
            material={materials.Boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cube002_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder001_Tube_connect_0.geometry}
            material={materials.Tube_connect}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder001_Bronze_0.geometry}
            material={materials.Bronze}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder003_Bronze_0.geometry}
            material={materials.Bronze}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder003_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube025_Boards_0.geometry}
            material={materials.Boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cube025_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube046_Boards_0.geometry}
            material={materials.Boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cube046_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube019_Red_brick_0.geometry}
            material={materials.Red_brick}
          />
          <mesh
            castShadow
            geometry={nodes.Cube019_wooden_supports_0.geometry}
            material={materials.wooden_supports}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube020_Red_brick_0.geometry}
            material={materials.Red_brick}
          />
          <mesh
            castShadow
            geometry={nodes.Cube020_wooden_supports_0.geometry}
            material={materials.wooden_supports}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube021_Red_brick_0.geometry}
            material={materials.Red_brick}
          />
          <mesh
            castShadow
            geometry={nodes.Cube021_wooden_supports_0.geometry}
            material={materials.wooden_supports}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cube022_Red_brick_0.geometry}
            material={materials.Red_brick}
          />
          <mesh
            castShadow
            geometry={nodes.Cube022_wooden_supports_0.geometry}
            material={materials.wooden_supports}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder016_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder016_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder005_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder005_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder006_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder006_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder032_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder032_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder033_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder033_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder034_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder034_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder053_Cyan_boards_0.geometry}
            material={materials.Cyan_boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder053_wooden_furniture_0.geometry}
            material={materials.wooden_furniture}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder017_Steel_0.geometry}
            material={materials.Steel}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder017_Bronze_0.geometry}
            material={materials.Bronze}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder019_Steel_0.geometry}
            material={materials.Steel}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder019_Bronze_0.geometry}
            material={materials.Bronze}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder021_Garbage_bin_0.geometry}
            material={materials.Garbage_bin}
          />
          <mesh
            castShadow
            geometry={nodes.Cube038_Garbage_bin_0.geometry}
            material={materials.Garbage_bin}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder029_Garbage_bin_0.geometry}
            material={materials.Garbage_bin}
          />
          <mesh
            castShadow
            geometry={nodes.Cube053_Garbage_bin_0.geometry}
            material={materials.Garbage_bin}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder030_Garbage_bin_0.geometry}
            material={materials.Garbage_bin}
          />
          <mesh
            castShadow
            geometry={nodes.Cube057_Garbage_bin_0.geometry}
            material={materials.Garbage_bin}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder031_Boards_0.geometry}
            material={materials.Boards}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder031_Stone_var_0.geometry}
            material={materials.Stone_var}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder039_Pepper_0.geometry}
            material={materials.Pepper}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder039_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder041_Salt_0.geometry}
            material={materials.Salt}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder041_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder040_Salt_0.geometry}
            material={materials.Salt}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder040_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder042_Salt_0.geometry}
            material={materials.Salt}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder042_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder043_Salt_0.geometry}
            material={materials.Salt}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder043_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder044_Pepper_0.geometry}
            material={materials.Pepper}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder044_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder045_Pepper_0.geometry}
            material={materials.Pepper}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder045_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Cylinder046_Pepper_0.geometry}
            material={materials.Pepper}
          />
          <mesh
            castShadow
            geometry={nodes.Cylinder046_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Plane025_Boards_0.geometry}
            material={materials.Boards}
          />
          <mesh
            castShadow
            geometry={nodes.Plane025_Pepper_0.geometry}
            material={materials.Pepper}
          />
          <mesh
            castShadow
            geometry={nodes.Plane025_Steel_0.geometry}
            material={materials.Steel}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.Cylinder_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          geometry={nodes.Cube005_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          geometry={nodes.Cube006_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          geometry={nodes.Plane001_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane002_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube003_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane003_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube004_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane004_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane005_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder002_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube009_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane006_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube010_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane007_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube011_Bronze_0.geometry}
          material={materials.Bronze}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube012_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube007_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube014_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube015_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube016_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube017_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube018_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane010_Red_brick_0.geometry}
          material={materials.Red_brick}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube028_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube035_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane011_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane015_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane016_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane017_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane018_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane019_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane020_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube023_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube024_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube080_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube078_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube079_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube081_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube082_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube083_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube084_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube085_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube086_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube087_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube088_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube089_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube090_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube091_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube092_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube093_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube094_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube095_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube096_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube097_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane008_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube013_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane009_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube026_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube027_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube008_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder004_wooden_furniture_0.geometry}
          material={materials.wooden_furniture}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube029_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube030_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane012_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube033_Stone_0.geometry}
          material={materials.Stone}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder007_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube036_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder076_wooden_furniture_0.geometry}
          material={materials.wooden_furniture}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube109_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube110_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube111_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube112_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder009_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder011_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube031_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />

        <mesh
          geometry={nodes.Vert_Billboard_0.geometry}
          material={materials.Billboard}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          {/* Set emissive properties on the Billboard's material */}
          <mesh
            StandardMaterial
            emissive={new THREE.Color(1, 0.6, 0)} // Glow color (example: orange)
            emissiveIntensity={4} // Glow intensity
            attach="material" // Make sure it applies to the existing material
          />
        </mesh>
        <mesh
          geometry={nodes.Plane013_Grass_0.geometry}
          material={materials.Grass}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder008_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder010_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder014_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder018_Bronze_0.geometry}
          material={materials.Bronze}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder020_Bronze_0.geometry}
          material={materials.Bronze}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube037_Garbage_bin_0.geometry}
          material={materials.Garbage_bin}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder022_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder023_Salt_0.geometry}
          material={materials.Salt}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube032_Salt_0.geometry}
          material={materials.Salt}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube039_Billboard_steam_0.geometry}
          material={materials.Billboard_steam}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshStandardMaterial
            emissive={new THREE.Color(0xff00ff)} // Glow color (example: orange)
            emissiveIntensity={2} // Glow intensity
            attach="material" // Make sure it applies to the existing material
          />
        </mesh>
        <mesh
          geometry={nodes.Cylinder024_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube040_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube041_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube042_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube043_Stone_var_0.geometry}
          material={materials.Stone_var}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube044_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube045_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder025_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane021_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder026_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane022_wooden_furniture_0.geometry}
          material={materials.wooden_furniture}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder015_wooden_furniture_0.geometry}
          material={materials.wooden_furniture}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube047_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube048_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube049_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane023_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube050_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane024_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane014_Cyan_boards_0.geometry}
          material={materials.Cyan_boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube051_Tube_connect_0.geometry}
          material={materials.Tube_connect}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube052_Garbage_bin_0.geometry}
          material={materials.Garbage_bin}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube054_Tube_connect_0.geometry}
          material={materials.Tube_connect}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube055_Tube_connect_0.geometry}
          material={materials.Tube_connect}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube056_Garbage_bin_0.geometry}
          material={materials.Garbage_bin}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube058_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder036_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder047_Billboard_steam_0.geometry}
          material={materials.Billboard_steam}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />

        <mesh
          geometry={nodes.Cylinder048_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder051_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube034_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube059_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube060_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube061_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube062_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube063_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube064_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube065_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube066_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube067_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube068_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube069_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube070_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube071_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube072_potato_0.geometry}
          material={materials.potato}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube073_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder012_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder013_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder035_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder038_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder049_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder050_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube074_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder027_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder028_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder054_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube075_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube077_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube076_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder055_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder058_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder059_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane026_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder062_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder063_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder064_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder061_wooden_supports_0.geometry}
          material={materials.wooden_supports}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />

        <mesh
          geometry={nodes.Plane027_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />

        <mesh
          geometry={nodes.Plane028_Billboard_steam_0.geometry}
          material={materials.Billboard_steam}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshStandardMaterial
            emissive={new THREE.Color(1, 0, 0)} // Glow color (example: orange)
            emissiveIntensity={2} // Glow intensity
            attach="material" // Make sure it applies to the existing material
          />
        </mesh>

        <mesh
          geometry={nodes.Cylinder056_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder057_Boards_0.geometry}
          material={materials.Boards}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder066_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder067_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder068_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder069_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder070_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder071_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder072_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder073_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder074_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder075_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder077_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube106_Billboard_0.geometry}
          material={materials.Billboard}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshStandardMaterial
            emissive={new THREE.Color(1, 0, 0)} // Glow color (example: orange)
            emissiveIntensity={2} // Glow intensity
            attach="material" // Make sure it applies to the existing material
          />
        </mesh>
        <mesh
          geometry={nodes.Plane029_Billboard_steam_0.geometry}
          material={materials.Billboard_steam}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshStandardMaterial
            emissive={new THREE.Color(1, 0.6, 0)} // Glow color (example: orange)
            emissiveIntensity={4} // Glow intensity
            attach="material" // Make sure it applies to the existing material
          />
        </mesh>
        <mesh
          geometry={nodes.Plane030_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane031_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane032_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane033_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane034_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube108_Billboard_steam_0.geometry}
          material={materials.Billboard_steam}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane035_Cloth_0.geometry}
          material={materials.Cloth}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder078_Bronze_0.geometry}
          material={materials.Bronze}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder080_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane036_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane037_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />

        <mesh
          geometry={nodes.Plane038_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane039_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane040_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane041_indoors_0.geometry}
          material={materials.indoors}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder079_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder081_Steel_0.geometry}
          material={materials.Steel}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Mball008_Grass_0.geometry}
          material={materials.Grass}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Black(props) {
  const { nodes, materials } = useGLTF("/blacky.glb");
  const ref = useRef();
  const { mouse } = useThree(); // Get mouse position

  useFrame(() => {
    if (ref.current) {
      // Adjust rotation to make the object look at the mouse
      ref.current.rotation.y = mouse.x * Math.PI * 0.3; // Rotate left/right
      ref.current.rotation.x = -mouse.y * Math.PI * 0.1; // Rotate up/down
    }
  });
  return (
    <group
      {...props}
      dispose={null}
      scale={[5, 5, 5]}
      position={[0, -5, 0]}
      ref={ref}
    >
      <group scale={0.01}>
        <group position={[-39.242, 0, -39.934]} scale={2.071}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={materials.lab}
            position={[-0.371, 42.33, 1.375]}
            scale={1.072}
          />
          <group position={[0.097, 89.208, 0.743]} scale={2.812}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_2.geometry}
              material={materials["Material.004"]}
              position={[0, -1.564, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_3.geometry}
              material={materials["Material.002"]}
              position={[0, 0.655, 0]}
              scale={0.797}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse.geometry}
              material={materials["Material.003"]}
              position={[0.377, 2.519, 0.541]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1.074}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_2.geometry}
              material={materials["Material.005"]}
              position={[4.122, 2.576, 0.541]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.333}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/blacky.glb");

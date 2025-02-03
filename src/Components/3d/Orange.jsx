import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Orange(props) {
  const { nodes, materials } = useGLTF("/orange cup.glb");
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
        <group position={[-39.242, 0, -39.9338]} scale={2.0707}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={materials.lab}
            position={[-0.3708, 42.3304, 1.3745]}
            scale={1.0717}
          />
          <group position={[0.0973, 89.2084, 0.7435]} scale={2.8118}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_2.geometry}
              material={materials["Material.004"]}
              position={[0, -1.5638, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_3.geometry}
              material={materials["Material.002"]}
              position={[0, 0.6547, 0]}
              scale={0.7973}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse.geometry}
              material={materials["Material.003"]}
              position={[0.3773, 2.5191, 0.5406]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1.0744}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_2.geometry}
              material={materials["Material.005"]}
              position={[4.1219, 2.5765, 0.5406]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.3329}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/orange cup.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function BaycHead(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1671448097576.gltf"
  );
  const { actions } = useAnimations(animations, group);
  var actionVal = ["Ape Head", "Ape Emotions"];

  useEffect(() => {
    if (actionVal) {
      actions["Ape Head"].play();
      actions["Ape Emotions"].play();
    }
  }, [actionVal]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={0.37}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh
            name="Cap1"
            geometry={nodes.Cap1.geometry}
            material={materials.Cap}
            skeleton={nodes.Cap1.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Left_eye"
            geometry={nodes.Left_eye.geometry}
            material={materials.Ape1}
            skeleton={nodes.Left_eye.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Right_Eye"
            geometry={nodes.Right_Eye.geometry}
            material={materials.Ape1}
            skeleton={nodes.Right_Eye.skeleton}
            castShadow={true}
          />
          <group name="Head">
            <skinnedMesh
              name="Mesh003"
              geometry={nodes.Mesh003.geometry}
              material={materials.Teeth}
              skeleton={nodes.Mesh003.skeleton}
              morphTargetDictionary={nodes.Mesh003.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh003.morphTargetInfluences}
              castShadow={true}
            />
            <skinnedMesh
              name="Mesh003_1"
              geometry={nodes.Mesh003_1.geometry}
              material={materials.Ape1}
              skeleton={nodes.Mesh003_1.skeleton}
              morphTargetDictionary={nodes.Mesh003_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh003_1.morphTargetInfluences}
              castShadow={true}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1671448097576.gltf"
);

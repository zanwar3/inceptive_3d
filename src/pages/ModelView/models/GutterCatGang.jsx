/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 GutterCatGang.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function GutterCatGang(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1672233873292.gltf"
  );

  const { actions } = useAnimations(animations, group);
  const actionVal = useSelector((state) => state.action.name);
  console.log(actions);
  useEffect(() => {
    if (actionVal) {
      var Mixer = actions[actionVal].getMixer();
      Mixer.stopAllAction();
      actions[actionVal].play();
    }
  }, [actionVal]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Gutter_Cat_gang"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="belt001"
            geometry={nodes.belt001.geometry}
            material={materials.Belt5}
            skeleton={nodes.belt001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="cat_body001"
            geometry={nodes.cat_body001.geometry}
            material={materials.Cat_Body5}
            skeleton={nodes.cat_body001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="cat_eyes001"
            geometry={nodes.cat_eyes001.geometry}
            material={materials.Cat_Eyes5}
            skeleton={nodes.cat_eyes001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="cat_neclace001"
            geometry={nodes.cat_neclace001.geometry}
            material={materials.Cat_Neclace182}
            skeleton={nodes.cat_neclace001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="cat_teeth001"
            geometry={nodes.cat_teeth001.geometry}
            material={materials.Cat_Teeth5}
            skeleton={nodes.cat_teeth001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="crown001"
            geometry={nodes.crown001.geometry}
            material={materials.Crown5}
            skeleton={nodes.crown001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="polySurface2001"
            geometry={nodes.polySurface2001.geometry}
            material={materials.Cat_Cloths5}
            skeleton={nodes.polySurface2001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            castShadow={true}
            name="Tail001"
            geometry={nodes.Tail001.geometry}
            material={materials.Cat_Body5}
            skeleton={nodes.Tail001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1672233873292.gltf"
);

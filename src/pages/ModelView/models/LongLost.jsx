/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.7 LongLost.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function LongLost(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1671796361120.gltf"
  );

  const { actions } = useAnimations(animations, group);
  const actionVal = useSelector((state) => state.action.name);
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
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Body">
            <skinnedMesh
             frustumCulled={false}
              name="Body_Mesh001_Clothmesh"
              geometry={nodes.Body_Mesh001_Clothmesh.geometry}
              material={materials.Cloth}
              skeleton={nodes.Body_Mesh001_Clothmesh.skeleton}
              castShadow={true}
            />
            <skinnedMesh
             frustumCulled={false}
              name="Body_Mesh001_Clothmesh_1"
              geometry={nodes.Body_Mesh001_Clothmesh_1.geometry}
              material={materials.LL_Body}
              skeleton={nodes.Body_Mesh001_Clothmesh_1.skeleton}
              castShadow={true}
            />
          </group>
          <skinnedMesh
           frustumCulled={false}
            name="Cap"
            geometry={nodes.Cap.geometry}
            material={materials.Cap}
            skeleton={nodes.Cap.skeleton}
            castShadow={true}
          />
          <skinnedMesh
           frustumCulled={false}
            name="Hands"
            geometry={nodes.Hands.geometry}
            material={materials.LL_Body}
            skeleton={nodes.Hands.skeleton}
            castShadow={true}
          />
          <skinnedMesh
           frustumCulled={false}
            name="LowerHead"
            geometry={nodes.LowerHead.geometry}
            material={materials.LL_Body}
            skeleton={nodes.LowerHead.skeleton}
            castShadow={true}
          />
          <skinnedMesh
           frustumCulled={false}
            name="ShoesMesh"
            geometry={nodes.ShoesMesh.geometry}
            material={materials.Shoes}
            skeleton={nodes.ShoesMesh.skeleton}
            castShadow={true}
          />
          <skinnedMesh
           frustumCulled={false}
            name="UpperHead"
            geometry={nodes.UpperHead.geometry}
            material={materials.LL_Body}
            skeleton={nodes.UpperHead.skeleton}
            castShadow={true}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1671796361120.gltf"
);

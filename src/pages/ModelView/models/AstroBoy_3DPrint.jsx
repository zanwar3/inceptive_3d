/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 AstroBoy3.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function AstroBoy_3DPrint(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1672907285375.gltf"
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
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hips} />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="astroboy_body"
            geometry={nodes.astroboy_body.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.astroboy_body.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="astroboy_eyes"
            geometry={nodes.astroboy_eyes.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.astroboy_eyes.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="astroboy_head"
            geometry={nodes.astroboy_head.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.astroboy_head.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="astroboy_lower_jaw"
            geometry={nodes.astroboy_lower_jaw.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.astroboy_lower_jaw.skeleton}
          />
          <group name="headset_n_sticker">
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Mesh004"
              geometry={nodes.Mesh004.geometry}
              material={materials["3D Print"]}
              skeleton={nodes.Mesh004.skeleton}
            />
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Mesh004_1"
              geometry={nodes.Mesh004_1.geometry}
              material={materials["3D Print"]}
              skeleton={nodes.Mesh004_1.skeleton}
            />
          </group>
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="heart"
            geometry={nodes.heart.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.heart.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="robot_eyes"
            geometry={nodes.robot_eyes.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.robot_eyes.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="robot_head_lower"
            geometry={nodes.robot_head_lower.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.robot_head_lower.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="robot_head_upper"
            geometry={nodes.robot_head_upper.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.robot_head_upper.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="robot_teeth_lower"
            geometry={nodes.robot_teeth_lower.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.robot_teeth_lower.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="robot_teeth_upper"
            geometry={nodes.robot_teeth_upper.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.robot_teeth_upper.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1672907285375.gltf"
);
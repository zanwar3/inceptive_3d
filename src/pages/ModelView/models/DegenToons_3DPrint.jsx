/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 3DPrintDegenToons.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function DegenToons_3DPrint(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1672906076207.gltf"
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
        <group name="Armature" scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Body_Hand"
            geometry={nodes.Cat_Rigg_Final_v01_Body_Hand.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Body_Hand.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Body_Leg"
            geometry={nodes.Cat_Rigg_Final_v01_Body_Leg.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Body_Leg.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Hand"
            geometry={nodes.Cat_Rigg_Final_v01_Hand.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Hand.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Head"
            geometry={nodes.Cat_Rigg_Final_v01_Head.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Head.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_L_Eye"
            geometry={nodes.Cat_Rigg_Final_v01_L_Eye.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_L_Eye.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_L_Eye_B"
            geometry={nodes.Cat_Rigg_Final_v01_L_Eye_B.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_L_Eye_B.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Paint1"
            geometry={nodes.Cat_Rigg_Final_v01_Paint1.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Paint1.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_R_Eye"
            geometry={nodes.Cat_Rigg_Final_v01_R_Eye.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_R_Eye.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_R_Eye_B"
            geometry={nodes.Cat_Rigg_Final_v01_R_Eye_B.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_R_Eye_B.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Shirt"
            geometry={nodes.Cat_Rigg_Final_v01_Shirt.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Shirt.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Shoe"
            geometry={nodes.Cat_Rigg_Final_v01_Shoe.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Shoe.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cat_Rigg_Final_v01_Tail"
            geometry={nodes.Cat_Rigg_Final_v01_Tail.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cat_Rigg_Final_v01_Tail.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1672906076207.gltf"
);

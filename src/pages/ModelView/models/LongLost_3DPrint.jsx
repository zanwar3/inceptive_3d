/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 3DPrintLongLost.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function LongLost_3DPrint(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1672906557371.gltf"
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
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Body.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cap"
            geometry={nodes.Cap.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cap.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Hands"
            geometry={nodes.Hands.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Hands.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="LowerHead"
            geometry={nodes.LowerHead.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.LowerHead.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="ShoesMesh"
            geometry={nodes.ShoesMesh.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.ShoesMesh.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="UpperHead"
            geometry={nodes.UpperHead.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.UpperHead.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1672906557371.gltf"
);

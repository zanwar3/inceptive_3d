/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 BlueKoda3.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function BlueKoda_3DPrint(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1672909410479.gltf"
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
        <group name="Blue_Koda" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Koda_33_Armours"
            geometry={nodes.Koda_33_Armours.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Koda_33_Armours.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Koda_33_Body"
            geometry={nodes.Koda_33_Body.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Koda_33_Body.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Koda_33_Eyes"
            geometry={nodes.Koda_33_Eyes.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Koda_33_Eyes.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Koda_33_Head"
            geometry={nodes.Koda_33_Head.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Koda_33_Head.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1672909410479.gltf"
);

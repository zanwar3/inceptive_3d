/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 3DPrintCryptoPunk.gltf
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function CryptoPunk_3DPrint(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://storage.googleapis.com/inceptivestudio/1672904919689.gltf"
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
        <group name="CP_2172">
          <primitive object={nodes.hips} />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Cube002.skeleton}
          />
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Mouth(copy)bakedbakedbaked001(copy)bakedbakedbaked"
            geometry={
              nodes["Mouth(copy)bakedbakedbaked001(copy)bakedbakedbaked"]
                .geometry
            }
            material={materials["3D Print"]}
            skeleton={
              nodes["Mouth(copy)bakedbakedbaked001(copy)bakedbakedbaked"]
                .skeleton
            }
          />
          <group name="Plane002(copy)bakedbakedbaked">
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane002(copy)bakedbakedbaked_1"
              geometry={nodes["Plane002(copy)bakedbakedbaked_1"].geometry}
              material={materials["3D Print"]}
              skeleton={nodes["Plane002(copy)bakedbakedbaked_1"].skeleton}
            />
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane002(copy)bakedbakedbaked_2"
              geometry={nodes["Plane002(copy)bakedbakedbaked_2"].geometry}
              material={materials["3D Print"]}
              skeleton={nodes["Plane002(copy)bakedbakedbaked_2"].skeleton}
            />
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane002(copy)bakedbakedbaked_3"
              geometry={nodes["Plane002(copy)bakedbakedbaked_3"].geometry}
              material={materials["3D Print"]}
              skeleton={nodes["Plane002(copy)bakedbakedbaked_3"].skeleton}
            />
          </group>
          <group name="Plane003">
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane003bakedbakedbaked"
              geometry={nodes.Plane003bakedbakedbaked.geometry}
              material={materials["3D Print"]}
              skeleton={nodes.Plane003bakedbakedbaked.skeleton}
            />
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane003bakedbakedbaked_1"
              geometry={nodes.Plane003bakedbakedbaked_1.geometry}
              material={materials["3D Print"]}
              skeleton={nodes.Plane003bakedbakedbaked_1.skeleton}
            />
          </group>
          <group name="Plane004">
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane004bakedbakedbaked"
              geometry={nodes.Plane004bakedbakedbaked.geometry}
              material={materials["3D Print"]}
              skeleton={nodes.Plane004bakedbakedbaked.skeleton}
            />
             <skinnedMesh frustumCulled={false} castShadow={true}
              name="Plane004bakedbakedbaked_1"
              geometry={nodes.Plane004bakedbakedbaked_1.geometry}
              material={materials["3D Print"]}
              skeleton={nodes.Plane004bakedbakedbaked_1.skeleton}
            />
          </group>
           <skinnedMesh frustumCulled={false} castShadow={true}
            name="Plane005"
            geometry={nodes.Plane005.geometry}
            material={materials["3D Print"]}
            skeleton={nodes.Plane005.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://storage.googleapis.com/inceptivestudio/1672904919689.gltf"
);

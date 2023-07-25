import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSelector } from "react-redux";

const MODEL_URL =
  "https://storage.googleapis.com/inceptivestudio/1668853671215.gltf";

export default function Koda(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(MODEL_URL);
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
        <group name="T-Pose" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Character1_Hips} />
          <skinnedMesh
            name="koda_body_low"
            frustumCulled={false}
            geometry={nodes.koda_body_low.geometry}
            material={materials.lambert9}
            skeleton={nodes.koda_body_low.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="koda_eyes_low"
            frustumCulled={false}
            geometry={nodes.koda_eyes_low.geometry}
            material={materials.Koda_New_Eye}
            skeleton={nodes.koda_eyes_low.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="koda_head_low"
            frustumCulled={false}
            geometry={nodes.koda_head_low.geometry}
            material={materials.Koda_New_Body}
            skeleton={nodes.koda_head_low.skeleton}
            castShadow={true}
          />
          <skinnedMesh
            name="Koda_New_Body_Attachements"
            frustumCulled={false}
            geometry={nodes.Koda_New_Body_Attachements.geometry}
            material={materials.Koda_New_Body_Attachments}
            skeleton={nodes.Koda_New_Body_Attachements.skeleton}
            castShadow={true}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_URL);

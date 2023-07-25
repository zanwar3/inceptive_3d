import React, {
  Suspense,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
} from "react";
import { useLocation } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { useProgress, Html, OrbitControls } from "@react-three/drei";
import { StudioPlane, Bedroom, Env, GridV2 } from "./environments";
import { showLoader, hideLoader } from "@/slices/loader.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  LongLost,
  BlueKoda,
  DegenToons,
  GutterCatGang,
  Mayc,
  AstroBoy,
  Koda,
  Ape,
  Ape_3DPrint,
  BaycHead,
  CryptoPunk,
  CryptoPunk_3DPrint,
  LongLost_3DPrint,
  DegenToons_3DPrint,
  Koda_3DPrint,
  AstroBoy_3DPrint,
  Mayc_3DPrint,
  BlueKoda_3DPrint,
} from "./models";

import Hoodie from "@/pages/ModelView/Cloth/Hoodie";
import Mug from "@/pages/ModelView/Objects/Mug";
// import Hoodie from "@/pages/ModelView/Cloth/Hoodie";
import { STUDIO_PLANE, BEDROOM, GRIDV2 } from "@/constants/env.constants";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RotatingLines } from "react-loader-spinner";

// *********************************************

const renderPositionSwitch = (param) => {
  switch (param) {
    case STUDIO_PLANE.name:
      return [0.025, -3.05, 2];
    case BEDROOM.name:
      return [0.025, -1.5, 1.8];
    case GRIDV2.name:
      return [0.025, -1.0, 0];
    default:
      return [0.025, -1.0, 0];
  }
};

// *************************************************************

const renderModelSwitch = (name, position, scale) => {
  switch (name) {
    case "bayc":
      return <Ape castShadow position={position} scale={1.5} />;
    case "gutterCatGang":
      return <GutterCatGang castShadow position={position} scale={1.6} />;
    case "longLost":
      return <LongLost castShadow position={position} scale={0.18} />;
    case "koda":
      return <Koda castShadow position={position} scale={3.2} />;
    case "renga":
      return <AstroBoy castShadow position={position} scale={1.5} />;
    case "mayc":
      return <Mayc castShadow position={position} scale={1.5} />;
    case "degen":
      return <DegenToons castShadow position={position} scale={1.6} />;
    case "blueKoda":
      return <BlueKoda castShadow position={position} scale={3.2} />;
    case "CryptoPunk":
      return <CryptoPunk castShadow position={position} scale={2.4} />;
    case "hoodie":
      return <Hoodie castShadow position={position} scale={0.5} />;
    case "mug":
      return <Mug castShadow position={[0.025, 0.1, 0]} scale={0.5} />;
    case "Ape_3DPrint":
      return <Ape_3DPrint castShadow position={position} scale={1.45} />;
    case "CryptoPunk_3DPrint":
      return <CryptoPunk_3DPrint castShadow position={position} scale={2.3} />;
    case "LongLost_3DPrint":
      return <LongLost_3DPrint castShadow position={position} scale={0.175} />;
    case "DegenToons_3DPrint":
      return <DegenToons_3DPrint castShadow position={position} scale={1.6} />;
    case "Mayc_3DPrint":
      return <Mayc_3DPrint castShadow position={position} scale={1.4} />;
    case "AstroBoy_3DPrint":
      return <AstroBoy_3DPrint castShadow position={position} scale={1.5} />;
    case "Koda_3DPrint":
      return <Koda_3DPrint castShadow position={position} scale={2.8} />;
    case "BlueKoda_3DPrint":
      return <BlueKoda_3DPrint castShadow position={position} scale={2.8} />;
    case "baychead":
      return <BaycHead position={[0.025, -2.55, 2]} scale={5} />;
    default:
      return <Ape castShadow position={position} scale={1.2} />;
  }
};

// *************************************************************

const renderEnvSwitch = (param) => {
  switch (param) {
    case STUDIO_PLANE.name:
      return <StudioPlane position={[0, -3.05, 0]} />;
    case BEDROOM.name:
      return <Bedroom position={[0, -1.5, 2.5]} />;
    case GRIDV2.name:
      return <GridV2 position={[0, -1.05, 8]} />;
    default:
      return <StudioPlane position={[0, -2.05, 0]} />;
  }
};

// *************************************************************

const ModelView = React.forwardRef((props, ref) => {
  const environment = useSelector((state) => state.env);
  const [modelPosition, setModelPosition] = useState([0.025, -1.0, 0]);
  const isMobile = useMediaQuery("(max-width:599px)");
  const { state } = useLocation();
  const dispatch = useDispatch();
  const model = props.model;

  const innerFunction = useCallback(() => {
    setModelPosition(renderPositionSwitch(environment));
  }, [environment]);
  useEffect(() => {
    renderModelSwitch(model?.character, modelPosition);
  }, [model]);
  useEffect(() => {
    dispatch(hideLoader());
    innerFunction();
  }, [innerFunction]);

  function Scene() {
    const state = useThree((state) => state);
    useImperativeHandle(ref, () => ({
      cameraPosition01() {
        state.camera.position.set(
          -6.761938593483864,
          0.024528763840577117,
          9.524485708852215
        );
      },
      // ******************************
      cameraPosition02() {
        state.camera.position.set(
          0.043595555707059905,
          0.2986761125653054,
          12.128744695162785
        );
      },
      // ******************************
      cameraPosition03() {
        state.camera.position.set(
          6.367614102274277,
          -0.12158785845252562,
          9.402547462921753
        );
      },
    }));
    return (
      <Suspense castShadow fallback={<Loader />}>
        {model?.character != "mug" &&
          model?.character != "hoodie" &&
          model?.character != "baychead" &&
          renderEnvSwitch(environment)}
        {renderModelSwitch(model?.character, modelPosition)}
      </Suspense>
    );
  }

  // *************************************************************

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html
        center
        className="loaderClass"
        style={{
          color: "white",
          fontSize: "25px",
          width: "200px",
          textAlign: "center",
        }}
      >
        {/* <div id="loader">{progress.toFixed(0)} % loaded</div> */}
        <RotatingLines
          strokeColor="#BF3243"
          strokeWidth="5"
          animationDuration="0.75"
          width="100"
          visible={true}
        />
      </Html>
    );
  }

  // *************************************************************

  return (
    <Canvas
      gl={{
        toneMappingExposure: 1,
        preserveDrawingBuffer: true,
        antialias: true,
      }}
      ref={ref}
      id={props.id ?? "my_canvas"}
      dpr={props.pixelRatio}
      camera={{
        position: [
          0.043595555707059905, 0.2986761125653054, 12.128744695162785,
        ],
        fov: 75,
        zoom: 4,
        near: 0.01,
        far: 2000,
      }}
      shadows
      style={{
        width: props.width ?? "100vw",
        height: isMobile ? "600px" : props.height ?? "100vh",
        color: "#000",
        background: "radial-gradient(#ff6b0033, #1e1e1e)",
      }}
    >
      <OrbitControls
        enableDamping={true}
        minDistance={2.3}
        maxDistance={50}
        target={[modelPosition[0], modelPosition[1] + 1.5, modelPosition[2]]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        intensity={model?.character == "bayc" ? 2 : 0.5}
        position={[1, 5, 10]}
      />
      <directionalLight
        intensity={model?.character == "bayc" ? 2 : 0.5}
        position={[-1, -1, -1]}
      />
      {model?.character == "koda" ||
      model?.character == "blueKoda" ||
      model?.character == "gutterCatGang" ||
      model?.character == "bayc" ? (
        <>
          <pointLight position={[100, 0, 0]} />
          <pointLight position={[-100, -100, -0]} />
          <pointLight position={[0.1, 0.1, 0.1]} />
        </>
      ) : (
        ""
      )}
      <Scene />
    </Canvas>
  );
});

export default ModelView;

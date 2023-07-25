import React, { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";
function Loader() {
  const loading = useSelector((state) => state.loader.show);

  return (
    loading && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          background: "rgba(34, 32, 29, 0.36)",
          backdropFilter: "blur(52.5px)",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "11111",
          width: "100%",
        }}
      >
        <RotatingLines
          strokeColor="#BF3243"
          strokeWidth="5"
          animationDuration="0.75"
          width="100"
          visible={true}
        />
      </div>
    )
  );
}

export default Loader;

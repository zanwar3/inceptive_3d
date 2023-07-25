import React, { useState, useEffect } from "react";

import useStyles from "./style";

export default function NotFound() {
  const classes = useStyles();

  return (
    <>
      <div className="mainBanner" style={{ position: "relative" }}>
        Not Found
      </div>
    </>
  );
}

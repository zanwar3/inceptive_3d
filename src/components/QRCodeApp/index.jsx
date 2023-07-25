import React, { useState, forwardRef, useImperativeHandle } from "react";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { useSnackbar } from "notistack";
import { IconButton, Link } from "@mui/material";

const QRCodeApp = (prop) => {
  const [qrValue, setQrValue] = useState(prop.link);
  const [show, setShow] = useState(false);
  //  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const data = "Please join the link";

  const handleCopy = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 200);
    // alert("Successfully Copied");
    //  enqueueSnackbar("Successfully Copied", { variant: "success" });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          color: "white",
          fontSize: "26px",
          padding: "20px",
          fontFamily: "Neue Plak",
        }}
      >
        Scan QR for Filter
      </p>

      <QRCode
        value={qrValue}
        size={290}
        level={"H"}
        includeMargin={true}
        style={{
          borderRadius: "22px",
          margin: "16px 0px",
        }}
      />

      <div
        style={
          show
            ? {
                background: "#BF3243 ",
                backdropFilter: "blur(13.5px)",
                borderRadius: "22px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "4% 4%",
                margin: "2%",
              }
            : {
                background: "rgba(0, 0, 0, 0.67)",
                backdropFilter: "blur(13.5px)",
                borderRadius: "22px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "4% 4%",
                margin: "2%",
              }
        }
      >
        <Link
          href={qrValue}
          style={{
            color: "white",
            fontSize: "16px",
            overflow: "hidden",
            fontFamily: "Neue Plak Bold !important",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {qrValue}
        </Link>
        <CopyToClipboard text={qrValue} onCopy={() => handleCopy()}>
          <img
            src="https://storage.googleapis.com/ishro/uploads/639c5153846b2.svg"
            width={"32px"}
          />
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default QRCodeApp;

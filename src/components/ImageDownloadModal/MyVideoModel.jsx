import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {
  Box,
  CardContent,
  Modal,
  CardActions,
  IconButton,
} from "@mui/material";
import { ModelView } from "@/pages";
import Share from "@/assets/icons/Share";
import useStyles from "./style";

const style = {
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  padding: 2,
  maxWidth: "600px",
  maxHeight: "600px",
};

export default function MyVideoModel({ isOpen, close, model }) {
  const [isDownload, setIsDownload] = React.useState(false);
  const classes = useStyles();
  const [frameSizeInSec, setFrameSizeInSec] = useState(10000);
  let fileName = model?.character + "" + model?.title;
  async function startRecording() {
    const chunks = [];
    let canvasElt = document.getElementById("videoCanvas");
    let canvasElt1 = canvasElt?.firstChild?.firstChild;
    // tricks end
    const stream = canvasElt1.captureStream();
    const rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => chunks.push(e.data);
    rec.onstop = async (e) => {
      const blob = new Blob(chunks, { type: "video/mp4" });
      exportVid(blob);
    };
    rec.start(frameSizeInSec);
    setIsDownload(true);
    setTimeout(() => {
      rec.stop();
      setIsDownload(false);
    }, frameSizeInSec);
  }

  function exportVid(blob) {
    setIsDownload(false);
    let vid = document.createElement("video");
    vid.src = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = fileName + ".mp4";
    a.href = vid.src;
    // a.textContent = fileName;
    a.click();
  }

  return (
    <div>
      <Modal open={isOpen} onClose={close}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Card sx={{ maxWidth: 1000 }}>
            <CardContent
              sx={{
                ...style,
              }}
            >
              <Box
                sx={{ position: "absolute", "z-index": 10 }}
                className={isDownload ? "blink_me" : "hide_me"}
              >
                <span
                  style={{
                    background: "red",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-8",
                    left: "4",
                    zIndex: "10",
                    margin: "20px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    color: "red",
                    marginLeft: "48px",
                    marginTop: "24px",
                  }}
                >
                  Recording
                </span>
              </Box>
              <ModelView
                width={500}
                height={500}
                id="videoCanvas"
                model={model}
                pixelRatio={isOpen ? 4 : 1}
              />
            </CardContent>
            <CardActions>
              <IconButton
                size="small"
                variant="outlined"
                className={classes.btn1}
              >
                Share
                <Share />
              </IconButton>

              <Box sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }}>
                <Button
                  variant="outlined"
                  className={classes.btn1}
                  onClick={close}
                  size="small"
                >
                  Back
                </Button>
                <Button
                  className={classes.btn}
                  size="small"
                  variant="outlined"
                  onClick={startRecording}
                  disabled={isDownload}
                >
                  Download
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

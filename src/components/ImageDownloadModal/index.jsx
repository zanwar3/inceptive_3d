import * as React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  Box,
  CardContent,
  Modal,
  CardActions,
  IconButton,
} from "@mui/material";
import useStyles from "./style";
import { RotatingLines } from "react-loader-spinner";
import slugify from "slugify";
import Share from "@/assets/icons/Share";

// *********************************************

const style = {
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 2,
};

// *********************************************

export default function ImageDownloadModal({
  isOpen,
  model,
  close,
  imageUrl = undefined,
}) {
  const classes = useStyles();
  // const { state } = useLocation();
  // const { model } = state;

  // **************************************************************************

  const downloadImage = () => {
    download(imageUrl, { name: model?.name });
  };

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    if (image) {
      const a = document.createElement("a");
      a.href = image;
      a.download = `${slugify(name)}.${extension}`;
      a.click();
    } else {
      console.error("There is no image");
    }
  };

  // **************************************************************************

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
            <CardContent sx={{ ...style }}>
              {imageUrl ? (
                <CardMedia
                  component="img"
                  height="500"
                  image={imageUrl}
                  alt="green iguana"
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "radial-gradient(#ff6b0033, #1e1e1e)",
                    width: 500,
                    height: 500,
                  }}
                >
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="150"
                    visible={true}
                  />
                </div>
              )}
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
                  onClick={downloadImage}
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

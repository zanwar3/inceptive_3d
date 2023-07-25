import React from "react";
import useStyles from "../style";
import { Grid, Button, IconButton } from "@mui/material";
import Email from "@/assets/icons/socialMedia/email.svg";
import Twitter from "@/assets/icons/socialMedia/twitter.svg";
import WhatApp from "@/assets/icons/socialMedia/whatApp.svg";

import * as htmlToImage from "html-to-image";

const Background = (props) => {
  const classes = useStyles();
  
  const getScreenshot = async (id) => {
    var canvas = document.getElementById(id);

    setTimeout(() => {
      takeScreenShot(canvas).then((dataURI) => {
        
        download(dataURI);
      });
    }, 100);
  };

  const download = (image, { extension = "jpg" } = {}) => {
    if (image) {
      const a = document.createElement("a");
      a.href = image;
      a.download = `${"InseptiveStudio"}.${extension}`;
      a.click();
    } else {
      console.error("There is no image");
    }
  };
  const takeScreenShot = async (node) => {
    var options = {
      pixelRatio: 4,
      quality: 1.0,
      style: {
        background: props.color ? props.color : "#00000000",
      },
    };
    var dataURI = await htmlToImage.toJpeg(node, options);
    return dataURI;
  };

  return (
    <Grid
      container
      className={props.outputImg != "" ? classes.container1 : classes.container}
    >
      {props.outputImg != "" ? (
        <>
          <Grid item xs={6} sm={4} md={4} lg={6}>
            <div style={{ paddingRight: "8px" }}>
              <img src={props.image} className={classes.imageDiv} />
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={6}>
            <div style={{ paddingLeft: "8px" }}>
              {" "}
              <img
                src={props.outputImg}
                className={classes.imageDiv}
                style={{ backgroundColor: `${props.color}` }}
                id="outputImg"
              />
              <Button
                variant="contained"
                fullWidth
                className={classes.btn}
                onClick={() => getScreenshot("outputImg")}
              >
                Download
              </Button>
            </div>
          </Grid>
        </>
      ) : (
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={props.image} className={classes.imageDiv} id="defaultImg" />
          <Button
            variant="contained"
            fullWidth
            className={classes.btn}
            onClick={() => getScreenshot("defaultImg")}
          >
            Download
          </Button>
          <div style={{ textAlign: "center" }}>
            <IconButton>
              <img src={WhatApp} />
            </IconButton>
            <IconButton>
              <img src={Email} />
            </IconButton>
            <IconButton>
              <img src={Twitter} />
            </IconButton>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default Background;

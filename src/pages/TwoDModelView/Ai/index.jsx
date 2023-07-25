import React, { useState, useEffect } from "react";
import useStyles from "../style";
import { Button, IconButton, Grid } from "@mui/material";
import Email from "@/assets/icons/socialMedia/email.svg";
import Twitter from "@/assets/icons/socialMedia/twitter.svg";
import WhatApp from "@/assets/icons/socialMedia/whatApp.svg";
const Ai = (props) => {
  const classes = useStyles();

  function generateFileName() {
    return `img${Math.floor(Math.random() * 90000) + 10000}`;
  }

  function downloadImage(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "blob";
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = generateFileName();
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  }

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
              <img src={props.outputImg} className={classes.imageDiv} />
              <Button
                variant="contained"
                fullWidth
                className={classes.btn}
                onClick={() => downloadImage(props.outputImg)}
              >
                Download
              </Button>
            </div>
          </Grid>
        </>
      ) : (
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={props.image} className={classes.imageDiv} />
          <Button
            variant="contained"
            fullWidth
            className={classes.btn}
            onClick={() => downloadImage(props.image)}
          >
            Downloads
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

export default Ai;

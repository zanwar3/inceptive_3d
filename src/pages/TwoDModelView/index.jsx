import React, { useEffect } from "react";
import useStyles from "./style";
import { Button, IconButton, Grid, useMediaQuery } from "@mui/material";
import Email from "@/assets/icons/socialMedia/email.svg";
import Twitter from "@/assets/icons/socialMedia/twitter.svg";
import WhatApp from "@/assets/icons/socialMedia/whatApp.svg";
import { ModelView } from "..";
import Background from "./Background";
import Ai from "./Ai";
import * as htmlToImage from "html-to-image";
const TwoDModelView = (props) => {
  const classes = useStyles();
  const [showImage, setShowImage] = React.useState(props.phygital.back);
  const [model, setModel] = React.useState(props.model);
  const imageEditor = React.createRef();
  const [selectedTab, setSelectedTab] = React.useState(props.selectedTab);
  const [color, setColor] = React.useState(props.color);

  useEffect(() => {
    setShowImage(props.phygital.back);
    setModel(props.model);
    setSelectedTab(props.selectedTab);
    setColor(props.color);
  }, [props]);

  console.log("props.selectedTab: ", props);

  const getScreenshot = async (id) => {
    var canvas = document.getElementById(id);

    setTimeout(() => {
      takeScreenShot(canvas).then((dataURI) => {
        download(dataURI, model.name);
      });
    }, 100);
  };

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
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
        background: "#00000000",
      },
    };
    var dataURI = await htmlToImage.toJpeg(node, options);
    return dataURI;
  };

  return (
    <>
      {model != "" ? (
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ModelView
              width="inherit"
              height="500px"
              model={{
                character: "baychead",
              }}
            />
          </Grid>
        </Grid>
      ) : props.phygital != "" ? (
        <>
          <Grid container className={classes.container}>
            <img src={showImage} className={classes.imageDiv} id="phygital" />
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.imgList}
            >
              <div onClick={() => setShowImage(props.phygital?.front)}>
                <img
                  src={props.phygital?.iconfront}
                  className={
                    props.phygital?.front == showImage
                      ? classes.select
                      : classes.subImg
                  }
                />
              </div>
              {props.phygital?.iconback != "" && (
                <div onClick={() => setShowImage(props.phygital?.back)}>
                  <img
                    src={props.phygital?.iconback}
                    className={
                      props.phygital?.back == showImage
                        ? classes.select
                        : classes.subImg
                    }
                  />
                </div>
              )}
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            className={classes.btn}
            onClick={() => getScreenshot("phygital")}
          >
            Download
          </Button>
        </>
      ) : selectedTab == "Backgrounds" ? (
        <Background
          image={`${props.image}`}
          color={color}
          model={model}
          outputImg={`${props.outputImg}`}
        />
      ) : selectedTab == "AI" ? (
        <Ai image={props.image} outputImg={props.outputImg} />
      ) : selectedTab == "High Resolution" ? (
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <img
              src={props.image}
              className={classes.imageDiv}
              id="High_Resolution"
            />
            <Button
              variant="contained"
              fullWidth
              className={classes.btn}
              onClick={() => getScreenshot("High_Resolution")}
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
        </Grid>
      ) : (
        <Grid
          container
          className={
            props.outputImg != "" ? classes.container1 : classes.container
          }
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
              <img
                src={props.image}
                className={classes.imageDiv}
                id="defaultImg"
              />
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
      )}
    </>
  );
};

export default TwoDModelView;

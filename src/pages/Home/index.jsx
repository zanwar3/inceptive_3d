import React, { useState, useEffect } from "react";
import { Projects } from "@/components";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery, Paper } from "@mui/material";
import Slider from "react-slick";
import collections from "../../data/collections.json";
import { showLoader, hideLoader } from "@/slices/loader.slice";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const classes = useStyles();
  const [load, setLoaded] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var settings = {
    adaptiveHeight: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const goToNftDetails = (slug) => {
    navigate(`/${slug}`);
  };
  return (
    <>
      <div className="mainBanner" style={{ position: "relative" }}>
        <Slider {...settings}>
          {collections.map((item, index) => {
            return <Banners key={index + "_item"} item={item} />;
          })}
        </Slider>
        <div className={classes.topRight}>
          {collections.map((item, index) => {
            return item.display.includes("HIGHLIGHTS") ? (
              <Paper
                sx={{ cursor: "pointer" }}
                key={index}
                className={classes.closePaper}
                onClick={() => goToNftDetails(item.slug)}
              >
                <div id="bannerSubimg" className={classes.subImg}>
                  <img
                    src={item.image}
                    className={classes.imgDiv}
                    style={{width:250}}
                    // onLoad={() => setLoaded(false)}
                  />
                  <div className={classes.titleBox}>
                    <Typography className={classes.title}>
                      {item.banner_name}
                    </Typography>
                  </div>
                </div>
              </Paper>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <Projects nftProjects={collections} />
    </>
  );
}

export const Banners = ({ item }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const [load, setLoaded] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showLoader());
    !load ? dispatch(hideLoader()) : "";
  }, [load]);

  const goToNftDetails = (slug) => {
    navigate(`/${slug}`);
  };
  return (
    <Box style={{ position: "relative" }}>
      <img
        src={isMobile ? item?.mobile_banner : item?.desktop_banner}
        onLoad={() => setLoaded(false)}
      />
      <div className={classes.bottomLeft}>
        <Typography className={classes.banner_title}>
          {item?.banner_name}
        </Typography>
        <Button
          variant="contained"
          className={classes.explore_btn}
          onClick={() => goToNftDetails(item.slug)}
        >
          Explore
        </Button>
      </div>
    </Box>
  );
};

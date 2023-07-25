import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@/assets/image/slider";

const Projects = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  var sliderRef = useRef();

  var settings = {
    className: "center",
    centerMode: isMobile ? true : false,
    infinite: props.nftProjects?.length > 5 ? true : false,
    speed: 100,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div>
      <Box display="flex" className={classes.title}>
        <Box flexGrow={1}>
          <p> {"Projects"}</p>
        </Box>
      </Box>
      <Slider {...settings} className="liveData" ref={(el) => (sliderRef = el)}>
        {props.nftProjects.map((item, index) => {
          return item.display.includes("PROJECTS") ? (
            <Paper
              sx={{ cursor: "pointer" }}
              key={index}
              className={classes.closePaper}
              onClick={() => navigate(`/${item.slug}`)}
            >
              <div className={classes.container}>
                <img src={item.image} className={classes.imgDiv} />
                <div className={classes.titleBox}>
                  <Typography className={classes.name}>
                    {item.banner_name}
                  </Typography>
                </div>
              </div>
            </Paper>
          ) : (
            ""
          );
        })}
      </Slider>
      {!isMobile ? (
        <div
          style={{
            textAlign: "right",
            float: "right",
            padding: "0% 5.2% 0% 5.2%",
          }}
        >
          <IconButton
            style={{ color: "white" }}
            component="span"
            onClick={previous}
          >
            <ArrowLeft />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            onClick={next}
            component="span"
          >
            <ArrowRight />
          </IconButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Tabs,
  Tab,
  styled,
  Box,
  Grid,
  Dialog,
  DialogContent,
} from "@mui/material";
import useStyles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { setAction } from "@/slices/action.slice";
import { setContainer } from "@/slices/container.slice";
import { setEnvironment } from "@/slices/env.slice";
import QRCodeApp from "@/components/QRCodeApp";
import { Configuration, OpenAIApi } from "openai";
import { showLoader, hideLoader } from "@/slices/loader.slice";
import Wheel from "@uiw/react-color-wheel";
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
    padding: "1% 5%",
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
      border: "none !important",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);
// *********************************************************
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    background: "#BF3243",
  },
});
// *****************************************************************
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography variant="h5">{children}</Typography>
        </Box>
      )}
    </div>
  );
};
// ************************************************
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
// ***************************************************************
export default function Position({
  downloadScreenshot,
  color,
  model,
  menuType,
  setColor,
  imageUrl,
  phygitalName,
  defaultImage,
  modelName,
  setSelectedTab,
}) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const dispatch = useDispatch();
  const actionVal = useSelector((state) => state.action.name);
  const action = useSelector((state) => state.action);
  // const { state } = useLocation();
  const ref = useRef(null);
  const [link, setLink] = useState("");
  const [hex, setHex] = useState("#fff");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  // const { model } = state;
  const [open, setOpen] = useState(false);
  const [tabData, setTabData] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    switch (menuType) {
      case "Animations":
        setTabData(model?.menues?.animations);
        break;
      case "Still Pose":
        setTabData(model?.menues?.still_pose);
        break;
      case "AR":
        setTabData(model?.menues?.ar);
        break;
      case "3D Print":
        model["3d_print_character"] !== "" &&
          modelName({
            character: model["3d_print_character"],
          });
        setTabData(model?.menues["3d_print"]);
        break;
      case "Face Filter":
        if (model?.character == "bayc") {
          dispatch(
            setContainer({
              value: "2D",
            })
          );
          modelName({
            character: "baychead",
          });
        }
        setTabData(model?.menues?.face_filter);
        break;
      case "Meme":
        dispatch(
          setContainer({
            value: "2D",
          })
        );
        setTabData(model?.menues?.meme);
        break;
      case "2D":
        dispatch(
          setContainer({
            value: "2D",
          })
        );
        setTabData(model?.menues["2d"]);
        setSelectedTab("High Resolution");

        break;
      case "Phygital":
        if (model?.character == "bayc" || model?.character == "CryptoPunk") {
          dispatch(
            setContainer({
              value: "2D",
            })
          );
          phygitalName(model?.menues?.Phygital[0]?.collection[0]?.link);
        }
        setTabData(model?.menues?.Phygital);
        break;
      default:
        setTabData([]);
    }
  }, [menuType]);

  const doAcion = (item, val) => {
    switch (val.label) {
      case "Animations":
        dispatch(
          setAction({
            name: item.actionName,
            type: val.label,
          })
        );
        break;
      case "Still Pose":
        dispatch(
          setAction({
            name: item.actionName,
            type: val.label,
          })
        );
        break;
      case "Pose":
        dispatch(
          setAction({
            name: item.actionName,
            type: val.label,
          })
        );
        break;
      case "Platform":
        setLink(item.link);
        setOpen(true);
        break;
      case "Memes":
        imageUrl(item.link);
        break;
      case "Stickers":
        if (item.link != "") {
          dispatch(
            setContainer({
              value: "2D",
            })
          );
        } else {
          dispatch(
            setContainer({
              value: "canvas",
            })
          );
        }
        defaultImage(item.link);
        phygitalName([]);
        break;
      case "Clothing":
        if (item.link != "") {
          dispatch(
            setContainer({
              value: "2D",
            })
          );
        } else {
          dispatch(
            setContainer({
              value: "canvas",
            })
          );
        }
        phygitalName(item.link);
        break;
      case "Mugs":
        if (item.link != "") {
          dispatch(
            setContainer({
              value: "2D",
            })
          );
        } else {
          dispatch(
            setContainer({
              value: "canvas",
            })
          );
        }
        phygitalName(item.link);
        break;
      case "Backgrounds":
        setColor(item?.color);
        imageUrl(val.noBackground);
        break;
      case "AI":
        getAIImage(val);
        break;
      case "Phygital":
        break;
      case "Environment":
        dispatch(setEnvironment(item.name));
        break;
      default:
        setTabData([]);
        break;
    }
  };

  const getAIImage = async (val) => {
    {
      dispatch(showLoader());
      let body = {
        type: "image-variation",
        name: val.mainImage,
      };
      const response = await axios({
        method: "POST",
        url: "https://api.inceptivestudio.com/v1/ai",
        data: body,
      });
      imageUrl(response.data.data[0].url);
      dispatch(hideLoader());
    }
  };

  const handleTabClick = (label) => {
    setSelectedTab(label);
    imageUrl("");

    // if (label == "Backgrounds") {
    //
    //   setHeight(ref.current.offsetHeight);
    //   setWidth(ref.current.offsetWidth);
    // }
  };

  const imageLoaded = () => {
    setTimeout(() => {
      setHeight(ref.current.offsetHeight - 12);
      setWidth(ref.current.offsetWidth - 12);
    }, 2000);
  };
  const changeBG = (color, img, setcolor) => {
    setcolor && setHex(color);

    setColor(color);
    imageUrl(img);
  };
  return (
    <>
      <div className={classes.poseContainer}>
        <div>
          <Box
            sx={{
              borderBottom: 1,
              borderColor:
                "linear-gradient(73.62deg, #00C1AA 1.49%, #0ABF68 137.45%)",
            }}
          >
            <StyledTabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="styled tabs example"
            >
              {tabData.map((val, index) => {
                return (
                  <StyledTab
                    label={val.label}
                    onClick={() => handleTabClick(val.label)}
                  />
                );
              })}
            </StyledTabs>
          </Box>
          {tabData.map((val, index) => {
            return (
              <TabPanel
                value={tabValue}
                index={index}
                className={classes.scroll}
              >
                {val.label == "Memes" ? (
                  <Grid container>
                    {val.collection?.map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          sm={4}
                          md={4}
                          lg={4}
                          key={index}
                          onClick={() => doAcion(item, val)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className={classes.box}>{item.title}</div>
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : val.label == "Backgrounds" ? (
                  <Grid container>
                    {val.collection?.map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          sm={4}
                          md={4}
                          lg={4}
                          key={index}
                          style={{ cursor: "pointer" }}
                        >
                          {item.color == "colorPicker" ? (
                            <div id="colorPicker" style={{ padding: "6px" }}>
                              <Wheel
                                width={width > 0 ? width : 136}
                                height={height > 0 ? height : 136}
                                color={hex}
                                radius="10px"
                                onChange={(color) => {
                                  changeBG(color.hex, val.noBackground, true);
                                }}
                              />
                            </div>
                          ) : item.color == "blank" ? (
                            <div
                              onClick={() =>
                                changeBG("#00000000", val.noBackground, false)
                              }
                            >
                              <img
                                ref={ref}
                                src=" https://storage.googleapis.com/ishro/uploads/639c221c32999.png"
                                style={{
                                  height: "auto",
                                  width: "100%",
                                  padding: "6px",
                                }}
                                onLoad={imageLoaded()}
                              />
                            </div>
                          ) : (
                            <div
                              onClick={() => doAcion(item, val)}
                              className={classes.box}
                              style={{ backgroundColor: `${item.color}` }}
                            ></div>
                          )}
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  val.collection?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        style={{ cursor: "pointer" }}
                        onClick={() => doAcion(item, val)}
                      >
                        <img
                          style={
                            action.name == item.actionName
                              ? {
                                  border: "0.2rem solid #BF3243",
                                }
                              : {}
                          }
                          src={item.image}
                          className={
                            val.label == "Animations" ||
                            val.label == "Still Pose" ||
                            val.label == "Pose"
                              ? classes.poseImg
                              : classes.imgDiv
                          }
                        />
                      </span>
                    );
                  })
                )}
              </TabPanel>
            );
          })}
        </div>
      </div>
      <Dialog
        open={open}
        maxWidth={"xs"}
        fullWidth
        id="QRcode"
        onClose={handleClose}
      >
        <DialogContent style={{ padding: "62px 20px" }}>
          <QRCodeApp link={link} />
        </DialogContent>
      </Dialog>{" "}
    </>
  );
}

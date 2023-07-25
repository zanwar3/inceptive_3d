import React, { useState, createRef, useEffect } from "react";
import { ModelView } from "..";
import { Button, Box, IconButton } from "@mui/material";
import useStyles from "./style";
import { useSelector, useDispatch } from "react-redux";
import ChevronLeftIcon from "@mui/icons-material/ArrowBackIosRounded";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import abc from "@/assets/image/abc.svg";
import PropTypes from "prop-types";
import Position from "../Position";
import { setContainer } from "@/slices/container.slice";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as htmlToImage from "html-to-image";
import slugify from "slugify";
import getCroppedImg from "./getCroppedImg";
import { Angles } from "@/assets/icons/desktop-36";
import { makeAspectCrop, centerCrop } from "react-image-crop";
import { MyVideoModel, NftActionMenu, ImageDownloadModal } from "@/components";
import { setEnvironment } from "@/slices/env.slice";
import { setAction } from "@/slices/action.slice";
import CameraAltIcon from "@mui/icons-material/CameraAltRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import TwoDModelView from "@/pages/TwoDModelView";
import dataCollections from "../../data/collections.json";

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
        <Box sx={{ color: "rgba(255, 255, 255, 1)", p: 3 }}>
          <Typography variant="h5">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Nft3DView() {
  const classes = useStyles();
  const ref = createRef(null);
  const dispatch = useDispatch();
  const [photolab, setPhotoLab] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [menuType, setMenuType] = useState("");
  const [pixelRatio, setPixelRatio] = useState(1);
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [color, setColorVal] = useState();
  const [phygital, setPhygital] = useState([]);
  const [twoDImageUrl, setTwoDImageUrl] = useState("");
  const [originalImage, setOriginalImage] = useState();
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const containerVal = useSelector((state) => state.container.value);
  const [modelName, setModel] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState("");
  const [model, setModelData] = React.useState();
  const currentAction = useSelector((state) => state.action);

  useEffect(() => {
    const url1 = window.location.href;
    var data = url1.split("/");
    var nftID = data[data.length - 1];
    var slug = data[data.length - 2];
    if (slug !== undefined) {
      const slugData = dataCollections.filter((data) => data.slug == slug);
      if (slugData.length > 0) {
        const nft = slugData[0].nfts.filter((data) => data.title == nftID);
        if (nft.length > 0) {
          setModelData(nft[0]);
        } else {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    }
  }, []);
  useEffect(() => {
    setOriginalImage(model?.image);
  }, [model]);

  useEffect(() => {
    dispatch(setEnvironment("StudioPlane"));
  }, []);

  const handleClickOpen = (val) => {
    setMenuType(val);
    const inst = localStorage.getItem("showIntruction");
    inst == null ? setOpen(true) : setOpen(false);
    localStorage.setItem("showIntruction", false);
    setPhotoLab(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const takeScreenShot = async (node) => {
    var options = {
      pixelRatio: 4,
      quality: 1.0,
      style: {
        background: "radial-gradient(#ff6b0033, #1e1e1e)",
      },
    };
    var dataURI = await htmlToImage.toJpeg(node, options);
    const my_width = node.width;
    const my_height = node.height;
    const croppedImage = await getCroppedImg(
      dataURI,
      centerAspectCrop(my_width, my_height, 1)
    );
    return croppedImage;
  };

  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "px",
          width: mediaWidth,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  const getScreenshot = async () => {
    var canvas = document.getElementById("my_canvas")?.firstChild?.firstChild;
    setPixelRatio(4);
    setTimeout(() => {
      takeScreenShot(canvas).then((dataURI) => {
        setImageUrl(dataURI);
      });
    }, 100);
  };

  const openDownloadScreenshot = async () => {
    if (currentAction?.type == "Still Pose" || currentAction?.type == "Pose") {
      await getScreenshot();
      setOpenModal(true);
    } else if (currentAction?.type == "Animations") {
      setOpenVideoModal(true);
    }
  };

  const closeModal = () => {
    setPixelRatio(3);
    setImageUrl(undefined);
    setOpenModal(!openModal);
  };

  const downloadModel = () => {
    const anchorElement = document.createElement("a");
    anchorElement.href = model?.file_url;
    const extension = model?.file_url.split(".").pop();
    const fileName =
      slugify(model?.name ?? "model_name", { lower: true }) + "." + extension;
    anchorElement.download = fileName;
    anchorElement.click();
  };

  const camerPosition01 = () => {
    ref.current.cameraPosition01();
  };

  const camerPosition02 = () => {
    ref.current.cameraPosition02();
  };

  const camerPosition03 = () => {
    ref.current.cameraPosition03();
  };

  const handleCloseVideoModal = () => {
    setOpenVideoModal(false);
  };

  const goToBack = () => {
    // SEtting default environment & pose
    dispatch(
      setContainer({
        value: "canvas",
      })
    );
    dispatch(setEnvironment("StudioPlane"));
    dispatch(setAction({ name: "T-Pose", type: "Pose" }));
    setTwoDImageUrl("");
    setModel("");
    setSelectedTab(false);
    setOriginalImage(model?.image);
    setPhygital([]);
    setPhotoLab(false);
  };
  const setImageForTwoD = (url) => {
    setTwoDImageUrl(url);
  };
  const setDefaultImage = (url) => {
    setOriginalImage(url);
  };

  const setModelName = (url) => {
    setModel(url);
  };

  const setPhygitalName = (url) => {
    setPhygital(url);
  };

  const setColor = (val) => {
    setColorVal(val);
  };
  console.log("imageUrl: ", imageUrl);

  return (
    <>
      {containerVal == "canvas" && (
        <>
          <div style={{ position: "relative" }}>
            <ModelView
              ref={ref}
              pixelRatio={pixelRatio}
              model={modelName != "" ? modelName : model}
            />
            {photolab && (
              <div className={classes.bottomRight}>
                <IconButton
                  onClick={openDownloadScreenshot}
                  sx={{ display: { xs: "block", sm: "none" } }}
                  className={classes.camerabtn}
                >
                  {currentAction?.type == "Pose" ? (
                    <CameraAltIcon style={{ fontSize: "32px" }} />
                  ) : (
                    <VideocamRoundedIcon style={{ fontSize: "32px" }} />
                  )}
                </IconButton>
              </div>
            )}
          </div>
          {!photolab ? (
            !isMobile && (
              <div className={isMobile ? classes.Center : classes.bottomCenter}>
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={downloadModel}
                >
                  {"Download Model"}
                </Button>
              </div>
            )
          ) : (
            <div className={classes.bottomCenter}>
              {!isMobile && (
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.btn}
                  onClick={openDownloadScreenshot}
                >
                  {"Download"}
                </Button>
              )}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  variant="contained"
                  className={classes.btn4}
                  onClick={camerPosition01}
                >
                  {"1"}
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn4}
                  onClick={camerPosition02}
                >
                  {"2"}
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn4}
                  onClick={camerPosition03}
                >
                  {"3"}
                </Button>
              </Box>
            </div>
          )}
        </>
      )}

      <div className={classes.topLeft}>
        <Button
          variant="contained"
          className={classes.backBtn}
          startIcon={<ChevronLeftIcon />}
          onClick={() => (photolab ? goToBack() : navigate(-1))}
        >
          {!isMobile && "Back"}
        </Button>
      </div>
      {containerVal === "2D" && (
        <div className={isMobile ? classes.center1 : classes.center}>
          <TwoDModelView
            color={color}
            outputImg={twoDImageUrl}
            image={originalImage}
            phygital={phygital}
            model={modelName}
            selectedTab={selectedTab}
          />
        </div>
      )}
      <div className={classes.topRight}>
        {!isMobile && (
          <>
            {" "}
            {!photolab ? (
              <NftActionMenu selectMenu={handleClickOpen} />
            ) : (
              <Position
                model={model}
                color={color}
                downloadScreenshot={openDownloadScreenshot}
                setColor={setColor}
                imageUrl={setImageForTwoD}
                defaultImage={setDefaultImage}
                modelName={setModelName}
                setSelectedTab={setSelectedTab}
                selectedTab={selectedTab}
                openModal={openModal}
                menuType={menuType}
                phygitalName={setPhygitalName}
              />
            )}
          </>
        )}
      </div>

      {/* mobile UI */}

      {!photolab && isMobile && (
        <div style={{ margin: "16px" }}>
          <NftActionMenu selectMenu={handleClickOpen} />
          {containerVal == "canvas" && (
            <Button
              variant="contained"
              className={classes.btn}
              onClick={downloadModel}
              fullWidth
            >
              {"Download Model"}
            </Button>
          )}
        </div>
      )}
      {photolab && isMobile && (
        <>
          <Position
            model={model}
            color={color}
            downloadScreenshot={openDownloadScreenshot}
            setColor={setColor}
            imageUrl={setImageForTwoD}
            defaultImage={setDefaultImage}
            modelName={setModelName}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            openModal={openModal}
            menuType={menuType}
            phygitalName={setPhygitalName}
          />
          <Button
            variant="contained"
            fullWidth
            className={classes.btn}
            onClick={openDownloadScreenshot}
          >
            {"Download"}
          </Button>
        </>
      )}

      <Dialog fullWidth open={open} onClose={handleClose}>
        <div onClick={() => handleClose()}>
          <img src={abc} width="100%" />
        </div>
      </Dialog>
      <ImageDownloadModal
        isOpen={openModal}
        model={model}
        close={closeModal}
        imageUrl={imageUrl}
      />
      <MyVideoModel
        isOpen={openVideoModal}
        close={handleCloseVideoModal}
        model={model}
      />
    </>
  );
}

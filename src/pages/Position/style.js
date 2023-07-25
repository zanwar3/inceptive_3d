import makeStyles from "@mui/styles/makeStyles";

// ***********************************************

export default makeStyles((theme) => ({
  closePaper: {
    borderRadius: "15px !important",
    padding: "20px 20px 20px 0px",
    boxShadow: "none !important",
  },
  img: {
    borderRadius: "10px !important",
  },
  box: {
    margin: "6px",
    height: "135px",
    background: "rgba(62, 62, 62, 0.67)",
    backdropFilter: "blur(13.5px)",
    borderRadius: "10px",
    fontFamily: "Neue Plak SemiBold",
    fontSize: "17px",
    color: "#BF3243",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "30px",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      height: "112px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "108px",
    },
    [theme.breakpoints.down("xl")]: {
      height: "112px !important",
    },
  },
  colorbox: {
    width: "100% !important",
    height: "135px !important",
    [theme.breakpoints.down("sm")]: {
      height: "108px !important",
    },
    [theme.breakpoints.down("xl")]: {
      height: "112px !important",
    },
    [theme.breakpoints.down("lg")]: {
      height: "112px !important",
    },
  },
  poseContainer: {
    backgroundColor: "rgb(62 62 62 / 67%)",
    borderRadius: "22px",
    height: "66vh",
    width: "50vh",
    padding: "4%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      borderRadius: "0px",
    },
  },
  scroll: {
    height: "55vh",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  imgDiv: {
    // border: "1px solid #bf3243",
    width: "30%",

    borderRadius: "10px",
    margin: "1%",
    ponter: "cursor",
  },
  poseImg: {
    width: "30%",
    backgroundColor: "rgb(62 62 62 / 67%)",
    borderRadius: "10px",
    margin: "1%",
    ponter: "cursor",
  },
  btn1: {
    borderColor: "white !important",
    textTransform: "capitalize !important",
    color: "#FFFFFF !important",
    fontSize: "18px !important",
    padding: "1% 8% !important",
    marginRight: "3% !important",
  },
  btn2: {
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    padding: "6px 30px!important",
    borderRadius: "10px!important",
    backgroundColor: "#BF3243 !important",
  },
  container: {
    padding: "10px",
    backgroundColor: theme.palette.background.light,
    borderRadius: "15px",
    position: "relative",
    color: "white",
  },
  topLeft: {
    position: "absolute",
    top: "20%",
    left: "4%",
  },
  topRight: {
    position: "absolute",
    top: "20%",
    right: "4%",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
  },
  bottomCenter: {
    position: "absolute",
    bottom: "12px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  auctiontitle: {
    color: theme.palette.text.secondary,
    lineHeight: "1.2rem",
    fontSize: "18px",
    fontFamily: "Neue Plak SemiBold",
    paddingTop: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  title: {
    fontSize: "30px",
    fontFamily: "Neue Plak SemiBold",
    padding: "1% 14%",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
      alignItems: "center",
      padding: "1% 4%",
    },
  },
  auctionPrice: {
    color: "#1EFFE4",
    paddingLeft: "4px",
  },
  avaimg: {
    width: "20px !important",
    height: "20px !important",
  },
  activeOption: {
    border: "0.3rem solid green !important",
  },
}));

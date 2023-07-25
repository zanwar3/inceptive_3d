import makeStyles from "@mui/styles/makeStyles";

// ***********************************************

export default makeStyles((theme) => ({
  center: {
    position: "absolute",
    top: "22.5%",
    left: "45%",
    transform: "translate(-50%, 0%)",
  },
  center1: {
    marginTop: "34%",
  },
  closePaper: {
    borderRadius: "15px !important",
    padding: "20px 20px 20px 0px",
    boxShadow: "none !important",
  },
  backBtn: {
    backgroundColor: "#414141!important",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "10px !important",
    },
  },
  btn: {
    backgroundColor: "#BF3243 !important",
    [theme.breakpoints.down("sm")]: {
      marginTop: "16px!important",
    },
  },
  img: {
    borderRadius: "10px !important",
  },
  imgDiv: {
    margin: "2%",
  },
  btn3: {
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    padding: "6px 30px!important",
    backgroundColor: "#BF3243 !important",
    borderRadius: "14px!important",
  },
  poseContainer: {
    backgroundColor: "rgb(62 62 62 / 67%)",
    borderRadius: "22px",
    height: "60vh",
    width: "50vh",
    padding: "4%",
  },
  btn1: {
    borderColor: "black !important",
    textTransform: "capitalize !important",
    color: "#414141 !important",
    fontSize: "18px !important",
    padding: "1% 8% !important",
    marginRight: "3% !important",
  },
  btn2: {
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    padding: "6px 30px!important",
    borderRadius: "10px!important",
  },
  btn4: {
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    padding: "6px 30px!important",
    borderRadius: "10px!important",
    width: "32px !important",
    height: "52px !important",
    margin: "4px !important",
    "&:hover": {
      backgroundColor: "#BF3243 !important",
    },
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
    [theme.breakpoints.down("sm")]: {
      top: "10%",
    },
  },
  topLeft1: {
    position: "absolute",
    top: "30%",
    left: "4%",
    [theme.breakpoints.down("sm")]: {
      top: "10%",
    },
  },
  camerabtn: {
    background:
      "linear-gradient(138.81deg, rgb(20 6 6 / 78%) 14.15%, #bf3243 106.54%)",
    borderRadius: "10px !important",
    color: "white !important",
    height: "42px !important",
    padding: "6px !important",
  },
  bottomRight: {
    position: "absolute",
    bottom: "1%",
    right: "4%",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
  },
  topRight: {
    position: "absolute",
    top: "20%",
    right: "4%",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      top: "10%",
    },
  },

  topRight1: {
    position: "absolute",
    top: "30%",
    right: "4%",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      top: "10%",
    },
  },
  bottomCenter: {
    position: "absolute",
    bottom: "0px",
    left: "50%",
    transform: "translate(-50%, -20%)",
    zIndex: 1,
  },
  Center: {
    textAlign: "center",
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
}));

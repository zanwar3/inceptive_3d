import makeStyles from "@mui/styles/makeStyles";

// ************************************************

export default makeStyles((theme) => ({
  topRight: {
    position: "absolute",
    display: "flex",
    bottom: "6%",
    right: "5.2%",
    width: "50vW",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      left: "5%",
      width: "95%",
      justifyContent: "start",
    },
  },
  bottomLeft: {
    position: "absolute",
    display: "flex",
    width: "100%",
    bottom: "6%",
    left: "6%",
    flexDirection: "column !important",
    [theme.breakpoints.down("md")]: {
      bottom: "26%",
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "26%",
      width: "50%",
    },
  },
  banner_title: {
    color: "#FFFFFF",
    width: "70%",
    fontFamily: "Neue Plak SemiBold !important",
    paddingBottom: "1%",
    fontSize: "74px !important",
    lineHeight: "1.1!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem !important",
      fontFamily: "Neue Plak semibold !important",
      fontWeight: "900 !important",
      width: "100%",
    },
  },
  explore_btn: {
    backgroundColor: "#BF3243 !important",
    color: "white !important",
    fontSize: "25px !important",
    padding: "12px 24px !important",
    width: "14rem !important",
    height: "4rem !important",
    borderRadius: "12px !important",
    [theme.breakpoints.down("sm")]: {
      height: "6% !important",
      fontSize: "1rem !important",
      width: "40% !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem !important",
      width: "100% !important",
      height: "6% !important",
      padding: "6px 24px !important",
    },
  },
  imgDiv: {
    width: "100%",
    borderRadius: "18px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "10px",
    },
  },
  title: {
    color: "white",
    fontFamily: "Neue Plak SemiBold !important",
    fontSize: "22px!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px!important",
    },
  },
  titleBox: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 5.43%, #000000 100%)",
    borderRadius: "0px 0px 20px 20px",
    width: "100%",
    padding: "0px 16px 12px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px 0px 10px 10px",
      padding: "0px 10px 10px",
    },
  },
  subImg: {
    position: "relative",
  },
  closePaper: {
    borderRadius: "15px !important",
    boxShadow: "none !important",
    backgroundColor: "#14181c00 !important",
    padding: "0px 0.5%",
  },
}));

import makeStyles from "@mui/styles/makeStyles";

// ***********************************************

export default makeStyles((theme) => ({
  closePaper: {
    borderRadius: "15px !important",
    boxShadow: "none !important",
    backgroundColor: "#14181c00 !important",
    padding: "10px",
  },
  img: {
    borderRadius: "10px !important",
  },
  btn: {
    borderRadius: "10px !important",
    fontSize: "16px !important",
    padding: "4px 14px !important",
  },
  container: {
    borderRadius: "15px",
    position: "relative",
    color: "white",
  },
  topLeft: {
    position: "absolute",
    top: "24px",
    left: "22px",
  },
  topRight: {
    position: "absolute",
    top: "24px",
    right: "30px",
    display: "flex",
    alignItems: "center",
  },
  auctiontitle: {
    fontSize: "18px",
    fontFamily: "Neue Plak SemiBold",
    position: "absolute",
    bottom: "13px",
    width: "95.5%",
    backgroundColor: "#80808052",
    display: "flex",
    borderBottomLeftRadius: "22px",
    borderBottomRightRadius: "22px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  title: {
    fontSize: "40px",
    fontFamily: "Neue Plak SemiBold",
    padding: "1% 6% !important",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
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
  imgDiv: {
    width: "100%",
    borderRadius: "26px",
  },
  name: {
    color: "white",
    fontFamily: "Neue Plak SemiBold !important",
    fontSize: "32px!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px!important",
    },
  },
  titleBox: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    background: "rgba(40, 40, 40, 0.38)",
    backdropFilter: "blur(8.07312px)",
    borderRadius: "0px 0px 22px 22px",
    width: "100%",
    padding: "6% 6%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 16px",
    },
  },
  subImg: {
    position: "relative",
    cursor: "pointer",
    margin: "0% 0.5%",
  },
}));

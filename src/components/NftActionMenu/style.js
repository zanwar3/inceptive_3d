import makeStyles from "@mui/styles/makeStyles";

// ***********************************************

export default makeStyles((theme) => ({
  main: {
    backgroundColor: "rgb(62 62 62 / 67%)",
    padding: "20px 16px",
    width: "20vW",
    borderRadius: "22px",
    //border: "1px solid #bf3243",
    // borderColor: "linear-gradient(73.62deg, #00C1AA 1.49%, #0ABF68 137.45%)",
    [theme.breakpoints.down("xl")]: {
      width: "25vW",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      backgroundColor: "#37363500",
      padding: "0px",
      borderRadius: "0px",
      border: "none",
    },
  },
  key: {
    fontSize: "16px!important",
    color: "#BF3243",
    fontFamily: "Neue Plak Bold !important",
    paddingBottom: "2%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  value: {
    fontSize: "16px!important",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontFamily: "Neue Plak Bold !important",
    textOverflow: "ellipsis",
  },
  container: {
    padding: "16px",
    backgroundColor: "rgb(62 62 62 / 67%)",
    position: "relative",
    color: "white",
    cursor: "pointer",
    borderRadius: "10px !important",
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

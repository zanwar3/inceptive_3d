import makeStyles from "@mui/styles/makeStyles";

// ***********************************************

export default makeStyles((theme) => ({
  container: {
    padding: "16px",
    background:
      "linear-gradient(#1e1e1e, #1e1e1e) padding-box,linear-gradient(to right, #ffffff, #bf3243) border-box",
    borderRadius: "22px",
    border: "2px solid transparent",
    display: "flex",
    flexDirection: "column !important",
    width: "25vW !important",
    [theme.breakpoints.down("sm")]: {
      width: "auto!important",

      border: "none",
      borderRadius: "0px",
    },
  },
  container2: {
    padding: "16px",
    background:
      "linear-gradient(#1e1e1e, #1e1e1e) padding-box,linear-gradient(to right, #ffffff, #bf3243) border-box",
    borderRadius: "22px",
    border: "2px solid transparent",
    display: "flex",
    flexDirection: "column !important",
    width: "28vW !important",
    [theme.breakpoints.down("sm")]: {
      width: "auto!important",
      border: "none",
      borderRadius: "0px",
    },
  },
  container3: {
    padding: "16px",
    background:
      "linear-gradient(#1e1e1e, #1e1e1e) padding-box,linear-gradient(to right, #ffffff, #bf3243) border-box",
    borderRadius: "22px",
    border: "2px solid transparent",
    display: "flex",
    flexDirection: "column !important",
    width: "38vW !important",
    [theme.breakpoints.down("sm")]: {
      width: "auto!important",
      border: "none",
      borderRadius: "0px",
    },
  },
  imgList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // margin: "16px 0px",
  },
  select: {
    border: " 1px solid #bf3243",
    margin: "16px 8px",
    width: "64px",
    borderRadius: "10px",
    background: "rgba(62, 62, 62, 0.67)",
    backdropFilter: "blur(13.5px)",
  },
  subImg: {
    margin: "16px 8px",
    width: "64px",
    borderRadius: "10px",
    background: "rgba(62, 62, 62, 0.67)",
    backdropFilter: "blur(13.5px)",
  },
  container1: {
    width: "42vW !important",
    padding: "16px",
    background:
      "linear-gradient(#1e1e1e, #1e1e1e) padding-box,linear-gradient(to right, #ffffff, #bf3243) border-box",
    borderRadius: "22px",
    border: "2px solid transparent",
    display: "flex",
    flexDirection: "row !important",
    [theme.breakpoints.down("sm")]: {
      width: "auto!important",

      border: "none",
      borderRadius: "0px",
    },
  },
  btn: { backgroundColor: "#BF3243 !important", margin: "16px 0px !important" },
  imageDiv: {
    width: "100%",
    borderRadius: "20px",
  },
}));

import makeStyles from "@mui/styles/makeStyles";

// ************************************************

export default makeStyles((theme) => ({
  container: {
    padding: "2% 4%",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 89.1%)",
    position: "absolute",
    top: "0px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      padding: "4%!important",
    },
  },
  user: {
    color: "#BF3243 ",
    fontSize: "56px!important",
    margin: "0px 12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px!important",
    },
  },
  loginbtn: {
    color: "#BF3243!important",
    margin: "0px 12px!important",
    [theme.breakpoints.down("sm")]: {
      padding: "4px 20px!important",
    },
  },
  container1: {
    padding: "2% 4%",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 89.1%)",
    position: "absolute",
    top: "0px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      padding: "4%",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "38% !important",
    },
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#414141 !important",
    borderRadius: "14px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "12px",
      padding: "4px 8px",
    },
  },
  icon: {
    backgroundColor: "#bf3243 !important",
    height: "inherit",
    borderRadius: "inherit",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "4px",
    },
  },
  containerBox: {
    borderBottom: "double 1px transparent",
    backgroundImage:
      "linear-gradient(#13181c,#13181c), linear-gradient(180deg, rgba(30, 255, 228, 0.2) 0%, rgba(10, 191, 104, 0.2) 100%)",
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "border-box",
    marginBottom: "0.5%",
  },
  title: {
    color: "rgba(30, 255, 228, 1)",
    background: "linear-gradient(73.62deg, #00C1AA 1.49%, #0ABF68 137.45%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Almarai-bold !important",
  },
  btnGroup: {
    color: `${theme.palette.text.white} !important;`,
    textTransform: "capitalize !important",
    fontSize: "16px !important",
    padding: "0px 26px !important",
    border: "none !important",
  },
  btnGroup1: {
    color: `${theme.palette.text.primary} !important;`,
    textTransform: "capitalize !important",
    fontSize: "16px !important",
    padding: "0px 26px !important",
    borderColor: `${theme.palette.text.primary} !important;`,
  },
}));

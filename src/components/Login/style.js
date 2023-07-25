import makeStyles from "@mui/styles/makeStyles";

// ************************************************

export default makeStyles((theme) => ({
  container: {
    padding: "5% 20px",
    color: "white",
    display: "flex!important",
    flexDirection: "column!important",
    borderRadius: "0px",
    maxWidth: "400px!important",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
      maxWidth: "100%",
      paddingTop: "19%",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "3%",
    justifyContent: "space-between",
  },
  loginWithGoogle: {
    background: "white",
    marginBottom: "33px",
    marginTop: "15px",
    borderRadius: "16px",
    color: "#353434",
    fontSize: "16px",
    fontFamily: "Almarai-SemiBold",

    "&:hover": {
      background: "white",
    },
  },
  dividerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#736e6e",
    marginBottom: "0px",
    "& span": {
      fontSize: "10px",
      margin: "0px 5px",
    },
  },
  dividerItem: { flex: "auto" },
  divider: {
    backgroundColor: "#736e6e",
  },
  icon: {
    color: "white",
  },
  inputFeild: {
    width: "100%",
  },
  googleIcon: { width: "20px", height: "20px" },
  forgotBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#24CDE6",
  },
  link: {
    color: "#BF3243",
  },
  loginBtn: {
    marginBottom: "3% !important",
    width: "100%",
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Almarai-SemiBold",
    fontSize: "20px",
  },
  forgotPasswordText: {
    cursor: "pointer",
  },

  phoneInput: {
    backgroundColor: `${theme.palette.background.lightgray} !important;`,
    border: "none !important",
    color: "white",
    width: "100% !important",
  },
  buttonClass: {
    backgroundColor: `${theme.palette.background.lightgray} !important;`,
    borderRadius: "8px !important",
    border: "none !important",
    "&:hover": {
      backgroundColor: `${theme.palette.background.lightgray} !important;`,
    },
  },
  dropdownClass: {
    backgroundColor: `${theme.palette.background.lightgray} !important;`,
    width: "362px !important",
    maxHeight: "265px !important",
    bottom: "47px !important",
  },
}));

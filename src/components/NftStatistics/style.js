import makeStyles from "@mui/styles/makeStyles";

// ***********************************************

export default makeStyles((theme) => ({

  container: {
    textTransform: "uppercase !important",
    fontFamily: "Neue Plak Bold !important",
    fontSize: "18px !important",
    borderRight: "1px solid rgba(218, 218, 218, 0.2) !important",
    marginTop: '5px !important',
    marginEnd: '15px !important',
    marginBottom: '8px !important',
    [theme.breakpoints.down("sm")]: {
      fontSize: '10px !important'
    },
  },
  container2: {
    display: "flex !important",
    flexDirection: "column !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: '12px !important'
    },
  },
  title: {
    fontSize: "14px",
    fontFamily: "Neue Plak SemiBold",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      alignItems: "center",
    },
  },
  title2: {
    fontSize: "12px",
    fontFamily: "Neue Plak",
    color: "#E2E2E2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      alignItems: "center",
    },
  },
  btn: {
    padding: "0px 0px !important",
    margin: "5px !important",
    border: "none !important",
    backgroundColor: "#BF3243 !important",
    borderRadius: "12px !important",
    minWidth: '150px !important',
    minHeight: '40px !important',
    [theme.breakpoints.down("sm")]: {
      minWidth: '100px !important',
      padding: "0px 5px !important",
    },
  },

}));

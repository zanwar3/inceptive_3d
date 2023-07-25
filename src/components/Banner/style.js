import makeStyles from "@mui/styles/makeStyles";

// ************************************************

export default makeStyles((theme) => ({
  container: {
    padding: "1px",
    backgroundColor: "rgb(35 28 48 / 65%)!important",
    borderRadius: "5px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      height: "577px",
      width: "430",
    },
  },
  bannetTitle: {
    position: "absolute",
    top: 250,
    fontSize: 40,
    fontWeight: 600,
    marginLeft: 100,
    width: "30%",
    fontFamily: "Almarai-Bold",
  },
  exploreWrapper: {
    position: "absolute",
    top: 350,
    marginLeft: 100,
    backgroundColor: "#a43847",
    borderRadius: 10,
    padding: 20,
    alignContent: "center",
    width: "200px",
    justifyContent: "center",
  },
  exploreBtn: {
    fontSize: 24,
    fontWeight: 600,
    fontFamily: "Neue Plak Regular",
    color: "#fff",
  },
}));

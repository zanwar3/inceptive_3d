import makeStyles from "@mui/styles/makeStyles";

export default makeStyles((theme) => ({
  closePaper: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    margin: "5% 5% 5% 0%",
  },
  btn: {
    padding: "0px",
  },
  img: {
    borderRadius: "10px !important",
  },
  imgDiv: {
    margin: "2%",
  },
  poseContainer: {
    backgroundColor: "rgb(62 62 62 / 67%)",
    borderRadius: "22px",
    height: "60vh",
    width: "50vh",
    padding: "4%",
  },
  btn1: {
    padding: "7px 27px !important",
    margin: "0px !important",
    backgroundColor: "#363635 !important",
    border: "none !important",
  },
  btn4: {
    padding: "8px 30px !important",
    margin: "20px 50px !important",
    backgroundColor: "#BF3243 !important",
  },
  btn5: {
    padding: "7px 27px !important",
    margin: "0px !important",
    border: "none !important",
    backgroundColor: "#BF3243 !important",
    fontSize: "14px !important",
    lineHeight: "19px !important",
    borderRadius: "12px",
  },
  btn2: {
    textTransform: "capitalize!important",
    fontSize: "18px!important",
    padding: "6px 30px!important",
    borderRadius: "10px!important",
  },
  btn3: {
    borderColor: "white !important",
    textTransform: "capitalize !important",
    color: "#FFFFFF !important",
    fontSize: "18px !important",
    padding: "1% 8% !important",
    marginRight: "3% !important",
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
    top: "12%",
    left: "4%",
    color: "white",
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
  bottomCenter: {
    position: "absolute",
    bottom: "12px",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
  icon: {
    color: "BF3243 !important",
    fontSize: "39px !important",
    width: "39px !important",
    height: "39px !important",
  },
  font01: {
    fontWeight: "400  !important",
    fontSize: "22px !important",
    LineHeight: "24.86px !important",
  },
  description: {
    marginTop: "16px!important",
    fontFamily: "Neue Plak Regular !important",
    fontSize: "14px !important",
    lineHeight: "24.89px !important",width: '80%',
    overflowWrap: "anywhere",
    color: "#E2E2E2 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",width: '100%'
    },
  },
}));

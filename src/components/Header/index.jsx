import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import logo from "../../assets/image/logo.svg";
import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { Divider, Button } from "@mui/material";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Diversity1 } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "@/components";
import { useNavigate } from "react-router-dom";
import { clearUser } from "@/services/auth.service";
// **********************************************************************

const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { error, loading, user } = useSelector((state) => state.auth);
  const [menuType, setMenuType] = React.useState("0");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isMobile = useMediaQuery("(max-width:599px)");
  useEffect(() => {
    if (user.email != undefined) {
      handleClose();
      setMenuType("1");
    }
  }, [user]);

  const logout = () => {
    setAnchorEl(null);
    clearUser();
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    const url1 = window.location.href;
    var Id = url1.substring(url1.lastIndexOf("/") + 1);
    if (Id == "") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  // *******************************************************

  return (
    <Grid
      container
      justifyContent="center"
      className={show ? classes.container : classes.container1}
    >
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flexGrow: 1 }}>
            <a href="/">
              <img src={logo} className={classes.logo} />
            </a>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <div className={classes.btn}>
                {" "}
                <img
                  src={
                    "https://storage.googleapis.com/ishro/uploads/63a43003a9375.svg"
                  }
                />
                <KeyboardArrowRightIcon style={{ color: "white" }} />
              </div>
            ) : (
              <div className={classes.btn}>
                <div className={classes.icon}>
                  <img
                    src={
                      "https://storage.googleapis.com/ishro/uploads/63a43003a9375.svg"
                    }
                  />
                </div>
                <Typography
                  sx={{
                    padding: "0px 20px",
                    fontSize: "18px",
                    boxShadow: "none",
                    fontWeight: "bolder",
                    color: "#BF3243 !important",
                  }}
                >
                  Connect
                </Typography>
              </div>
            )}
            <div onClick={handleClick}>
              {menuType == "0" && (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.loginbtn}
                  id="loginbtn"
                >
                  {"login"}
                </Button>
              )}
              {menuType == "1" && (
                <AccountCircleIcon className={classes.user} />
              )}
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)!important",
                  color: "white !important",
                  border: "2px solid transparent",
                  width: "400px",
                  borderRadius: "22px!important",
                  height: "auto",
                  marginTop: "14px",
                  background:
                    "linear-gradient(#353433, #353433) padding-box,linear-gradient(to right, #ffffff, #bf3243) border-box",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {menuType == "0" && <Login />}
              {menuType == "1" && (
                <>
                  <MenuItem onClick={handleClose}>
                    <Person2RoundedIcon
                      sx={{ marginRight: "12px", color: "#bf3243" }}
                    />
                    Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <FileDownloadOutlinedIcon
                      sx={{ marginRight: "12px", color: "#bf3243" }}
                    />
                    My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={logout}>
                    <LogoutOutlinedIcon
                      sx={{ marginRight: "12px", color: "#bf3243" }}
                    />
                    Logout
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;

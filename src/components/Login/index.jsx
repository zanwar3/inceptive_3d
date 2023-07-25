import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import validateEmail from "@/utils/validateEmail";
import { showLoader, hideLoader } from "@/slices/loader.slice";
import { setMessage } from "@/slices/message.slice";
import { login } from "@/slices/auth.slice";
import { useSelector, useDispatch } from "react-redux";
import useStyle from "./style";

function Login() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const [User, setUser] = React.useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (User.email === "" || User.password === "") {
      dispatch(
        setMessage({
          msgType: "error",
          message: "Kindly fill all the mandatory fields",
        })
      );

      return;
    }
    if (!validateEmail(User.email)) {
      dispatch(
        setMessage({
          msgType: "error",
          message: "Email not valid",
        })
      );
      return;
    }

    const user = {
      email: User.email,
      password: User.password,
    };
    dispatch(login(user));
  };
  return (
    <Grid container justifyContent="center">
      <Grid container md={12} className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h4" component="h4" className={classes.title}>
            {"Login"}
          </Typography>
        </div>

        <div>
          <TextField
            name="email"
            onChange={handleInput}
            autoComplete="disabled"
            placeholder={"Email Address"}
            className={classes.inputFeild}
            InputProps={{
              disableUnderline: true,
              autoComplete: "off",
            }}
          />
          <TextField
            name="password"
            onChange={handleInput}
            placeholder={"Password"}
            InputProps={{
              disableUnderline: true,
              type: values.showPassword ? "text" : "password",
              autoComplete: "new-password",
              form: {
                autoComplete: "off",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    style={{ color: "white" }}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className={classes.inputFeild}
            type={values.showPassword ? "text" : "password"}
          />
        </div>

        <Button
          variant="contained"
          className={classes.loginBtn}
          onClick={handleLogin}
        >
          {"Login"}
        </Button>

        {/* <Typography variant="caption" align="center">
          {"Don't have an account yet?"}

          <Link
            to="/register"
            // onClick={goToRegistration}
            className={classes.link}
          >
            {` ${"Sign up"} `}
          </Link>
        </Typography> */}
      </Grid>
    </Grid>
  );
}

export default Login;

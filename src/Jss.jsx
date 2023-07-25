import i18next from "i18next";
import { create } from "jss";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { StylesProvider, jssPreset } from "@mui/styles";
import rtl from "jss-rtl";
import shadows from "@/assets/theme/shadows";
import typography from "@/assets/theme/typography";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const preset = create({
  plugins: [...jssPreset().plugins],
});

export default function Jss(props) {
  const secondaryColor = "#BF3243";
  const primaryColor = "#353434";

  const black = "#000000";
  const darkgray = "#363636";
  const accentBlue = "#0077BE";
  const secondaryColor_vip = "#B1A773";

  const theme = createTheme({
    direction: i18next.dir(),
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            zIndex: 1,
            borderRadius: "14px",
            fontFamily: "Neue Plak SemiBold",
            backgroundColor: "#414141",
            textTransform: "capitalize",
            color: "#FFFFFF",
            fontSize: "18px",
            padding: "10px 22px",
            "&:hover": {
              backgroundColor: "#414141",
            },
          },
          outlined: {
            borderRadius: "10px",
            fontFamily: "Neue Plak",
            borderColor: secondaryColor,
            textTransform: "capitalize",
            color: "#FFFFFF",
            fontSize: "18px",
            padding: "1% 3%",
            margin: "4% 0%",
            //  height: "75px",
            "&:hover": {
              backgroundColor: black,
              borderColor: secondaryColor,
            },
          },
          text: {
            color: "#FFFFFF",
            fontSize: "20px",
            zIndex: 1,
            textTransform: "capitalize",
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
            border: "none",
            MuiSelected: {
              color: "#FFFFFF",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            fontFamily: "Neue Plak SemiBold",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          },
          input: {
            padding: "11.9px 14px",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            color: black,
            textTransform: "uppercase",
            backgroundColor: "white",
          },
          colorDefault: {
            backgroundColor: "white",
          },

          circular: {
            border: `1px solid 00C1AA `,
            backgroundColor: "white",
          },
        },
      },
      Mui: {
        completed: {
          color: "#f9f9f9",
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "10px 0px",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: "20px",
            //border: `1px solid ${secondaryColor}}`,
          },
        },
      },
    },
    palette: {
      background: {
        dark: "#E2E2E3",
        default: "#303030",
        paper: "#fff0",
        light: "#FFFFFE",
        black: black,
        blue: accentBlue,
        vip: secondaryColor_vip,
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
        primary: "#BF3243",
        secondary: "#181818",
        black: "#353434",
        white: "#FFFFFF",
        light: "#E5E5E5",
      },
    },
    shadows,
    typography,
    overrides: {
      MuiCheckbox: {
        root: {
          color: "#BF3243",
        },
        colorPrimary: {
          checked: {
            color: "#BF3243",
          },
        },
      },
      MuiCard: {
        root: {
          backgroundColor: black,
          padding: "20px",
          borderRadius: "22px",
        },
      },
    },
  });

  return (
    <StylesProvider jss={preset}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
}

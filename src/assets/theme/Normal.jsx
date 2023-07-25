import shadows from "@/assets/theme/shadows";
import typography from "@/assets/theme/typography";
import { createTheme } from "@mui/material/styles";

// *****************************************************************

const secondaryColor = "#BF3243";
const primaryColor = "#353434";
const black = "#000000";
const accentBlue = "#0077BE";
const secondaryColor_vip = "#B1A773";
const avtarColor = "#AD875C";

const Normal = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "10px",
          fontFamily: "Neue Plak SemiBold",
          backgroundColor: secondaryColor,
          textTransform: "capitalize",
          color: "#FFFFFF",
          fontSize: "20px",
          padding: "3px 15px",
          "&:hover": {
            backgroundColor: secondaryColor,
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
          margin: "4% 1%",
          height: "75px",
          "&:hover": {
            backgroundColor: black,
            borderColor: secondaryColor,
          },
        },
        text: {
          color: "#FFFFFF",
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
          border: `1px solid ${avtarColor}}`,
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
          //  border: `1px solid ${secondaryColor}}`,
        },
      },
    },
  },
  palette: {
    background: {
      dark: "#E2E2E3",
      default: "#303030",
      paper: "#14181C",
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
    },
  },
  shadows,
  typography,
  overrides: {
    MuiCheckbox: {
      root: {
        color: "#00C1AA",
      },
      colorPrimary: {
        checked: {
          color: "#00C1AA",
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

export default Normal;

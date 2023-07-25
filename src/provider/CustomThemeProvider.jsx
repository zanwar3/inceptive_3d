import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { Normal, Dark, Light } from "@/assets/theme";
import { createContext, useState } from "react";
import globalStyles from "@/assets/styles/globalStyles";

// **********************************************

const themes = {
  Normal,
  Dark,
  Light,
};

// **********************************************

const getTheme = (theme) => {
  return themes[theme];
};

// **********************************************

export const CustomThemeContext = createContext({
  currentTheme: "Normal",
  setTheme: null,
});

// **********************************************

const CustomThemeProvider = (props) => {
  const { children } = props;

  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem("appTheme") || "Normal";

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme);

  // Retrieve the theme object by theme name
  const theme = getTheme(themeName);

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name) => {
    localStorage.setItem("appTheme", name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  const inputGlobalStyles = <GlobalStyles styles={globalStyles} />;

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />

        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

// **********************************************

export default CustomThemeProvider;

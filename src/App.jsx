import React from "react";
import { Provider } from "react-redux";
import "@/assets/css/App.module.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout, Home, Nft3DView, NftDetails, NotFound } from "@/pages";
import GlobalStyles from "@/assets/styles/globalStyles";
import { useTheme } from "@emotion/react";
import store from "./store";
import Jss from "@/Jss";
//************************************

const App = () => {
  const theme = useTheme();

  // ************************************************

  return (
    <Provider store={store}>
      <Jss>
        <GlobalStyles />

        <Routes>
          <Route path={"/"} element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/:slug/:id"} element={<Nft3DView />} />
            <Route path={"/:slug"} element={<NftDetails />} />
            <Route path={"/404"} element={<NotFound />} />
          </Route>
        </Routes>
      </Jss>
    </Provider>
  );
};

export default App;

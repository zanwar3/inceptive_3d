import axios from "axios";
import config from "./index";

// *********************************************************

const PRODUCTION_ENV = "prod";

const { APP_ENV, API_URL_DEV, API_URL_PROD } = config.app;

const API_URL = APP_ENV == PRODUCTION_ENV ? API_URL_PROD : API_URL_DEV;

// *********************************************************

var http = axios.create({
  baseURL: "https://api.inceptivestudio.com/v1/",
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

// *********************************************************

http.interceptors.request.use(
  async (config) => {
    // const token = LocalStorageService.getAccessToken();
    if (config.headers === undefined) {
      config.headers = {};
    }
    // config.headers["Authorization"] = "Bearer " + token;

    return config;
  },
  (error) => {
    console.error("ERROR:", error.message);
    return Promise.reject(error);
  }
);

// *********************************************************

export default http;

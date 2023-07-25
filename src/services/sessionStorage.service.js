const MODEL_KEY = "current_model";
const ENVIRONMENT_KEY = "current_environment";

// ************************************************

const setLocalEnvironmentValue = (value) => {
  sessionStorage.setItem(ENVIRONMENT_KEY, value);
};

// *************************

const loadLocalEnvironmentValue = () => {
  return sessionStorage.getItem(ENVIRONMENT_KEY);
};

// *************************

const setLocalModelValue = (value) => {
  sessionStorage.setItem(MODEL_KEY, value);
};

// *************************

const loadLocalModelValue = () => {
  return sessionStorage.getItem(MODEL_KEY);
};

// *************************

const sessionStorageService = {
  setLocalEnvironmentValue,
  loadLocalEnvironmentValue,
  setLocalModelValue,
  loadLocalModelValue,
};

export default sessionStorageService;

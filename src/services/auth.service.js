// USER TOKEN
export const saveToken = (token) => {
  localStorage.setItem("3DinceptiveStudio_Token", JSON.stringify(token));
};

export const getToken = () => {
  var token = localStorage.getItem("3DinceptiveStudio_Token");
  return token ? token : "";
};
export const removeToken = () => {
  localStorage.removeItem("3DinceptiveStudio_Token");
};

// USER DATA
export const saveUserData = (data) => {
  localStorage.setItem("3DinceptiveStudio_User_Data", JSON.stringify(data));
};
export const getUserData = () => {
  return localStorage.getItem("3DinceptiveStudio_User_Data");
};

export const removeUserData = () => {
  localStorage.removeItem("3DinceptiveStudio_User_Data");
};

export const clearUser = () => {
  localStorage.removeItem("3DinceptiveStudio_Token");
  localStorage.removeItem("3DinceptiveStudio_User_Data");
};

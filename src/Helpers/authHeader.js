// import { LocalStorageService } from "@/services";

// *********************************************************

export default function authHeader() {
  const user = JSON.parse(LocalStorageService.getUser());
  if (user && user.accessToken) {
    return {
      "x-access-token": user.accessToken,
      Authorization: "Bearer " + user.accessToken,
    };
  }
  return {};
}

import type { User } from "../interface/user.interface";

export function getValidUser(userData: User[]): User | null {
  const rememberMeRaw = localStorage.getItem("rememberMe");
  const rememberMe = rememberMeRaw === "true" || rememberMeRaw === "1";
  let userToken: string | null = null;
  try {
    userToken = JSON.parse(localStorage.getItem("token") || "null");
  } catch {
    userToken = null;
  }

  if (rememberMe && userToken) {
    const checkUser = userData.find((user) => user.id === userToken);
    if (checkUser) {
      return checkUser;
    } else {
      return null;
    }
  }

  return null;
}

import type { User } from "../interface/user.interface";

export function getValidUser(): User | null {
  const rememberMeRaw = localStorage.getItem("rememberMe");
  const rememberMe = rememberMeRaw === "true" || rememberMeRaw === "1";

  const userStr = localStorage.getItem("currentUser");
  let user: User | null = null;

  try {
    user = userStr ? JSON.parse(userStr) : null;
  } catch {
    user = null;
  }

  if (
    rememberMe &&
    user &&
    typeof user.email === "string" &&
    typeof user.username === "string" &&
    user.email.length > 0 &&
    user.username.length > 0
  ) {
    return user;
  }

  return null;
}

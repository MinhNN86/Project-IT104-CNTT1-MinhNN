import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useCustomerRedux";
import { login } from "../redux/slices/userLoginSlice";
import { getValidUser } from "../utils/authCheck";

export function useAuthCheck() {
  const navigate = useNavigate();
  const userLogin = useAppSelector((state) => state.userLogin.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userLogin.id === "") {
      const validUser = getValidUser();
      if (validUser) {
        dispatch(login(validUser));
      } else {
        navigate("/SignIn");
      }
    }
  }, [dispatch, navigate, userLogin.id]);

  return userLogin;
}

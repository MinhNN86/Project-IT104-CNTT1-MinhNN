import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useCustomerRedux";
import { login } from "../redux/slices/userLoginSlice";
import { getValidUser } from "../utils/authCheck";
import { getAllUser } from "../apis/user.api";

export function useAuthCheck() {
  const navigate = useNavigate();
  const userLogin = useAppSelector((state) => state.userLogin.user);
  const userData = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    // Chỉ kiểm tra khi userData đã load xong
    if (userLogin.id === "" && userData && userData.length > 0) {
      const validUser = getValidUser(userData);
      if (validUser) {
        dispatch(login(validUser));
      } else {
        navigate("/SignIn");
      }
    }
  }, [dispatch, navigate, userLogin.id, userData]);

  return userLogin;
}

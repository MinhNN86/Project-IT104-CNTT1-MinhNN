import React, { useEffect, useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { notification } from "antd";
import "../../style/SignUp.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomerRedux";
import { addUser, getAllUser } from "../../apis/user.api";
import type { User } from "../../interface/user.interface";

// Hàm kiểm tra mật khẩu mạnh
const isStrongPassword = (password: string): boolean => {
  if (password.length < 8) return false;
  if (!/[a-z]/.test(password)) return false; // Chưa có chữ thường
  if (!/[A-Z]/.test(password)) return false; // Chưa có chữ hoa
  if (!/\d/.test(password)) return false; // Chưa có số
  if (!/[^A-Za-z0-9]/.test(password)) return false; // Chưa có ký tự đặc biệt
  return true;
};

export default function SignUp() {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let key = "";
    if (id === "inputEmail") key = "email";
    else if (id === "inputUsername") key = "username";
    else if (id === "inputPassword") key = "password";
    else if (id === "inputConfirmPassword") key = "confirmPassword";
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      notification.error({
        message: "Error",
        description: "Please fill in all required fields.",
        placement: "topLeft",
      });
      return;
    }

    // Check for duplicate email
    if (userData.data.some((e) => e.email === form.email)) {
      notification.error({
        message: "Error",
        description: "Email already exists.",
        placement: "topLeft",
      });
      return;
    }

    // Check for duplicate username
    if (userData.data.some((e) => e.username === form.username)) {
      notification.error({
        message: "Error",
        description: "Username already exists.",
        placement: "topLeft",
      });
      return;
    }

    if (!isStrongPassword(form.password)) {
      notification.error({
        message: "Error",
        description:
          "Password must be at least 8 characters, include lowercase, uppercase, number, and special character.",
        placement: "topLeft",
      });
      return;
    }
    if (form.password !== form.confirmPassword) {
      notification.error({
        message: "Error",
        description: "Passwords do not match.",
        placement: "topLeft",
      });
      return;
    }

    const newUser: User = {
      email: form.email,
      username: form.username,
      password: form.password,
      favorites: [],
    };
    dispatch(addUser(newUser))
      .unwrap()
      .then(() => {
        notification.success({
          message: "Success",
          description: "Sign up successful.",
          placement: "topLeft",
        });
        setTimeout(() => {
          navigate("/SignIn");
        }, 2000);
      })
      .catch((error) => {
        notification.error({
          message: "Sign up failed",
          description:
            error?.message || "An error occurred during registration.",
          placement: "topLeft",
        });
      });
  };

  return (
    <div className="signUp-page-center">
      <div className="signUp-container">
        <img src={logo} alt="logo" />
        <p>Please sign up</p>
        <form onSubmit={handleSubmit}>
          <div className="inputEmail">
            <input
              type="email"
              placeholder="Email address"
              id="inputEmail"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputUsername">
            <input
              type="text"
              placeholder="Username"
              id="inputUsername"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="inputPassword" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="inputPassword"
              value={form.password}
              onChange={handleChange}
              style={{ paddingRight: 32 }}
            />
            <span
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </span>
          </div>
          <div className="confirmPass" style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="inputConfirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              style={{ paddingRight: 32 }}
            />
            <span
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </span>
          </div>
          <div className="signUp">
            Already have an account, <Link to="/SignIn">click here !</Link>
          </div>
          <button className="btn-signUp" id="btn-singUp" type="submit">
            Sign up
          </button>
        </form>
        <div className="copyright">© 2025 - MinhNN</div>
      </div>
    </div>
  );
}

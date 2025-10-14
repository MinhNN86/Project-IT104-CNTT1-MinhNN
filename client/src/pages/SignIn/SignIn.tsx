import "../../style/SignIn.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomerRedux";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { getAllUser } from "../../apis/user.api";
import { login } from "../../redux/slices/userLoginSlice";

export default function SignIn() {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "inputEmail") {
      setForm({ ...form, email: value });
    } else if (id === "inputPassword") {
      setForm({ ...form, password: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      notification.error({
        message: "Error",
        description: "Please enter your email and password.",
        placement: "topLeft",
      });
      return;
    }
    const user = userData.data.find((u) => u.email === form.email);
    if (!user) {
      notification.error({
        message: "Error",
        description: "Email does not exist.",
        placement: "topLeft",
      });
      return;
    }
    if (user.password !== form.password) {
      notification.error({
        message: "Error",
        description: "Incorrect password.",
        placement: "topLeft",
      });
      return;
    }

    notification.success({
      message: "Success",
      description: "Sign in successful.",
      placement: "topLeft",
    });

    // Lưu vào redux
    dispatch(login(user));
    localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
    localStorage.setItem("token", JSON.stringify(user.id));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="signIn-page-center">
      <div className="signIn-container">
        <img src={logo} alt="logo" />
        <p>Please sign in</p>
        <form onSubmit={handleSubmit}>
          <div className="inputEmail">
            <input
              type="text"
              placeholder="Email address"
              id="inputEmail"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputPassword">
            <input
              type="password"
              placeholder="Password"
              id="inputPassword"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe((prev) => !prev)}
              style={{ width: 16, height: 16 }}
            />
            <div style={{ fontSize: 16 }}>Remember me</div>
          </div>
          <div className="singUp">
            Don't have an account, <Link to="/SignUp">click here !</Link>
          </div>
          <button className="btn-signIn" id="btn-signIn" type="submit">
            Sign in
          </button>
        </form>
        <div className="copyright">© 2025 - MinhNN</div>
      </div>
    </div>
  );
}

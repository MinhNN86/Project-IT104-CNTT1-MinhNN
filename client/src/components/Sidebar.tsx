import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import "../style/Sidebar.css";

import foodIcon from "../assets/sideBar/food.png";
import homeIcon from "../assets/sideBar/home.png";
import recipesIcon from "../assets/sideBar/recipes.png";
import signOut from "../assets/sideBar/signOut.png";
import logo from "../assets/logo.png";
import miniLogo from "../assets/miniLogo.png";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { resetFilter } from "../redux/slices/filterSlice";
import { logout } from "../redux/slices/userLoginSlice";

export default function SideBar() {
  const sideBar = useAppSelector((state) => state.sidebar.isSidebarOpen);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace("/", "");

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/SignIn");
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={!sideBar}
      style={{
        backgroundColor: "#2F4050",
        position: "relative",
        height: "100vh",
      }}
      width={220}
    >
      <div>
        <div className="w-full h-[156px] flex justify-center items-center">
          {sideBar ? (
            <img src={logo} alt="" style={{ width: 190, height: 44 }} />
          ) : (
            <img src={miniLogo} alt="" style={{ width: 50 }} />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "Homepage",
              icon: (
                <span className="sidebar-icon-circle">
                  <img
                    src={homeIcon}
                    alt="Home"
                    style={{ width: 18, height: 16 }}
                  />
                </span>
              ),
              label: "Homepage",
            },
            {
              key: "Foods",
              icon: (
                <span className="sidebar-icon-circle">
                  <img
                    src={foodIcon}
                    alt="Food"
                    style={{ width: 18, height: 18 }}
                  />
                </span>
              ),
              label: "Foods",
            },
            {
              key: "Recipes",
              icon: (
                <span className="sidebar-icon-circle">
                  <img
                    src={recipesIcon}
                    alt="Recipes"
                    style={{ width: 18, height: 18 }}
                  />
                </span>
              ),
              label: "Recipes",
            },
          ]}
          style={{
            backgroundColor: "#2F4050",
            ...(sideBar
              ? {}
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }),
          }}
          selectedKeys={[
            path === "" ? "Homepage" : path === "Foods" ? "Foods" : "Recipes",
          ]}
          className="custom-sidebar-menu"
          onClick={({ key }) => {
            dispatch(resetFilter());
            if (key === "Homepage") navigate("/");
            else navigate(`/${key}`);
          }}
        />
      </div>

      <div
        className={`sidebar-signout ${sideBar ? "" : "collapsed"}`}
        onClick={handleLogout}
      >
        <img src={signOut} alt="signOut" className="sidebar-signout-icon" />
        {sideBar && <span className="sidebar-signout-text">Sign out</span>}
      </div>
    </Sider>
  );
}

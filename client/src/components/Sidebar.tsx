import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import "../style/Sidebar.css";

import foodIcon from "../assets/sideBar/food.png";
import homeIcon from "../assets/sideBar/home.png";
import recipesIcon from "../assets/sideBar/recipes.png";
import signOut from "../assets/sideBar/signOut.png";
import logo from "../assets/logo.png";
import miniLogo from "../assets/miniLogo.png";
import { useAppSelector } from "../hooks/useCustomerRedux";

export default function SideBar() {
  const sideBar = useAppSelector((state) => state.sidebar.isSidebarOpen);

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
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
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
              key: "2",
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
              key: "3",
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
          selectedKeys={["1"]}
          className="custom-sidebar-menu"
        />
      </div>

      <div className={`sidebar-signout ${sideBar ? "" : "collapsed"}`}>
        <img src={signOut} alt="signOut" className="sidebar-signout-icon" />
        {sideBar && <span className="sidebar-signout-text">Sign out</span>}
      </div>
    </Sider>
  );
}

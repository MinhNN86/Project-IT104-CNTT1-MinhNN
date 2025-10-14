import { Layout, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { Content } from "antd/es/layout/layout";
import HeaderLayout from "../components/Header";

export default function DashboardLayout() {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh", height: "100vh" }}>
      <SideBar />
      <Layout>
        <HeaderLayout />

        <div
          style={{
            width: "100%",
            borderTop: "1px solid #ebebeb",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 90,
            paddingLeft: 24,
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          <div className="text-[#676A6C] text-[24px]">
            {path === "Foods" ? "Food databases" : "Recipes"}
          </div>
          <div className="text-[#888888] text-[13px]">
            {path === "Foods"
              ? "Create, check and update foods that you can use on meal plans"
              : "Create, check and update recipes"}
          </div>
        </div>

        <Content
          style={{
            margin: "24px 16px",
            padding:
              path.startsWith("Recipes/") || path.includes("AddRecipes")
                ? 0
                : 24,
            minHeight: 280,
            background:
              path.startsWith("Recipes/") || path.includes("AddRecipes")
                ? "#F5F5F5"
                : colorBgContainer,
            borderRadius:
              path.startsWith("Recipes/") || path.includes("AddRecipes")
                ? 0
                : borderRadiusLG,
          }}
        >
          {/* Nội dung pages */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

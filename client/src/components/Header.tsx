import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { closeSidebar, openSidebar } from "../redux/slices/sidebarSlices";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { useAuthCheck } from "../hooks/useAuthCheck";
import type { User } from "../interface/user.interface";

export default function HeaderLayout() {
  const userLogin: User = useAuthCheck();

  const sizeBar = useAppSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useAppDispatch();

  const handleSidebar = () => {
    if (sizeBar) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  return (
    <Header style={{ padding: 0, background: "#FFFFFF" }}>
      <div className="flex justify-between items-center">
        <Button
          type="text"
          icon={!sizeBar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleSidebar}
          style={{
            fontSize: "18px",
            width: 46,
            height: 32,
            color: "#fff",
            background: "#1AB394",
            borderRadius: 3,
            marginLeft: 20,
          }}
        />

        <div className="mr-5">{userLogin.username}</div>
      </div>
    </Header>
  );
}

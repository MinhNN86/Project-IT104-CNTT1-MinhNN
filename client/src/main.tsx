// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";
import { ConfigProvider, App as AntdApp } from "antd"; // bold
import viVN from "antd/locale/vi_VN"; // Ngôn ngữ Tiếng Việt
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = createRoot(document.getElementById("root")!);
root.render(
  // <StrictMode>
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1AB394",
        fontFamily: "Roboto, sans-serif",
      },
    }}
    locale={viVN} // Thiết lập ngôn ngữ Tiếng Việt
  >
    <AntdApp>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </AntdApp>
  </ConfigProvider>
  // </StrictMode>
);

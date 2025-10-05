import { Checkbox, ConfigProvider } from "antd";
import { HeartFilled, EditOutlined } from "@ant-design/icons";

export default function RecipeInfo() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1 shadow-sm">
        <HeartFilled style={{ color: "#cf1322" }} className="text-sm" />
        <span className="text-gray-600">Favorites</span>
        <span className="text-gray-400">0</span>
      </div>

      <div className="inline-flex items-center gap-2">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0ea5e9",
            },
          }}
        >
          <Checkbox onChange={() => console.log(1)} />
        </ConfigProvider>
        <EditOutlined className="!text-sky-600" />
        <span className="text-sky-600 font-medium">My recipes</span>
      </div>
    </div>
  );
}

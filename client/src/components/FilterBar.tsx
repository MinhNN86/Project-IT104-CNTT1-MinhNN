// FilterBar.tsx
import { Input, Select, Space } from "antd";
import { SortAscendingOutlined } from "@ant-design/icons";
import "../style/FilterBar.css";
import { useLocation } from "react-router-dom";

const { Option } = Select;

export default function FilterBar() {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <div
      style={{
        width: "100%",
        padding: "8px 0",
        display: "flex",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space style={{ width: "auto" }} size={8}>
        {/* Search food */}
        <Input
          placeholder={
            path === "Recipes" ? "Search recipes by name" : "Search food"
          }
          style={{ width: "40vh", height: 34 }}
        />

        {/* Sort by nutrient */}
        <Space>
          <div style={{ border: "1px solid #ebebeb", borderRadius: 5 }}>
            <SortAscendingOutlined
              style={{
                fontSize: 18,
                color: "#888",
                borderRight: "1px solid #ebebeb",
                width: 36,
                justifyContent: "center",
                cursor: "pointer",
              }}
            />
            <Select
              placeholder="Sort by nutrient"
              style={{ width: 200, height: 34 }}
              className="no-border-select"
            >
              <Option value="protein">Protein</Option>
              <Option value="carb">Carbohydrate</Option>
              <Option value="fat">Fat</Option>
              <Option value="calories">Calories</Option>
            </Select>
          </div>
        </Space>

        {/* Category */}
        <Select placeholder="Category" style={{ width: 200, height: 34 }}>
          <Option value="fruit">Fruit</Option>
          <Option value="vegetable">Vegetable</Option>
          <Option value="meat">Meat</Option>
          <Option value="dairy">Dairy</Option>
          <Option value="grain">Grain</Option>
        </Select>
      </Space>
    </div>
  );
}

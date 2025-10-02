// FilterBar.tsx
import { Input, Select, Space } from "antd";
import { SortAscendingOutlined } from "@ant-design/icons";
import "../style/FilterBar.css";

const { Option } = Select;

export default function FilterBar() {
  return (
    <div
      style={{
        width: "100%",
        padding: "8px 0",
        display: "flex",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space style={{ width: "auto" }} size={8}>
        {/* Search food */}
        <Input
          placeholder="Search food"
          style={{ width: "35vh", height: 34 }}
        />

        {/* Sort by nutrient */}
        <Space>
          <div style={{ border: "1px solid #ebebeb" }}>
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

// FilterBar.tsx
import { Input, Select, Space } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import "../style/FilterBar.css";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import {
  updateSearchValue,
  updateSortBy,
  updateCategory,
  updateSortType,
} from "../redux/slices/filterSlice";
import { useEffect } from "react";
import { getAllCategoryRecipe } from "../apis/categoryRecipe.api";
import { getAllCategoryFood } from "../apis/categoryFood.api";

const { Option } = Select;

export default function FilterBar() {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const dispatch = useAppDispatch();

  const categoryRecipe = useAppSelector((state) => state.categoryRecipe.data);
  const categoryFood = useAppSelector((state) => state.categoryFood);
  const { searchValue, sortType, sortBy, category } = useAppSelector(
    (state) => state.filter
  );

  useEffect(() => {
    if (path === "Foods") {
      dispatch(getAllCategoryFood());
    } else {
      dispatch(getAllCategoryRecipe());
    }
  }, [dispatch, path]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateSearchValue(value));
  };

  const handleSortChange = (value: string) => {
    dispatch(updateSortBy(value));
  };

  const handleCategoryChange = (value: string) => {
    dispatch(updateCategory(value));
  };

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
          value={searchValue}
          onChange={handleSearchChange}
        />

        {/* Sort by nutrient */}
        <Space>
          <div style={{ border: "1px solid #ebebeb", borderRadius: 5 }}>
            {sortType === "az" ? (
              <SortAscendingOutlined
                style={{
                  fontSize: 18,
                  color: "#888",
                  borderRight: "1px solid #ebebeb",
                  width: 36,
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(updateSortType())}
              />
            ) : (
              <SortDescendingOutlined
                style={{
                  fontSize: 18,
                  color: "#888",
                  borderRight: "1px solid #ebebeb",
                  width: 36,
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(updateSortType())}
              />
            )}
            <Select
              style={{ width: 200, height: 34 }}
              className="no-border-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <Option value="">Sort by nutrient</Option>
              <Option value="energy">Energy</Option>
              <Option value="fat">Fat</Option>
              <Option value="carbohydrate">Carbohydrate</Option>
              <Option value="protein">Protein</Option>
            </Select>
          </div>
        </Space>

        {/* Category */}
        <Select
          style={{ width: 240, height: 36 }}
          value={category}
          onChange={handleCategoryChange}
          placeholder="All categories"
        >
          <Option value="">All categories</Option>
          {path === "Foods"
            ? categoryFood.data &&
              categoryFood.data.map((category) => (
                <Option value={category.name} key={category.id}>
                  {category.name}
                </Option>
              ))
            : categoryRecipe.map((category) => (
                <Option value={category.name} key={category.id}>
                  {category.name}
                </Option>
              ))}
        </Select>
      </Space>
    </div>
  );
}

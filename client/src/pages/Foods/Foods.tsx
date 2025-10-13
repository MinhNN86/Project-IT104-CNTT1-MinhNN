import { useEffect, useState } from "react";
import { getAllFood } from "../../apis/food.api";
import FilterBar from "../../components/FilterBar";
import HeaderContent from "../../components/HeaderContent";
import PrettyPagination from "../../components/PrettyPagination";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomerRedux";
import { openModalAdd } from "../../redux/slices/foods/modalAddFood";
import { openModalEditFood } from "../../redux/slices/foods/modalEditFood";
import AddFoodModal from "./components/AddFoodModal";
import CreateFood from "./components/CreateFood";
import EditFoodModal from "./components/EditFoodModal";
import FoodRow from "./components/FoodRow";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useSearchParams } from "react-router-dom";

export default function Foods() {
  useAuthCheck();
  const foodData = useAppSelector((state) => state.food.data);
  const { searchValue, sortBy, category, sortType } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  // Lọc food theo filter
  const filteredFood = () => {
    let filtered = [...foodData];

    // Lọc theo searchValue
    if (searchValue) {
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Lọc theo category
    if (category) {
      filtered = filtered.filter((food) => food.category === category);
    }

    // Sắp xếp theo sortBy và sortType
    if (sortBy) {
      type NutrientKey = "energy" | "fat" | "carbohydrate" | "protein";
      filtered = filtered.sort((a, b) => {
        const getValue = (food: typeof a, key: NutrientKey) => {
          return food.macronutrients[key] ?? 0;
        };
        return sortType === "az"
          ? getValue(a, sortBy as NutrientKey) -
              getValue(b, sortBy as NutrientKey)
          : getValue(b, sortBy as NutrientKey) -
              getValue(a, sortBy as NutrientKey);
      });
    }

    return filtered;
  };

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: String(page) });
  };
  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  const filtered = filteredFood();
  const pagedFood = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <HeaderContent />
      <FilterBar />

      <div className="mt-[16px] flex flex-col gap-[10px]">
        {pagedFood.map((food) => (
          <FoodRow
            key={food.id}
            name={food.name}
            source={food.source}
            energy={`${food.macronutrients.energy ?? 0} kcal`}
            fat={`${food.macronutrients.fat ?? 0} g`}
            protein={`${food.macronutrients.protein ?? 0} g`}
            carb={`${food.macronutrients.carbohydrate ?? 0} g`}
            onClick={() => dispatch(openModalEditFood(food))}
          />
        ))}

        <CreateFood onClick={() => dispatch(openModalAdd())} />
      </div>

      <AddFoodModal />

      <EditFoodModal />

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 24,
            bottom: 0,
          }}
        >
          <PrettyPagination
            current={currentPage}
            total={filtered.length}
            pageSize={pageSize}
            onChange={(page) => handlePageChange(page)}
          />
        </div>
      </div>
    </div>
  );
}

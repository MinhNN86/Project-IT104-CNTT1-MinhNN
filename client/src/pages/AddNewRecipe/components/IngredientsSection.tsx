import { useEffect, useState } from "react";
import type { Food } from "../../../interface/food.interface";
import "../../../style/AddNewRecipe.css";
import {
  DeleteFilled,
  PlusOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  UpOutlined,
} from "@ant-design/icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useCustomerRedux";
import { updateAddRecipeIngredients } from "../../../redux/slices/addRecipeSlice";
import { getAllCategoryFood } from "../../../apis/categoryFood.api";
import PrettyPagination from "../../../components/PrettyPagination";

type PropType = {
  foodData: Food[];
};

export default function IngredientsSection({ foodData }: PropType) {
  const [hoveredFoodId, setHoveredFoodId] = useState<string | null>(null);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [sortNutrient, setSortNutrient] = useState("");
  const [sortType, setSortType] = useState<"az" | "za">("az");

  const addRecipeData = useAppSelector((state) => state.addRecipe.addRecipe);
  const categoryFood = useAppSelector((state) => state.categoryFood.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategoryFood());
  }, [dispatch]);

  const updateSortType = () => {
    if (sortType === "az") {
      setSortType("za");
    } else {
      setSortType("az");
    }
  };

  const addIngredient = (idFood: string) => {
    const newIngredients = [...addRecipeData.ingredients, idFood];
    dispatch(updateAddRecipeIngredients(newIngredients));
  };

  const removeFood = (idFood: string) => {
    const idx = addRecipeData.ingredients.findIndex(
      (ingredientId: string) => ingredientId === idFood
    );
    if (idx === -1) return;
    const newIngredients = [
      ...addRecipeData.ingredients.slice(0, idx),
      ...addRecipeData.ingredients.slice(idx + 1),
    ];
    dispatch(updateAddRecipeIngredients(newIngredients));
  };

  // Lọc foodData theo search và sort
  const getNutrientValue = (food: Food, nutrient: string): number => {
    switch (nutrient) {
      case "energy":
        return food.macronutrients.energy ?? 0;
      case "fat":
        return food.macronutrients.fat ?? 0;
      case "carbohydrate":
        return food.macronutrients.carbohydrate ?? 0;
      case "protein":
        return food.macronutrients.protein ?? 0;
      default:
        return 0;
    }
  };

  let filteredFood = foodData.filter((food) => {
    const matchName = food.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const matchCategory =
      searchCategory === "" ||
      (food.category && food.category === searchCategory);
    return matchName && matchCategory;
  });

  if (sortNutrient) {
    filteredFood = [...filteredFood].sort((a, b) => {
      const aValue = getNutrientValue(a, sortNutrient);
      const bValue = getNutrientValue(b, sortNutrient);
      if (sortType === "az") {
        return aValue - bValue; // tăng dần
      } else {
        return bValue - aValue; // giảm dần
      }
    });
  }

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const pagedFood = filteredFood.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="ingredient recipeDetailCard">
      <div className="recipeDetailsTitle">
        <h2>Ingredients</h2>
        <p>Search and add ingredients to the recipe</p>
      </div>
      <div className="ingredientList">
        {addRecipeData.ingredients.map((foodId: string, index) => {
          const food = foodData.find((f) => f.id === foodId);
          if (!food) return null;
          return (
            <div className="ingredientCard" key={index}>
              <div className="ingredientValue">
                <div className="list">
                  {food.name} ({food.quantity}g)
                </div>
              </div>
              <div className="removeFood" onClick={() => removeFood(foodId)}>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <DeleteFilled style={{ color: "#676A6C" }} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="newIngredient">
        <div className="newIngredientTitle">
          <div className="img">
            <UpOutlined style={{ color: "#1AB394" }} />
          </div>
          <div>Add new ingredient</div>
        </div>

        <div className="searchIngredient">
          <input
            type="text"
            placeholder="Search food"
            id="searchFood"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <div className="sortNutrient" onClick={updateSortType}>
            <div>
              {sortType === "az" ? (
                <SortAscendingOutlined style={{ color: "#676A6C" }} />
              ) : (
                <SortDescendingOutlined style={{ color: "#676A6C" }} />
              )}
            </div>
            <select
              id="inputNutrient"
              value={sortNutrient}
              onChange={(e) => setSortNutrient(e.target.value)}
            >
              <option value="">Sort by nutrient</option>
              <option value="energy">Energy</option>
              <option value="fat">Fat</option>
              <option value="carbohydrate">Carbohydrate</option>
              <option value="protein">Protein</option>
            </select>
          </div>
          <select
            id="searchCategory"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="">All categories</option>
            {categoryFood &&
              categoryFood.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
          </select>
        </div>

        <div className="foodInfo">
          <div className="foodInfoHeader">
            <div className="text">Nutritional Information</div>
            <div className="foodNutrition">
              <div>Energy</div>
              <div>Fat</div>
              <div>Carboh…</div>
              <div>Protein</div>
              <span className="last" />
            </div>
          </div>

          {pagedFood.map((food) => {
            if (!food.id) return null;
            const foodIdentifier = food.id;
            const isHovered = hoveredFoodId === foodIdentifier;
            return (
              <div
                className={`foodValue${isHovered ? " foodValueChoose" : ""}`}
                key={foodIdentifier}
                onMouseEnter={() => setHoveredFoodId(foodIdentifier)}
                onMouseLeave={() => setHoveredFoodId(null)}
              >
                <div className="foodValueTitle">
                  <h3>{food.name}</h3>
                  <p>Community Recipes</p>
                  <div className="foodQuantitative">
                    <div className="foodQuantity">{food.quantity}</div>
                    <div className="foodPortion">grams</div>
                    <div className="foodWeight">{food.quantity}g</div>
                  </div>
                </div>
                <div className="foodNutrition">
                  <div>
                    {food.macronutrients.energy} <span>kcal</span>
                  </div>
                  <div>
                    {food.macronutrients.fat} <span>g</span>
                  </div>
                  <div>
                    {food.macronutrients.carbohydrate} <span>g</span>
                  </div>
                  <div>
                    {food.macronutrients.protein} <span>g</span>
                  </div>
                </div>
                <div
                  className="addFood"
                  id="iconAddFood"
                  onClick={() => addIngredient(foodIdentifier)}
                >
                  <button
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      padding: "6px",
                      cursor: "pointer",
                    }}
                  >
                    <PlusOutlined style={{ color: "#fff", fontSize: "24px" }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <nav className="paginationFood">
          <div className="pagination">
            <PrettyPagination
              current={currentPage}
              total={filteredFood.length}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

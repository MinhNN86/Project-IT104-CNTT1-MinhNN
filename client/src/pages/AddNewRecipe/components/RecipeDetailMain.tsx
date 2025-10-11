import "../../../style/AddNewRecipe.css";
import IngredientsSection from "./IngredientsSection";
import CookingMethodSection from "./CookingMethodSection";
import NutrientAnalysisSection from "./NutrientAnalysisSection";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useCustomerRedux";
import { getAllFood } from "../../../apis/food.api";

export default function RecipeDetailMain() {
  const foodData = useAppSelector((state) => state.food.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <div className="recipeDetail">
      <div className="ingredientCookingMethod">
        <IngredientsSection foodData={foodData} />
        <CookingMethodSection />
      </div>

      <div className="nutrient">
        <NutrientAnalysisSection />
      </div>
    </div>
  );
}

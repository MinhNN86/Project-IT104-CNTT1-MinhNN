import "../../../style/AddNewRecipe.css";
import IngredientsSection from "./IngredientsSection";
import CookingMethodSection from "./CookingMethodSection";
import GlobalAnalysisSection from "./GlobalAnalysisSection";
import MacronutrientsSection from "./MacronutrientsSection";
import MicronutrientsSection from "./MicronutrientsSection";

export default function RecipeDetailMain() {
  return (
    <div className="recipeDetail">
      <div className="ingredientCookingMethod">
        <IngredientsSection />
        <CookingMethodSection />
      </div>

      <div className="nutrient">
        <GlobalAnalysisSection />
        <MacronutrientsSection />
        <MicronutrientsSection />
      </div>
    </div>
  );
}

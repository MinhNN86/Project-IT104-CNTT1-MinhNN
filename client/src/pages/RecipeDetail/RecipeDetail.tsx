import "../../style/RecipeDetail.css";
import InfoLeft from "./components/InfoLeft";
import RecipeInfo from "./components/RecipeInfo";
import CreationBanner from "./components/CreationBanner";
import RecipeDetailMain from "./components/RecipeDetailMain";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomerRedux";
import { getAllRecipe } from "../../apis/recipe.api";
import { useEffect } from "react";
import type { Recipe } from "../../interface/recipe.interface";
import { getAllFood } from "../../apis/food.api";

export default function RecipeDetail() {
  const { idRecipes } = useParams();

  const recipeData = useAppSelector((state) => state.recipe.data);
  const foodData = useAppSelector((state) => state.food.data);
  const userLogin = useAppSelector((state) => state.userLogin.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecipe());
    dispatch(getAllFood());
  }, [dispatch]);

  const recipeFilter: Recipe | undefined = recipeData.find(
    (recipe) => recipe.id === idRecipes
  );

  return (
    <div
      style={{
        height: "80vh",
        overflowY: "auto",
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {recipeFilter && idRecipes && (
        <>
          <div className="containerRecipeDetail">
            <InfoLeft
              idRecipe={idRecipes}
              recipeDetail={recipeFilter}
              userLogin={userLogin}
            />
            <RecipeInfo recipeDetail={recipeFilter} />
          </div>
          <CreationBanner />
          <RecipeDetailMain recipeDetail={recipeFilter} foodData={foodData} />
        </>
      )}
    </div>
  );
}

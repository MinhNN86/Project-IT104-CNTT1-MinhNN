import "../../style/AddNewRecipe.css";
import CreationBanner from "./components/CreationBanner";
import InfoLeft from "./components/InfoLeft";
import PublishRecipe from "./components/PublishRecipe";
import RecipeDetailMain from "./components/RecipeDetailMain";
import RecipeInfo from "./components/RecipeInfo";

export default function AddNewRecipe() {
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
      <div className="containerRecipeDetail">
        <InfoLeft />
        <div className="flex flex-col gap-[25px]">
          <PublishRecipe />
          <RecipeInfo />
        </div>
      </div>
      <CreationBanner />
      <RecipeDetailMain />
    </div>
  );
}

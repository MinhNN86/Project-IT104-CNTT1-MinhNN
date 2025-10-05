import "../../style/RecipeDetail.css";
import InfoLeft from "./components/InfoLeft";
import RecipeInfo from "./components/RecipeInfo";
import CreationBanner from "./components/CreationBanner";
import RecipeDetailMain from "./components/RecipeDetailMain";

export default function RecipeDetail() {
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
        <RecipeInfo />
      </div>
      <CreationBanner />
      <RecipeDetailMain />
    </div>
  );
}

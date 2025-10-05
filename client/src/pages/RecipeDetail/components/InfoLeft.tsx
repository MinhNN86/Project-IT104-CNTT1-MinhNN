import "../../../style/RecipeDetail.css";
import { HeartFilled, HeartOutlined, TeamOutlined } from "@ant-design/icons";
import categoryIcon from "../../../assets/recipes/categoryIcon.png";

export default function InfoLeft() {
  return (
    <div className="infoLeft">
      <div className="recipeMenu">
        <div className="firstMenu">
          <div className="communityRecipes">
            <TeamOutlined style={{ color: "#f97316" }} />
            <div className="communityRecipe">Community Recipes</div>
          </div>
          <div className="recipeLike">
            <HeartOutlined />
            <div>10</div>
            <div />
          </div>
        </div>
        <div className="recipePicture">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpC7WN6oOGR7TG2mgB0xH-GIv84Hzl285APQ&s"
            alt="Recipe Picture Error"
          />
        </div>
        <div className="categoryRecipe">
          <img src={categoryIcon} alt="" width="12px" />
          <div>Vegetarian dishes</div>
        </div>
      </div>
      <div className="renderAddFavorite">
        <div className="addFavorite" data-id="">
          <HeartFilled style={{ color: "#cf1322" }} />
          <div>Add to favorite</div>
        </div>
      </div>
    </div>
  );
}

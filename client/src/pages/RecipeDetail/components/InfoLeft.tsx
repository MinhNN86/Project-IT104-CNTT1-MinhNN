import "../../../style/RecipeDetail.css";
import { HeartFilled, HeartOutlined, TeamOutlined } from "@ant-design/icons";
import categoryIcon from "../../../assets/recipes/categoryIcon.png";
import type { Recipe } from "../../../interface/recipe.interface";
import type { User } from "../../../interface/user.interface";

type PropType = {
  recipeDetail: Recipe;
  userLogin: User;
};

export default function InfoLeft({ recipeDetail, userLogin }: PropType) {
  const checkFavorite: boolean = userLogin.favorites.some(
    (recipe) => recipeDetail.id === recipe
  );

  return (
    <div className="infoLeft">
      <div className="recipeMenu">
        <div className="firstMenu">
          <div className="communityRecipes">
            <TeamOutlined style={{ color: "#f97316" }} />
            <div className="communityRecipe">Community Recipes</div>
          </div>
          <div className="recipeLike">
            {checkFavorite ? (
              <HeartFilled style={{ color: "#CC5965" }} />
            ) : (
              <HeartOutlined />
            )}
            <div>{recipeDetail.likes}</div>
            <div />
          </div>
        </div>
        <div className="recipePicture">
          <img src={recipeDetail.coverSrc} alt="Recipe Picture Error" />
        </div>
        <div className="categoryRecipe">
          <img src={categoryIcon} alt="" width="12px" />
          <div>{recipeDetail.category.map((cat) => cat.name).join(", ")}</div>
        </div>
      </div>
      {!checkFavorite && (
        <div className="renderAddFavorite">
          <div className="addFavorite">
            <HeartFilled style={{ color: "#cf1322" }} />
            <div>Add to favorite</div>
          </div>
        </div>
      )}
    </div>
  );
}

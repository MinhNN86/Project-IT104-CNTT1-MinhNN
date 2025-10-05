import "../../../style/AddNewRecipe.css";
import { EditOutlined } from "@ant-design/icons";

export default function CookingMethodSection() {
  return (
    <div className="cookingMethod recipeDetailCard">
      <div className="recipeDetailsTitle">
        <h2>Cooking method</h2>
        <p>Give instructions to prepare this recipe</p>
      </div>
      <div className="stepCook">
        <div className="stepNumber">1</div>
        <input
          type="text"
          id="inputCookingMethod"
          placeholder="Add new cooking method"
        />
        <div className="iconEdit">
          <EditOutlined style={{ color: "#1AB394" }} />
        </div>
      </div>
    </div>
  );
}

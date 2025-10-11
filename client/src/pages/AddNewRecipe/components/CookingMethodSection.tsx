import { useAppDispatch } from "../../../hooks/useCustomerRedux";
import { updateAddRecipeCookingMethods } from "../../../redux/slices/addRecipeSlice";
import "../../../style/AddNewRecipe.css";
import { EditOutlined } from "@ant-design/icons";

export default function CookingMethodSection() {
  const dispatch = useAppDispatch();

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
          onChange={(e) =>
            dispatch(updateAddRecipeCookingMethods(e.target.value))
          }
        />
        <div className="iconEdit">
          <EditOutlined style={{ color: "#1AB394" }} />
        </div>
      </div>
    </div>
  );
}

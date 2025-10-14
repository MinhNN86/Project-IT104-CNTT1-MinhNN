import { notification } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useCustomerRedux";
import "../../../style/AddNewRecipe.css";
import {
  updateAddRecipeIsLoading,
  updateAddRecipeCoverSrc,
} from "../../../redux/slices/addRecipeSlice";
import { addRecipe } from "../../../apis/recipe.api";
import { useNavigate } from "react-router-dom";

export default function PublishRecipe({
  onUploadImage,
}: {
  onUploadImage: () => Promise<string | null>;
}) {
  const dispatch = useAppDispatch();
  const addRecipeData = useAppSelector((state) => state.addRecipe.addRecipe);
  const navigate = useNavigate();

  const handlePublish = async () => {
    dispatch(updateAddRecipeIsLoading(true));
    if (
      !addRecipeData.name ||
      !addRecipeData.description ||
      !addRecipeData.totalTime ||
      !addRecipeData.preparationTime ||
      !addRecipeData.finalWeight ||
      !addRecipeData.portions
    ) {
      notification.error({
        message:
          "Please fill in all required basic information for the recipe.",
      });
      dispatch(updateAddRecipeIsLoading(false));
      return;
    }
    const imageUrl = await onUploadImage();
    let recipeDataToSend = { ...addRecipeData };
    if (imageUrl) {
      dispatch(updateAddRecipeCoverSrc(imageUrl));
      // Đợi store cập nhật coverSrc
      recipeDataToSend = { ...recipeDataToSend, coverSrc: imageUrl };
    }
    const { isLoading, ...recipeDataWithoutLoading } = recipeDataToSend;
    dispatch(addRecipe(recipeDataWithoutLoading));
    dispatch(updateAddRecipeIsLoading(false));
    navigate("/Recipes");
  };

  return (
    <>
      <div className="publicRecipe">
        <div className="pubicRecipeTitle">
          <h2>Publish recipe</h2>
          <p>
            Publish recipe on your website or share it with the Nutrium
            community
          </p>
        </div>
        <div className="btnPublish" id="pushRecipe" onClick={handlePublish}>
          Publish
        </div>
      </div>
    </>
  );
}

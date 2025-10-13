import { updateRecipe } from "../apis/recipe.api";
import { updateUser } from "../apis/user.api";
import type { User } from "../interface/user.interface";
import type { Recipe } from "../interface/recipe.interface";
import type { AppDispatch } from "../redux/store";

interface HandleFavoriteParams {
  userLogin: User;
  recipe: Recipe;
  recipeId: string;
  isRecipeFavorite: boolean;
  currentLikes: number;
  dispatch: AppDispatch;
  setIsRecipeFavorite: (value: boolean) => void;
  setCurrentLikes: (value: number) => void;
}

export const handleRecipeFavorite = async ({
  userLogin,
  recipe,
  recipeId,
  isRecipeFavorite,
  currentLikes,
  dispatch,
  setIsRecipeFavorite,
  setCurrentLikes,
}: HandleFavoriteParams) => {
  if (!userLogin.id) {
    console.log("User not logged in");
    return;
  }

  try {
    const newIsRecipeFavorite = !isRecipeFavorite;
    const newLikesCount = newIsRecipeFavorite
      ? currentLikes + 1
      : currentLikes - 1;

    // Update recipe likes count
    const updatedRecipe = {
      ...recipe,
      likes: newLikesCount,
    };

    // Update user favorites
    const updatedFavorites = newIsRecipeFavorite
      ? [...(userLogin.favorites || []), recipeId]
      : (userLogin.favorites || []).filter((favId) => favId !== recipeId);

    const updatedUser = {
      ...userLogin,
      favorites: updatedFavorites,
    };

    // Dispatch updates
    await dispatch(updateRecipe(updatedRecipe));
    await dispatch(updateUser(updatedUser));

    // Update local state
    setIsRecipeFavorite(newIsRecipeFavorite);
    setCurrentLikes(newLikesCount);
  } catch (error) {
    console.error("Error updating favorite:", error);
  }
};

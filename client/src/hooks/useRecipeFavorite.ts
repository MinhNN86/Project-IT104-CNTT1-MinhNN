import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./useCustomerRedux";
import { handleRecipeFavorite } from "../utils/recipeUtils";
import type { Recipe } from "../interface/recipe.interface";

export const useRecipeFavorite = (recipe: Recipe, recipeId: string) => {
  const userLogin = useAppSelector((state) => state.userLogin.user);
  const dispatch = useAppDispatch();

  const [isRecipeFavorite, setIsRecipeFavorite] = useState<boolean>(false);
  const [currentLikes, setCurrentLikes] = useState<number>(recipe.likes || 0);

  useEffect(() => {
    if (userLogin.favorites && userLogin.favorites.includes(recipeId)) {
      setIsRecipeFavorite(true);
    } else {
      setIsRecipeFavorite(false);
    }
  }, [userLogin.favorites, recipeId]);

  useEffect(() => {
    setCurrentLikes(recipe.likes || 0);
  }, [recipe.likes]);

  const toggleFavorite = () => {
    handleRecipeFavorite({
      userLogin,
      recipe,
      recipeId,
      isRecipeFavorite,
      currentLikes,
      dispatch,
      setIsRecipeFavorite,
      setCurrentLikes,
    });
  };

  return {
    isRecipeFavorite,
    currentLikes,
    toggleFavorite,
  };
};

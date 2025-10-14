import PrettyPagination from "../../components/PrettyPagination";
import FilterBar from "../../components/FilterBar";
import HeaderContent from "../../components/HeaderContent";
import RecipeCard from "../../components/RecipeCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useCustomerRedux";
import { getAllRecipe } from "../../apis/recipe.api";
import type { User } from "../../interface/user.interface";
import { getAllFood } from "../../apis/food.api";
import type { Recipe } from "../../interface/recipe.interface";
import type { RecipeCategory } from "../../interface/recipeCategory.interface";
import { notification } from "antd";

export default function Homepage() {
  const userLogin: User = useAuthCheck();
  const navigate = useNavigate();

  const recipeData = useAppSelector((state) => state.recipe);
  const foodData = useAppSelector((state) => state.food.data);
  const { searchValue, sortBy, category, sortType, myRecipesOnly } =
    useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecipe());
    dispatch(getAllFood());
  }, [dispatch]);

  const handleRecipeDetail = (id: string) => {
    navigate(`/Recipes/${id}`);
  };

  // Lọc recipe theo filterData
  const filteredRecipe = (() => {
    // Base filter: favorites hoặc myRecipesOnly
    let filtered = recipeData.data.filter((recipe: Recipe) => {
      if (!recipe.id) return false;

      if (myRecipesOnly) {
        return recipe.author === userLogin.username;
      } else {
        return userLogin.favorites && userLogin.favorites.includes(recipe.id);
      }
    });

    // Lọc theo searchValue
    if (searchValue) {
      filtered = filtered.filter((recipe: Recipe) =>
        recipe.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Lọc theo category
    if (category) {
      filtered = filtered.filter((recipe: Recipe) =>
        recipe.category.some((cat: RecipeCategory) => cat.name === category)
      );
    }

    // Sắp xếp theo sortBy và sortType
    if (sortBy) {
      type NutrientKey = "energy" | "fat" | "carbohydrate" | "protein";
      filtered = [...filtered].sort((a: Recipe, b: Recipe) => {
        const getNutrient = (recipe: Recipe, key: NutrientKey) => {
          let total = 0;
          recipe.ingredients.forEach((ingredientId: string) => {
            const food = foodData.find((f) => f.id === ingredientId);
            if (food) {
              total += food.macronutrients[key] || 0;
            }
          });
          return total;
        };
        return sortType === "az"
          ? getNutrient(a, sortBy as NutrientKey) -
              getNutrient(b, sortBy as NutrientKey)
          : getNutrient(b, sortBy as NutrientKey) -
              getNutrient(a, sortBy as NutrientKey);
      });
    }
    return filtered;
  })();

  // Phân trang
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: String(page) });
  };
  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  // Tính toán dữ liệu hiển thị theo trang
  const pagedRecipe = filteredRecipe.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const calculateNutrients = (ingredients: string[]) => {
    let totalEnergy = 0;
    let totalFat = 0;
    let totalCarb = 0;
    let totalProtein = 0;

    ingredients.forEach((ingredientId) => {
      const food = foodData.find((f) => f.id === ingredientId);
      if (food) {
        totalEnergy += food.macronutrients.energy || 0;
        totalFat += food.macronutrients.fat || 0;
        totalCarb += food.macronutrients.carbohydrate || 0;
        totalProtein += food.macronutrients.protein || 0;
      }
    });

    const count = ingredients.length || 1;

    return {
      base: "100g",
      energy: `${Math.round(totalEnergy / count)} kcal`,
      fat: `${Math.round(totalFat / count)} g`,
      carb: `${Math.round(totalCarb / count)} g`,
      protein: `${Math.round(totalProtein / count)} g`,
    };
  };

  // Thông báo khi người dùng chưa yêu thích recipe nào
  useEffect(() => {
    if (
      userLogin.username &&
      Array.isArray(userLogin.favorites) &&
      userLogin.favorites.length === 0
    ) {
      notification.info({
        message:
          "No favorite recipes found. Please visit the Recipes page to add your favorites.",
      });
    }
  }, [userLogin.favorites, userLogin.username]);

  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <HeaderContent />
      <FilterBar />

      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap",
          maxHeight: "55vh",
          overflowY: "auto",
          paddingRight: 16,
        }}
      >
        {pagedRecipe
          .filter((recipe: Recipe) => recipe.id)
          .map((recipe: Recipe) => (
            <RecipeCard
              recipe={recipe}
              key={recipe.id}
              id={recipe.id!}
              image={recipe.coverSrc}
              title={recipe.name}
              author={recipe.author}
              category={recipe.category
                .map((cat: RecipeCategory) => cat.name)
                .join(", ")}
              nutrients={calculateNutrients(recipe.ingredients)}
              openRecipeDetail={() => handleRecipeDetail(recipe.id!)}
            />
          ))}
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 0,
        }}
      >
        <PrettyPagination
          current={currentPage}
          total={filteredRecipe.length}
          onChange={(page) => handlePageChange(page)}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

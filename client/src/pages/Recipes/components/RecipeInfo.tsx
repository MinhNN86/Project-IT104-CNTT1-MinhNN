import { Checkbox, ConfigProvider } from "antd";
import { HeartFilled, EditOutlined } from "@ant-design/icons";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useCustomerRedux";
import { useMemo } from "react";
import { updateMyRecipesOnly } from "../../../redux/slices/filterSlice";
import type { Recipe } from "../../../interface/recipe.interface";
import type { User } from "../../../interface/user.interface";

export default function RecipeInfo() {
  const dispatch = useAppDispatch();
  const userLogin: User = useAppSelector((state) => state.userLogin.user);
  const recipesData = useAppSelector((state) => state.recipe.data);
  const myRecipesOnly = useAppSelector((state) => state.filter.myRecipesOnly);

  // Lọc recipes của user và tính tổng likes
  const { myRecipesCount, totalLikes } = useMemo(() => {
    const myRecipes = recipesData.filter(
      (recipe: Recipe) => recipe.author === userLogin.username
    );

    const totalLikes = myRecipes.reduce(
      (sum: number, recipe: Recipe) => sum + (recipe.likes || 0),
      0
    );

    return {
      myRecipesCount: myRecipes.length,
      totalLikes,
    };
  }, [recipesData, userLogin.username]);

  const handleMyRecipesFilter = (checked: boolean) => {
    dispatch(updateMyRecipesOnly(checked));
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1 shadow-sm">
        <HeartFilled style={{ color: "#cf1322" }} className="text-sm" />
        <span className="text-gray-600">Total Likes</span>
        <span className="text-gray-800 font-semibold">{totalLikes}</span>
      </div>

      <div className="inline-flex items-center gap-2">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0ea5e9",
            },
          }}
        >
          <Checkbox
            checked={myRecipesOnly}
            onChange={(e) => handleMyRecipesFilter(e.target.checked)}
          />
        </ConfigProvider>
        <EditOutlined className="!text-sky-600" />
        <span className="text-sky-600 font-medium">
          My recipes ({myRecipesCount})
        </span>
      </div>
    </div>
  );
}

// RecipeCard.tsx
import { Card, Tag, Button, Tooltip, Divider } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  TeamOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useRecipeFavorite } from "../hooks/useRecipeFavorite";
import type { Recipe } from "../interface/recipe.interface";
import { useAppSelector } from "../hooks/useCustomerRedux";

type Nutrients = {
  base: string;
  energy: string;
  fat: string;
  carb: string;
  protein: string;
};

type Props = {
  recipe: Recipe;
  id: string;
  image: string;
  title: string;
  author: string;
  category: string;
  nutrients: Nutrients;
  openRecipeDetail: () => void;
};

export default function RecipeCard({
  recipe,
  id,
  image,
  title,
  author,
  category,
  nutrients,
  openRecipeDetail,
}: Props) {
  const { isRecipeFavorite, currentLikes, toggleFavorite } = useRecipeFavorite(
    recipe,
    id
  );
  const userLogin = useAppSelector((state) => state.userLogin.user);
  const checkMyRecipe = recipe.author === userLogin.username;

  return (
    <Card
      variant="outlined"
      className="rounded-2xl shadow-sm border-2 border-gray-200/70 hover:!border-emerald-400 transition-colors cursor-pointer"
      styles={{ body: { padding: 0 } }}
      style={{ width: 580, height: 220 }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-5 relative">
          <img
            src={image}
            alt={title}
            className="h-[218px] w-full object-cover rounded-l-md"
          />
          <div className="absolute left-3 top-3 bg-white rounded-2xl shadow-sm px-4 py-2 flex items-center gap-2">
            {checkMyRecipe ? (
              <>
                <EditOutlined className="!text-sky-600" />
                <span className="text-sky-600 font-semibold">My recipes</span>
              </>
            ) : (
              <>
                <TeamOutlined style={{ color: "#f97316" }} />
                <span className="font-semibold text-orange-500">
                  Community Recipes
                </span>
              </>
            )}
          </div>
        </div>

        <div className="col-span-7">
          <div className="p-3">
            <div className="flex items-start justify-between">
              <h2
                className="text-[15px] font-semibold leading-snug text-gray-900 max-w-[85%]"
                onClick={openRecipeDetail}
              >
                {title}
              </h2>

              <Tooltip title="Like">
                <Button
                  type="default"
                  className="h-[28] w-[60] rounded-xl border-gray-200"
                  icon={
                    isRecipeFavorite ? (
                      <HeartFilled style={{ color: "#CC5965" }} />
                    ) : (
                      <HeartOutlined />
                    )
                  }
                  onClick={toggleFavorite}
                >
                  <span className="ml-1 text-gray-500">{currentLikes}</span>
                </Button>
              </Tooltip>
            </div>

            <p className="mt-1 text-gray-400 text-[13px]">{author}</p>

            <div className="mt-1">
              <Tag className="rounded-xl px-3 py-1 text-base" color="#fde6d9">
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <span className="inline-block w-3 h-3 rounded-md bg-orange-400/80"></span>
                  {category}
                </span>
              </Tag>
            </div>
          </div>

          <Divider />

          <div className="flex items-center">
            <div className="grid grid-cols-5 gap-2 text-center text-[11px]">
              <div className="text-gray-400 ">
                <div>by</div>
                <div className="font-semibold text-gray-600">
                  {nutrients.base}
                </div>
              </div>
              <div className="text-gray-400">
                <div>Energy</div>
                <div className="font-semibold text-gray-800">
                  {nutrients.energy}
                </div>
              </div>
              <div className="text-gray-400">
                <div>Fat</div>
                <div className="font-semibold text-gray-800">
                  {nutrients.fat}
                </div>
              </div>
              <div className="text-gray-400">
                <div>Carbohydrate</div>
                <div className="font-semibold text-gray-800">
                  {nutrients.carb}
                </div>
              </div>
              <div className="text-gray-400">
                <div>Protein</div>
                <div className="font-semibold text-gray-800">
                  {nutrients.protein}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// RecipeCard.tsx
import { Card, Tag, Button, Tooltip, Divider } from "antd";
import { HeartOutlined, HeartFilled, TeamOutlined } from "@ant-design/icons";
import { useAppSelector } from "../hooks/useCustomerRedux";
import { useState, useEffect } from "react";
import type { User } from "../interface/user.interface";

type Nutrients = {
  base: string;
  energy: string;
  fat: string;
  carb: string;
  protein: string;
};

type Props = {
  id: string;
  image: string;
  ribbonText?: string;
  title: string;
  author: string;
  category: string;
  likes: number;
  nutrients: Nutrients;
  openRecipeDetail: () => void;
};

export default function RecipeCard({
  id,
  image,
  ribbonText = "Community Recipes",
  title,
  author,
  category,
  likes,
  nutrients,
  openRecipeDetail,
}: Props) {
  const userLogin: User = useAppSelector((state) => state.userLogin.user);
  // Kiểm tra recipe có mình có yêu thích hay không
  const [isRecipeFavorite, setIsRecipeFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (userLogin.favorites && userLogin.favorites.includes(id)) {
      setIsRecipeFavorite(true);
    } else {
      setIsRecipeFavorite(false);
    }
  }, [userLogin.favorites, id]);

  return (
    <Card
      variant="outlined"
      className="rounded-2xl shadow-sm border-2 border-gray-200/70 hover:!border-emerald-400 transition-colors cursor-pointer"
      styles={{ body: { padding: 0 } }}
      style={{ width: 580, height: 220 }}
      onClick={openRecipeDetail}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-5 relative">
          <img
            src={image}
            alt={title}
            className="h-[218px] w-full object-cover rounded-l-md"
          />
          <div className="absolute left-3 top-3 bg-white rounded-2xl shadow-sm px-4 py-2 flex items-center gap-2">
            <TeamOutlined style={{ color: "#f97316" }} />
            <span className="font-semibold text-orange-500">{ribbonText}</span>
          </div>
        </div>

        <div className="col-span-7">
          <div className="p-3">
            <div className="flex items-start justify-between">
              <h2 className="text-[15px] font-semibold leading-snug text-gray-900 max-w-[85%]">
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
                >
                  <span className="ml-1 text-gray-500">{likes}</span>
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

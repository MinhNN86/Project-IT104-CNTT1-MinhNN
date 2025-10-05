import { useNavigate } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import HeaderContent from "../../components/HeaderContent";
import PrettyPagination from "../../components/PrettyPagination";
import RecipeCard from "../../components/RecipeCard";
import RecipeInfo from "./components/RecipeInfo";

export default function Recipes() {
  const navigate = useNavigate();

  const handleRecipeDetail = (id: number) => {
    navigate(`/Recipes/${id}`);
  };

  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <div className="flex justify-between items-center">
        <HeaderContent />
        <div className="text-2xl cursor-pointer ">+</div>
      </div>

      <FilterBar />

      <div className="mt-3">
        <RecipeInfo />
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap",
          maxHeight: "50vh",
          overflowY: "auto",
          paddingRight: 16,
        }}
      >
        <RecipeCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpC7WN6oOGR7TG2mgB0xH-GIv84Hzl285APQ&s"
          title="Turmeric Roasted Cauliflower Salad (lowfodmap)"
          author="Joana Jardim"
          category="Vegetarian dishes"
          likes={37}
          nutrients={{
            base: "100g",
            energy: "143 kcal",
            fat: "6 g",
            carb: "18 g",
            protein: "5 g",
          }}
          openRecipeDetail={() => handleRecipeDetail(1)}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 0,
        }}
      >
        <PrettyPagination
          current={1}
          total={500}
          onChange={(page) => console.log("Page:", page)}
        />
      </div>
    </div>
  );
}

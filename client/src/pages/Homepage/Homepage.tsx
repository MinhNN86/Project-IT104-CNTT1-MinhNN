import FilterBar from "../../components/FilterBar";
import HeaderContent from "../../components/HeaderContent";
import PrettyPagination from "../../components/PrettyPagination";
import RecipeCard from "../../components/RecipeCard";

export default function Homepage() {
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
        }}
      >
        {/* ...existing RecipeCard code... */}
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
        />
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
        />
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
        />
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
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 0,
        }}
      >
        <PrettyPagination />
      </div>
    </div>
  );
}

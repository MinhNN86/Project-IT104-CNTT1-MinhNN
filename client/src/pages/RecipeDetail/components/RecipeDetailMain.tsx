import type { Recipe } from "../../../interface/recipe.interface";
import "../../../style/RecipeDetail.css";
import type { Nutrients } from "../../../interface/nutrientsRecipe.interface";
import PieNutritionChart from "./PieNutritionChart";
import type { Food } from "../../../interface/food.interface";

type PropType = {
  recipeDetail: Recipe;
  foodData: Food[];
};

export default function RecipeDetailMain({ recipeDetail, foodData }: PropType) {
  // Hàm tính tổng nutrients cho recipe
  function calculateTotalNutrients() {
    const total: Nutrients = {
      macronutrients: {
        energy: 0,
        carbohydrate: 0,
        fat: 0,
        protein: 0,
      },
      micronutrients: {
        cholesterol: 0,
        fiber: 0,
        sodium: 0,
        water: 0,
        vitaminA: 0,
        vitaminB6: 0,
        vitaminB12: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminK: 0,
        starch: 0,
        lactose: 0,
        alcohol: 0,
        caffeine: 0,
        sugars: 0,
        calcium: 0,
        iron: 0,
        magnesium: 0,
        phosphorus: 0,
        potassium: 0,
        zinc: 0,
        copper: 0,
        fluoride: 0,
        manganese: 0,
        selenium: 0,
        thiamin: 0,
        riboflavin: 0,
        niacin: 0,
        pantothenicAcid: 0,
        folateTotal: 0,
        folicAcid: 0,
        fattyAcidsTrans: 0,
        fattyAcidsSaturated: 0,
        fattyAcidsMonounsaturated: 0,
        fattyAcidsPolyunsaturated: 0,
        chloride: 0,
      },
    };

    for (const foodId of recipeDetail.ingredients) {
      const food = foodData.find((f) => f.id === foodId);
      if (!food) continue;

      // Cộng dồn macronutrients
      total.macronutrients.energy += food.macronutrients.energy ?? 0;
      total.macronutrients.carbohydrate +=
        food.macronutrients.carbohydrate ?? 0;
      total.macronutrients.fat += food.macronutrients.fat ?? 0;
      total.macronutrients.protein += food.macronutrients.protein ?? 0;

      // Cộng dồn micronutrients
      total.micronutrients.cholesterol += food.micronutrients.cholesterol ?? 0;
      total.micronutrients.fiber += food.micronutrients.fiber ?? 0;
      total.micronutrients.sodium += food.micronutrients.sodium ?? 0;
      total.micronutrients.water += food.micronutrients.water ?? 0;
      total.micronutrients.vitaminA += food.micronutrients.vitaminA ?? 0;
      total.micronutrients.vitaminB6 += food.micronutrients.vitaminB6 ?? 0;
      total.micronutrients.vitaminB12 += food.micronutrients.vitaminB12 ?? 0;
      total.micronutrients.vitaminC += food.micronutrients.vitaminC ?? 0;
      total.micronutrients.vitaminD += food.micronutrients.vitaminD ?? 0;
      total.micronutrients.vitaminE += food.micronutrients.vitaminE ?? 0;
      total.micronutrients.vitaminK += food.micronutrients.vitaminK ?? 0;
      total.micronutrients.starch += food.micronutrients.starch ?? 0;
      total.micronutrients.lactose += food.micronutrients.lactose ?? 0;
      total.micronutrients.alcohol += food.micronutrients.alcohol ?? 0;
      total.micronutrients.caffeine += food.micronutrients.caffeine ?? 0;
      total.micronutrients.sugars += food.micronutrients.sugars ?? 0;
      total.micronutrients.calcium += food.micronutrients.calcium ?? 0;
      total.micronutrients.iron += food.micronutrients.iron ?? 0;
      total.micronutrients.magnesium += food.micronutrients.magnesium ?? 0;
      total.micronutrients.phosphorus += food.micronutrients.phosphorus ?? 0;
      total.micronutrients.potassium += food.micronutrients.potassium ?? 0;
      total.micronutrients.zinc += food.micronutrients.zinc ?? 0;
      total.micronutrients.copper += food.micronutrients.copper ?? 0;
      total.micronutrients.fluoride += food.micronutrients.fluoride ?? 0;
      total.micronutrients.manganese += food.micronutrients.manganese ?? 0;
      total.micronutrients.selenium += food.micronutrients.selenium ?? 0;
      total.micronutrients.thiamin += food.micronutrients.thiamin ?? 0;
      total.micronutrients.riboflavin += food.micronutrients.riboflavin ?? 0;
      total.micronutrients.niacin += food.micronutrients.niacin ?? 0;
      total.micronutrients.pantothenicAcid +=
        food.micronutrients.pantothenicAcid ?? 0;
      total.micronutrients.folateTotal += food.micronutrients.folateTotal ?? 0;
      total.micronutrients.folicAcid += food.micronutrients.folicAcid ?? 0;
      total.micronutrients.fattyAcidsTrans +=
        food.micronutrients.fattyAcidsTrans ?? 0;
      total.micronutrients.fattyAcidsSaturated +=
        food.micronutrients.fattyAcidsSaturated ?? 0;
      total.micronutrients.fattyAcidsMonounsaturated +=
        food.micronutrients.fattyAcidsMonounsaturated ?? 0;
      total.micronutrients.fattyAcidsPolyunsaturated +=
        food.micronutrients.fattyAcidsPolyunsaturated ?? 0;
      total.micronutrients.chloride += food.micronutrients.chloride ?? 0;
    }

    // Làm tròn về 1 số thập phân
    for (const key in total.macronutrients) {
      total.macronutrients[key as keyof Nutrients["macronutrients"]] =
        Math.round(
          total.macronutrients[key as keyof Nutrients["macronutrients"]] * 10
        ) / 10;
    }
    for (const key in total.micronutrients) {
      total.micronutrients[key as keyof Nutrients["micronutrients"]] =
        Math.round(
          total.micronutrients[key as keyof Nutrients["micronutrients"]] * 10
        ) / 10;
    }
    return total;
  }

  const totalNutrientRecipes: Nutrients = calculateTotalNutrients();

  return (
    <div className="recipeDetail">
      <div className="ingredientCookingMethod">
        <div className="ingredient recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Ingredients</h2>
            <p>Search and add ingredients to the recipe</p>
          </div>
          <div className="ingredientValue">
            {recipeDetail.ingredients.map((foodId) => {
              const food = foodData.find((f) => f.id === foodId);
              return food ? (
                <div key={food.id}>
                  {food.name} ({food.quantity})
                </div>
              ) : null;
            })}
          </div>
        </div>
        <div className="cookingMethod recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Cooking method</h2>
            <p>Give instructions to prepare this recipe</p>
          </div>
          <div className="stepCook">
            <div className="stepNumber">1</div>
            <div className="stepValue">{recipeDetail.cookingMethods}</div>
          </div>
        </div>
      </div>

      <div className="nutrient">
        <div className="global recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Global analysis per portion</h2>
            <p>Energy, macronutrients and fiber distribution</p>
          </div>
          <div className="energyGroup">
            <div className="energy">Energy</div>
            <div className="kcalInfo">
              <div className="kcalValue">
                {totalNutrientRecipes.macronutrients.energy}
              </div>
              <div className="kcal">kcal</div>
            </div>
          </div>

          <div className="globalCircle">
            <div className="globalItem" id="fatCircle">
              <div
                className={`circle red ${
                  totalNutrientRecipes.macronutrients.fat === 0 ? "empty" : ""
                }`}
              >
                <div className="circleValue">
                  {totalNutrientRecipes.macronutrients.fat}
                  <span>g</span>
                </div>
              </div>
              <p>Fat</p>
            </div>
            <div className="globalItem" id="carbohydrateCircle">
              <div
                className={`circle orange ${
                  totalNutrientRecipes.macronutrients.carbohydrate === 0
                    ? "empty"
                    : ""
                }`}
              >
                <div className="circleValue">
                  {totalNutrientRecipes.macronutrients.carbohydrate}
                  <span>g</span>
                </div>
              </div>
              <p>Carbohydrate</p>
            </div>
            <div className="globalItem" id="proteinCircle">
              <div
                className={`circle green ${
                  totalNutrientRecipes.macronutrients.protein === 0
                    ? "empty"
                    : ""
                }`}
              >
                <div className="circleValue">
                  {totalNutrientRecipes.macronutrients.protein}
                  <span>g</span>
                </div>
              </div>
              <p>Protein</p>
            </div>
            <div className="globalItem" id="fiberCircle">
              <div
                className={`circle blue ${
                  totalNutrientRecipes.micronutrients.fiber === 0 ? "empty" : ""
                }`}
              >
                <div className="circleValue">
                  {totalNutrientRecipes.micronutrients.fiber}
                  <span>g</span>
                </div>
              </div>
              <p>Fiber</p>
            </div>
          </div>
        </div>

        {/* Macronutrients pie chart */}
        <div className="macronutrients recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Macronutrients per portion</h2>
            <p>Macronutrients distribution of the recipe</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PieNutritionChart
              data={[
                { name: "Fat", value: totalNutrientRecipes.macronutrients.fat },
                {
                  name: "Carbohydrate",
                  value: totalNutrientRecipes.macronutrients.carbohydrate,
                },
                {
                  name: "Protein",
                  value: totalNutrientRecipes.macronutrients.protein,
                },
              ]}
            />
          </div>
        </div>

        {/* Micronutrients */}
        <div
          className="micronutrient recipeDetailCard"
          id="macronutrientsValue"
        >
          <div className="recipeDetailsTitle">
            <h2>Micronutrients per portion</h2>
            <p>Micronutrients distribution of the recipe</p>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Sodium</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.sodium} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin A</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminA} <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin B-6</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminB6} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin B-12</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminB12} <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin C</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminC} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin D (D2 + D3)</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminD} <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin E</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminE} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin K</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.vitaminK} <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Sugars</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.sugars} <span>g</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Calcium</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.calcium} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Iron</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.iron} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Magnesium</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.magnesium} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Phosphorus</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.phosphorus} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Potassium</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.potassium} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Zinc</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.zinc} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Copper</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.copper} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Fluoride</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.fluoride} <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Manganese</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.manganese} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Selenium</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.selenium} <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Thiamin</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.thiamin} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Riboflavin</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.riboflavin} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Niacin</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.niacin} <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Pantothenic acid</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.pantothenicAcid}{" "}
              <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Folate, total</span>
            <span className="nutrientValue">
              {totalNutrientRecipes.micronutrients.folateTotal} <span>ug</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

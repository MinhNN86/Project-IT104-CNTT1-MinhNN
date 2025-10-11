import { useAppSelector } from "../../../hooks/useCustomerRedux";
import type { Nutrients } from "../../../interface/nutrientsRecipe.interface";
import "../../../style/AddNewRecipe.css";

export default function GlobalAnalysisSection() {
  const addRecipeData = useAppSelector((state) => state.addRecipe.addRecipe);
  const foodData = useAppSelector((state) => state.food.data);

  // Tính tổng nutrients cho recipe
  const calculateTotalNutrients = () => {
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

    for (const foodId of addRecipeData.ingredients) {
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
  };

  const totalNutrientRecipes: Nutrients = calculateTotalNutrients();

  console.log(totalNutrientRecipes);

  return (
    <div className="global recipeDetailCard">
      <div className="recipeDetailsTitle">
        <h2>Global analysis</h2>
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
          <div className="circle red">
            <div className="circleValue">
              16<span>g</span>
            </div>
          </div>
          <p>Fat</p>
        </div>
        <div className="globalItem" id="carbohydrateCircle">
          <div className="circle orange">
            <div className="circleValue">
              45<span>g</span>
            </div>
          </div>
          <p>Carbohydrate</p>
        </div>
        <div className="globalItem" id="proteinCircle">
          <div className="circle green">
            <div className="circleValue">
              12<span>g</span>
            </div>
          </div>
          <p>Protein</p>
        </div>
        <div className="globalItem" id="fiberCircle">
          <div className="circle blue">
            <div className="circleValue">
              6<span>g</span>
            </div>
          </div>
          <p>Fiber</p>
        </div>
      </div>
    </div>
  );
}

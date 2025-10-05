import "../../../style/RecipeDetail.css";

export default function RecipeDetailMain() {
  return (
    <div className="recipeDetail">
      <div className="ingredientCookingMethod">
        <div className="ingredient recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Ingredients</h2>
            <p>Search and add ingredients to the recipe</p>
          </div>
          <div className="ingredientValue">
            <div>1 chopped cup (1/2" pieces) of cauliflower, raw (107 g)</div>
            <div>1 tsp of spices, turmeric, ground (3 g)</div>
            <div>1 tbsp of olive oil (14 g)</div>
            <div>100 grams of rice, brown, medium-grain, raw</div>
            <div>150 grams of edamame, frozen, unprepared</div>
            <div>1 cup, sections of lemons, raw, without peel (212 g)</div>
            <div>1 cup slices of cucumber, with peel, raw (104 g)</div>
            <div>4 tbsps of parsley, fresh (15 g)</div>
            <div>
              50 grams of nuts, cashew nuts, oil roasted, with salt added
            </div>
            <div>5 tbsps of vinegar, balsamic (80 g)</div>
            <div>4 tbsps of soy sauce made from soy (tamari) (72 g)</div>
            <div>1 tablespoon of oil, sesame, salad or cooking (14 g)</div>
            <div>1 tbsp of sauce, fish, ready-to-serve (18 g)</div>
            <div>2 tbsps of syrups, maple (40 g)</div>
          </div>
        </div>
        <div className="cookingMethod recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Cooking method</h2>
            <p>Give instructions to prepare this recipe</p>
          </div>
          <div className="stepCook">
            <div className="stepNumber">1</div>
            <div className="stepValue">
              STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower
              in an ovenproof dish or tin, add the turmeric, some seasoning and
              2 tbsp oil, and toss together. Roast for 20-25 minutes until
              tender. Tip onto a plate and cool. STEP 2 Meanwhile boil the rice
              in salted water until tender, adding the edamame for the last
              minute of cooking, then drain well. Leave to cool, then tip into a
              large bowl. Add the roasted cauliflower, lemon juice, cucumber and
              some seasoning, and toss together. Add the herbs and toss again.
              Add mint for extra flavor. STEP 3 Whisk together the dressing
              ingredients. Divide the cauliflower and rice between plates,
              scatter over the cashews and drizzle with the dressing.
            </div>
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
              <div className="kcalValue">351</div>
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

        {/* Macronutrients pic chart */}
        <div className="macronutrients recipeDetailCard">
          <div className="recipeDetailsTitle">
            <h2>Macronutrients per portion</h2>
            <p>Macronutrients distribution of the recipe</p>
          </div>
          <canvas
            id="myChart"
            width="290px"
            height="290px"
            className="macronutrientChart"
          />
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
              1418 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin A</span>
            <span className="nutrientValue">
              18 <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin B-6</span>
            <span className="nutrientValue">
              0 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin B-12</span>
            <span className="nutrientValue">
              0 <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin C</span>
            <span className="nutrientValue">
              50 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin D (D2 + D3)</span>
            <span className="nutrientValue">
              0 <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin E</span>
            <span className="nutrientValue">
              1 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Vitamin K</span>
            <span className="nutrientValue">
              87 <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Sugars</span>
            <span className="nutrientValue">
              13 <span>g</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Calcium</span>
            <span className="nutrientValue">
              88 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Iron</span>
            <span className="nutrientValue">
              4 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Magnesium</span>
            <span className="nutrientValue">
              127 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Phosphorus</span>
            <span className="nutrientValue">
              251 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Potassium</span>
            <span className="nutrientValue">
              649 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Zinc</span>
            <span className="nutrientValue">
              2 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Copper</span>
            <span className="nutrientValue">
              1 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Fluoride</span>
            <span className="nutrientValue">
              1 <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Manganese</span>
            <span className="nutrientValue">
              2 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Selenium</span>
            <span className="nutrientValue">
              4 <span>ug</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Thiamin</span>
            <span className="nutrientValue">
              0 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Riboflavin</span>
            <span className="nutrientValue">
              0 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Niacin</span>
            <span className="nutrientValue">
              3 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Pantothenic acid</span>
            <span className="nutrientValue">
              1 <span>mg</span>
            </span>
          </div>
          <div className="nutrientItem">
            <span className="nutrientName">Folate, total</span>
            <span className="nutrientValue">
              156 <span>ug</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

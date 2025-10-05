import "../../../style/AddNewRecipe.css";
import {
  DeleteFilled,
  SortAscendingOutlined,
  UpOutlined,
} from "@ant-design/icons";

export default function IngredientsSection() {
  return (
    <div className="ingredient recipeDetailCard">
      <div className="recipeDetailsTitle">
        <h2>Ingredients</h2>
        <p>Search and add ingredients to the recipe</p>
      </div>
      <div className="ingredientList">
        <div className="ingredientCard">
          <div className="ingredientValue">
            <div className="list">
              1 serving of babyfood, water, bottled, GERBER, without added
              fluoride (113 g)
            </div>
          </div>
          <div className="removeFood">
            <DeleteFilled style={{ color: "#676A6C" }} />
          </div>
        </div>
        <div className="ingredientCard">
          <div className="ingredientValue">
            <div className="list">
              1 serving of babyfood, tropical fruit medley (88 g)
            </div>
          </div>
          <div className="removeFood">
            <DeleteFilled style={{ color: "#676A6C" }} />
          </div>
        </div>
      </div>
      <div className="newIngredient">
        <div className="newIngredientTitle">
          <div className="img">
            <UpOutlined style={{ color: "#1AB394" }} />
          </div>
          <div>Add new ingredient</div>
        </div>
        <div className="searchIngredient">
          <input type="text" placeholder="Search food" id="searchFood" />
          <div className="sortNutrient">
            <div>
              <SortAscendingOutlined style={{ color: "#676A6C" }} />
            </div>
            <select id="inputNutrient">
              <option value="test">Test</option>
              <option value="test2">Test2</option>
            </select>
          </div>
          <input type="text" placeholder="Category" id="searchCategory" />
        </div>

        <div className="foodInfo">
          <div className="foodInfoHeader">
            <div className="text">Nutritional Information</div>
            <div className="foodNutrition">
              <div>Energy</div>
              <div>Fat</div>
              <div>Carboh…</div>
              <div>Protein</div>
              <span className="last" />
            </div>
          </div>
          <div className="foodValue">
            <div className="foodValueTitle">
              <h3>Keto 90 Second Bread</h3>
              <p>Community Recipes</p>
              <div className="foodQuantitative">
                <div className="foodQuantity">1</div>
                <div className="foodPortion">portion (87 grams)</div>
                <div className="foodWeight">87g</div>
              </div>
            </div>
            <div className="foodNutrition">
              <div>
                301 <span>kcal</span>
              </div>
              <div>
                27 <span>g</span>
              </div>
              <div>
                6 <span>g</span>
              </div>
              <div>
                11 <span>g</span>
              </div>
            </div>
            <div className="addFood" id="iconAddFood">
              <i className="fa-solid fa-plus" />
            </div>
          </div>
          <div className="foodValue">
            <div className="foodValueTitle">
              <h3>Keto - Just Eggs</h3>
              <p>Community Recipes</p>
              <div className="foodQuantitative">
                <div className="foodQuantity">1</div>
                <div className="foodPortion">portion (190 grams)</div>
                <div className="foodWeight">190g</div>
              </div>
            </div>
            <div className="foodNutrition">
              <div>
                469 <span>kcal</span>
              </div>
              <div>
                40 <span>g</span>
              </div>
              <div>
                11 <span>g</span>
              </div>
              <div>
                23 <span>g</span>
              </div>
            </div>
            <div className="addFood" />
          </div>
          <div className="foodValue">
            <div className="foodValueTitle">
              <h3>Blueberry Lavender Breeze</h3>
              <p>Community Recipes</p>
              <div className="foodQuantitative">
                <div className="foodQuantity">1</div>
                <div className="foodPortion">portion (113 grams)</div>
                <div className="foodWeight">113g</div>
              </div>
            </div>
            <div className="foodNutrition">
              <div>
                14 <span>kcal</span>
              </div>
              <div>
                0 <span>g</span>
              </div>
              <div>
                3 <span>g</span>
              </div>
              <div>
                0 <span>g</span>
              </div>
            </div>
            <div className="addFood" />
          </div>
          <div className="foodValue">
            <div className="foodValueTitle">
              <h3>Jamaican Grapefruit</h3>
              <p>Community Recipes</p>
              <div className="foodQuantitative">
                <div className="foodQuantity">1</div>
                <div className="foodPortion">portion (122 grams)</div>
                <div className="foodWeight">122g</div>
              </div>
            </div>
            <div className="foodNutrition">
              <div>
                45 <span>kcal</span>
              </div>
              <div>
                0 <span>g</span>
              </div>
              <div>
                13 <span>g</span>
              </div>
              <div>
                1 <span>g</span>
              </div>
            </div>
            <div className="addFood" />
          </div>
          <div className="foodValue">
            <div className="foodValueTitle">
              <h3>Stewed Tomatoes</h3>
              <p>Community Recipes</p>
              <div className="foodQuantitative">
                <div className="foodQuantity">100</div>
                <div className="foodPortion">grams</div>
                <div className="foodWeight">100g</div>
              </div>
            </div>
            <div className="foodNutrition">
              <div>
                8 <span>kcal</span>
              </div>
              <div>
                0 <span>g</span>
              </div>
              <div>
                2 <span>g</span>
              </div>
              <div>
                0 <span>g</span>
              </div>
            </div>
            <div className="addFood" />
          </div>
        </div>
        <nav className="paginationFood">
          <div className="pagination" id="pagination" />
        </nav>
      </div>
    </div>
  );
}

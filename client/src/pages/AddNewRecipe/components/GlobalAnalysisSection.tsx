import "../../../style/AddNewRecipe.css";

export default function GlobalAnalysisSection() {
  return (
    <div className="global recipeDetailCard">
      <div className="recipeDetailsTitle">
        <h2>Global analysis</h2>
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
  );
}

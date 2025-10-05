import "../../../style/AddNewRecipe.css";

export default function MacronutrientsSection() {
  return (
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
  );
}

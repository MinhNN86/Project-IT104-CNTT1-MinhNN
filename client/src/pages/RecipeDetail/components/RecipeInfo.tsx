import type { Recipe } from "../../../interface/recipe.interface";
import "../../../style/RecipeDetail.css";

type PropType = {
  recipeDetail: Recipe;
};

export default function RecipeInfo({ recipeDetail }: PropType) {
  return (
    <div className="recipeInfo">
      <div className="recipeTitle">
        <h2>Basic information</h2>
        <p>Check and edit's basic information</p>
      </div>
      <div className="infoCol">
        <div className="infoRow">
          <div className="infoName">Name</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={recipeDetail.name}
              id="inputName"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName description">Description</div>
          <div className="infoValue description">
            <div className="renderDescription">{recipeDetail.description}</div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Author</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={recipeDetail.author}
              id="inputAuthor"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Total time</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={recipeDetail.totalTime}
              id="inputTotalTime"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Preparation time</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={recipeDetail.preparationTime}
              id="inputPreparationTime"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Final weight</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={`${recipeDetail.finalWeight} grams`}
              id="inputFinalWeight"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Portions</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={recipeDetail.portions}
              id="inputPortions"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

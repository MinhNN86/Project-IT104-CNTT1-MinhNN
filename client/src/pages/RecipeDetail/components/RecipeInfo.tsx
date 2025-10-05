import "../../../style/RecipeDetail.css";

export default function RecipeInfo() {
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
              defaultValue="Turmeric Roasted Cauliflower Salad (lowfodmap)"
              id="inputName"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName description">Description</div>
          <div className="infoValue description">
            Our roasted cauliflower salad with turmeric is low in calories and
            packed with punchy flavor. Turmeric adds lovely color and flavor to
            this easy vegan-friendly recipe
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Author</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue="Joana Jardim"
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
              defaultValue="00:40"
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
              defaultValue="00:40"
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
              defaultValue="978.8 grams"
              id="inputFinalWeight"
              disabled
            />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Portions</div>
          <div className="infoValue">
            <input type="text" defaultValue={4} id="inputPortions" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

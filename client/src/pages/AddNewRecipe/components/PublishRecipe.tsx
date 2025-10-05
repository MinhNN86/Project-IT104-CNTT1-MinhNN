import "../../../style/AddNewRecipe.css";

export default function PublishRecipe() {
  return (
    <>
      <div className="publicRecipe">
        <div className="pubicRecipeTitle">
          <h2>Publish recipe</h2>
          <p>
            Publish recipe on your website or share it with the Nutrium
            community
          </p>
        </div>
        <div className="btnPublish" id="pushRecipe">
          Publish
        </div>
      </div>
    </>
  );
}

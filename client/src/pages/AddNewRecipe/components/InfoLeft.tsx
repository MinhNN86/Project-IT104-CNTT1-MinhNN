import "../../../style/AddNewRecipe.css";
import { EditOutlined, HeartOutlined } from "@ant-design/icons";
import newCategoryIcon from "../../../assets/recipes/newCategory.png";

export default function InfoLeft() {
  return (
    <div className="infoLeft">
      <div className="recipeMenu">
        <div className="firstMenu">
          <div className="myRecipes">
            <EditOutlined className="!text-sky-600" />
            <div>My recipes</div>
          </div>
          <div className="recipeLike">
            <HeartOutlined />
            <div>0</div>
            <div />
          </div>
        </div>

        <div className="addImgRecipe">
          <div className="inputLinkImg">
            <EditOutlined className="!text-sky-600" /> Upload image
          </div>
          <div className="imgRecipe">
            <img src="" alt="errorLink" />
          </div>
        </div>

        <div className="categoryRecipe">
          <img src={newCategoryIcon} alt="" width="12px" />
          <div>New category</div>
        </div>
      </div>
    </div>
  );
}

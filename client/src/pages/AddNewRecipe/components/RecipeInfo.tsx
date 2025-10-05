import "../../../style/AddNewRecipe.css";
import { EditOutlined } from "@ant-design/icons";

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
            <input type="text" defaultValue="" id="inputName" />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName description">Description</div>
          <div className="infoValue description">
            <input type="text" id="inputDescription" />
          </div>
          <div className="iconEdit description">
            <EditOutlined style={{ color: "#1AB394" }} />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Author</div>
          <div className="infoValue">
            <input type="text" defaultValue="" id="inputAuthor" disabled />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Total time</div>
          <div className="infoValue">
            <input type="text" defaultValue="" id="inputTotalTime" />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Preparation time</div>
          <div className="infoValue">
            <input type="text" defaultValue="" id="inputPreparationTime" />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Final weight</div>
          <div className="infoValue">
            <input type="text" defaultValue="" id="inputFinalWeight" />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Portions</div>
          <div className="infoValue">
            <input type="text" defaultValue="" id="inputPortions" />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

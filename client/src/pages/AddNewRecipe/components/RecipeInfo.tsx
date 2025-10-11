import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useCustomerRedux";
import type { User } from "../../../interface/user.interface";
import {
  updateAddRecipeAuthor,
  updateAddRecipeDescription,
  updateAddRecipeFinalWeight,
  updateAddRecipeName,
  updateAddRecipePortions,
  updateAddRecipePreparationTime,
  updateAddRecipeTotalTime,
} from "../../../redux/slices/addRecipeSlice";
import "../../../style/AddNewRecipe.css";
import { EditOutlined } from "@ant-design/icons";

type PropType = {
  userLogin: User;
};

export default function RecipeInfo({ userLogin }: PropType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateAddRecipeAuthor(userLogin.username));
  }, [dispatch, userLogin.username]);

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
              id="inputName"
              onChange={(e) => dispatch(updateAddRecipeName(e.target.value))}
            />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName description">Description</div>
          <div className="infoValue description">
            <input
              type="text"
              id="inputDescription"
              onChange={(e) =>
                dispatch(updateAddRecipeDescription(e.target.value))
              }
            />
          </div>
          <div className="iconEdit description">
            <EditOutlined style={{ color: "#1AB394" }} />
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Author</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue={userLogin.username}
              id="inputAuthor"
              disabled
            />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Total time</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue=""
              id="inputTotalTime"
              onChange={(e) =>
                dispatch(updateAddRecipeTotalTime(e.target.value))
              }
            />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Preparation time</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue=""
              id="inputPreparationTime"
              onChange={(e) =>
                dispatch(updateAddRecipePreparationTime(e.target.value))
              }
            />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Final weight</div>
          <div className="infoValue">
            <input
              type="text"
              defaultValue=""
              id="inputFinalWeight"
              onChange={(e) =>
                dispatch(updateAddRecipeFinalWeight(e.target.value))
              }
            />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
        <div className="infoRow">
          <div className="infoName">Portions</div>
          <div className="infoValue">
            <input
              type="number"
              defaultValue=""
              id="inputPortions"
              onChange={(e) =>
                dispatch(updateAddRecipePortions(e.target.value))
              }
            />
            <div className="iconEdit">
              <EditOutlined style={{ color: "#1AB394" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import "../../../style/AddNewRecipe.css";
import { EditOutlined, HeartOutlined } from "@ant-design/icons";
import newCategoryIcon from "../../../assets/recipes/newCategory.png";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useCustomerRedux";
import { getAllCategoryRecipe } from "../../../apis/categoryRecipe.api";
import { updateAddRecipeCategory } from "../../../redux/slices/addRecipeSlice";

export default function InfoLeft({
  fileName,
  onFileChange,
}: {
  fileName: string;
  onFileChange: (file: File | null) => void;
}) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const categoryRecipe = useAppSelector((state) => state.categoryRecipe.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategoryRecipe());
  }, [dispatch]);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileChange(e.target.files[0]);
    } else {
      onFileChange(null);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const found = categoryRecipe.find((c) => c.id === selectedId);
    if (found) {
      dispatch(updateAddRecipeCategory([{ id: found.id, name: found.name }]));
    } else {
      dispatch(updateAddRecipeCategory([]));
    }
  };

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

        <div className="addImgRecipe flex flex-col items-center">
          <div className="inputLinkImg">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="cursor-pointer"
              onClick={handleUploadClick}
            >
              <EditOutlined className="!text-sky-600" /> Upload image
            </button>
          </div>
          {fileName && (
            <div
              style={{
                marginTop: "8px",
                color: "#0369a1",
                fontWeight: 500,
                maxWidth: "200px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
                textAlign: "center",
              }}
              title={fileName}
            >
              {fileName}
            </div>
          )}
        </div>

        <div className="categoryRecipe">
          <img src={newCategoryIcon} alt="" width="12px" />
          <select
            style={{
              width: "100%",
              marginLeft: 8,
              padding: "2px 8px",
              borderRadius: 4,
            }}
            onChange={handleCategoryChange}
          >
            <option value="">Select category</option>
            {categoryRecipe.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

import { useAppSelector } from "../../hooks/useCustomerRedux";
import "../../style/AddNewRecipe.css";
import CreationBanner from "./components/CreationBanner";
import InfoLeft from "./components/InfoLeft";
import PublishRecipe from "./components/PublishRecipe";
import RecipeDetailMain from "./components/RecipeDetailMain";
import RecipeInfo from "./components/RecipeInfo";
import React from "react";
import axios from "axios";
import { Spin } from "antd";

export default function AddNewRecipe() {
  const userLogin = useAppSelector((state) => state.userLogin.user);
  const addRecipeData = useAppSelector((state) => state.addRecipe.addRecipe);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [fileName, setFileName] = React.useState<string>("");

  // Handler for InfoLeft to select file
  const handleFileChange = (file: File | null) => {
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      setSelectedFile(null);
      setFileName("");
    }
  };

  // Handler for PublishRecipe to upload to Cloudinary
  const handleUploadToCloudinary = async () => {
    if (!selectedFile) return null;
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "Project-IT104-CNTT1-MinhNN");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzqispdh/image/upload",
        formData
      );
      return res.data.secure_url;
    } catch {
      return null;
    }
  };

  return (
    <div
      style={{
        height: "80vh",
        overflowY: "auto",
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="containerRecipeDetail">
        <InfoLeft fileName={fileName} onFileChange={handleFileChange} />
        <div className="flex flex-col gap-[25px]">
          <PublishRecipe onUploadImage={handleUploadToCloudinary} />
          <RecipeInfo userLogin={userLogin} />
        </div>
      </div>
      <CreationBanner />
      <RecipeDetailMain />
      {addRecipeData.isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}

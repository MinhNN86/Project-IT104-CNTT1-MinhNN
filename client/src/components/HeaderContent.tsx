import { useLocation } from "react-router-dom";

export default function HeaderContent() {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <div>
      <div className="text-[20px] text-[#676A6C]">
        {path === "Foods" ? "Foods" : "Recipes"}
      </div>
      <div className="text-[12px] text-[#888888]">
        {path === "Foods"
          ? "Search, consult and add new foods to the system"
          : "Search, check and create new recipes"}
      </div>
    </div>
  );
}

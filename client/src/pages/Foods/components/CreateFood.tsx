import "../../../style/CreateFood.css";
import iconCreateFood from "../../../assets/food/IconCreateFood.png";

type PropType = {
  onClick: () => void;
};

export default function CreateFood({ onClick }: PropType) {
  return (
    <>
      <div className="createFood" onClick={onClick}>
        <img src={iconCreateFood} alt="" width="24px" height="24px" />
        <div className="textCreateFood">Create food</div>
      </div>
      <nav className="paginationFood">
        <div className="pagination" id="pagination" />
      </nav>
    </>
  );
}

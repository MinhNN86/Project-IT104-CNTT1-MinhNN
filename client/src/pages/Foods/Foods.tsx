import FilterBar from "../../components/FilterBar";
import HeaderContent from "../../components/HeaderContent";
import PrettyPagination from "../../components/PrettyPagination";
import { useAppDispatch } from "../../hooks/useCustomerRedux";
import { openModalAdd } from "../../redux/slices/foods/modalAddFood";
import { openModalEditFood } from "../../redux/slices/foods/modalEditFood";
import AddFoodModal from "./components/AddFoodModal";
import CreateFood from "./components/CreateFood";
import EditFoodModal from "./components/EditFoodModal";
import FoodRow from "./components/FoodRow";

export default function Foods() {
  const dispatch = useAppDispatch();
  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <HeaderContent />
      <FilterBar />
      <div className="mt-[16px] flex flex-col gap-[10px]">
        <FoodRow
          name="Ackee, canned, drained"
          source="McCance and Widdowson's"
          energy="100 kcal"
          fat="5 g"
          protein="10 g"
          carb="15 g"
          onClick={() => dispatch(openModalEditFood())}
        />

        <FoodRow
          name="Ackee, canned, drained"
          source="McCance and Widdowson's"
          energy="100 kcal"
          fat="5 g"
          protein="10 g"
          carb="15 g"
          onClick={() => dispatch(openModalEditFood())}
        />

        <CreateFood onClick={() => dispatch(openModalAdd())} />
      </div>

      <AddFoodModal />

      <EditFoodModal />

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 24,
            bottom: 0,
          }}
        >
          <PrettyPagination
            current={1}
            total={500}
            onChange={(page) => console.log("Page:", page)}
          />
        </div>
      </div>
    </div>
  );
}

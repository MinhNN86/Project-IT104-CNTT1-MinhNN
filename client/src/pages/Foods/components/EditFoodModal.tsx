import {
  Modal,
  Form,
  Input,
  Select,
  Typography,
  Divider,
  Button,
  Row,
  Col,
  Space,
} from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useCustomerRedux";
import type { Food } from "../../../interface/food.interface";

const { Title, Text } = Typography;

const UnitInput = ({
  placeholder,
  unit,
  value,
  onChange,
  inputWidth,
}: {
  placeholder?: string;
  unit: string;
  value?: number | null;
  onChange?: (v: number | null) => void;
  inputWidth?: number;
}) => (
  <Space.Compact>
    <Input
      className="h-10 !rounded-l-md !border-gray-200"
      style={{ width: inputWidth ? inputWidth : "calc(100% - 64px)" }}
      placeholder={placeholder}
      type="number"
      value={value ?? ""}
      onChange={(e) => {
        const val = e.target.value;
        onChange?.(val === "" ? null : Number(val));
      }}
    />
    <Input
      className="h-10 text-center !bg-gray-50 !border-gray-200 !text-gray-500 !rounded-r-md"
      style={{ width: 64 }}
      value={unit}
      disabled
    />
  </Space.Compact>
);

import { useState, useEffect } from "react";
import { closeModalEditFood } from "../../../redux/slices/foods/modalEditFood";
import { updateFood } from "../../../apis/food.api";

export default function EditFoodModal() {
  const editData = useAppSelector((state) => state.editFood);
  const userLogin = useAppSelector((state) => state.userLogin.user);
  const rawFood = (editData.editFood as Partial<Food>) || {};
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Food>({
    id: rawFood.id,
    name: rawFood.name ?? "",
    source: rawFood.source ?? "My foods",
    category: rawFood.category ?? "",
    quantity: rawFood.quantity ?? "100",
    macronutrients: {
      energy: rawFood.macronutrients?.energy ?? 0,
      carbohydrate: rawFood.macronutrients?.carbohydrate ?? 0,
      fat: rawFood.macronutrients?.fat ?? 0,
      protein: rawFood.macronutrients?.protein ?? 0,
    },
    micronutrients: {
      cholesterol: rawFood.micronutrients?.cholesterol ?? 0,
      fiber: rawFood.micronutrients?.fiber ?? 0,
      sodium: rawFood.micronutrients?.sodium ?? 0,
      water: rawFood.micronutrients?.water ?? 0,
      vitaminA: rawFood.micronutrients?.vitaminA ?? 0,
      vitaminB6: rawFood.micronutrients?.vitaminB6 ?? 0,
      vitaminB12: rawFood.micronutrients?.vitaminB12 ?? 0,
      vitaminC: rawFood.micronutrients?.vitaminC ?? 0,
      vitaminD: rawFood.micronutrients?.vitaminD ?? 0,
      vitaminE: rawFood.micronutrients?.vitaminE ?? 0,
      vitaminK: rawFood.micronutrients?.vitaminK ?? 0,
      starch: rawFood.micronutrients?.starch ?? 0,
      lactose: rawFood.micronutrients?.lactose ?? 0,
      alcohol: rawFood.micronutrients?.alcohol ?? 0,
      caffeine: rawFood.micronutrients?.caffeine ?? 0,
      sugars: rawFood.micronutrients?.sugars ?? 0,
      calcium: rawFood.micronutrients?.calcium ?? 0,
      iron: rawFood.micronutrients?.iron ?? 0,
      magnesium: rawFood.micronutrients?.magnesium ?? 0,
      phosphorus: rawFood.micronutrients?.phosphorus ?? 0,
      potassium: rawFood.micronutrients?.potassium ?? 0,
      zinc: rawFood.micronutrients?.zinc ?? 0,
      copper: rawFood.micronutrients?.copper ?? 0,
      fluoride: rawFood.micronutrients?.fluoride ?? 0,
      manganese: rawFood.micronutrients?.manganese ?? 0,
      selenium: rawFood.micronutrients?.selenium ?? 0,
      thiamin: rawFood.micronutrients?.thiamin ?? 0,
      riboflavin: rawFood.micronutrients?.riboflavin ?? 0,
      niacin: rawFood.micronutrients?.niacin ?? 0,
      pantothenicAcid: rawFood.micronutrients?.pantothenicAcid ?? 0,
      folateTotal: rawFood.micronutrients?.folateTotal ?? 0,
      folicAcid: rawFood.micronutrients?.folicAcid ?? 0,
      fattyAcidsTrans: rawFood.micronutrients?.fattyAcidsTrans ?? 0,
      fattyAcidsSaturated: rawFood.micronutrients?.fattyAcidsSaturated ?? 0,
      fattyAcidsMonounsaturated:
        rawFood.micronutrients?.fattyAcidsMonounsaturated ?? 0,
      fattyAcidsPolyunsaturated:
        rawFood.micronutrients?.fattyAcidsPolyunsaturated ?? 0,
      chloride: rawFood.micronutrients?.chloride ?? 0,
    },
  });

  // Update formData when editData.editFood or modal open changes
  useEffect(() => {
    if (editData.isModalOpen && editData.editFood) {
      const food = editData.editFood as Partial<Food>;
      setFormData({
        id: food.id,
        name: food.name ?? "",
        source: food.source ?? "My foods",
        category: food.category ?? "",
        quantity: food.quantity ?? "100",
        macronutrients: {
          energy: food.macronutrients?.energy ?? 0,
          carbohydrate: food.macronutrients?.carbohydrate ?? 0,
          fat: food.macronutrients?.fat ?? 0,
          protein: food.macronutrients?.protein ?? 0,
        },
        micronutrients: {
          cholesterol: food.micronutrients?.cholesterol ?? 0,
          fiber: food.micronutrients?.fiber ?? 0,
          sodium: food.micronutrients?.sodium ?? 0,
          water: food.micronutrients?.water ?? 0,
          vitaminA: food.micronutrients?.vitaminA ?? 0,
          vitaminB6: food.micronutrients?.vitaminB6 ?? 0,
          vitaminB12: food.micronutrients?.vitaminB12 ?? 0,
          vitaminC: food.micronutrients?.vitaminC ?? 0,
          vitaminD: food.micronutrients?.vitaminD ?? 0,
          vitaminE: food.micronutrients?.vitaminE ?? 0,
          vitaminK: food.micronutrients?.vitaminK ?? 0,
          starch: food.micronutrients?.starch ?? 0,
          lactose: food.micronutrients?.lactose ?? 0,
          alcohol: food.micronutrients?.alcohol ?? 0,
          caffeine: food.micronutrients?.caffeine ?? 0,
          sugars: food.micronutrients?.sugars ?? 0,
          calcium: food.micronutrients?.calcium ?? 0,
          iron: food.micronutrients?.iron ?? 0,
          magnesium: food.micronutrients?.magnesium ?? 0,
          phosphorus: food.micronutrients?.phosphorus ?? 0,
          potassium: food.micronutrients?.potassium ?? 0,
          zinc: food.micronutrients?.zinc ?? 0,
          copper: food.micronutrients?.copper ?? 0,
          fluoride: food.micronutrients?.fluoride ?? 0,
          manganese: food.micronutrients?.manganese ?? 0,
          selenium: food.micronutrients?.selenium ?? 0,
          thiamin: food.micronutrients?.thiamin ?? 0,
          riboflavin: food.micronutrients?.riboflavin ?? 0,
          niacin: food.micronutrients?.niacin ?? 0,
          pantothenicAcid: food.micronutrients?.pantothenicAcid ?? 0,
          folateTotal: food.micronutrients?.folateTotal ?? 0,
          folicAcid: food.micronutrients?.folicAcid ?? 0,
          fattyAcidsTrans: food.micronutrients?.fattyAcidsTrans ?? 0,
          fattyAcidsSaturated: food.micronutrients?.fattyAcidsSaturated ?? 0,
          fattyAcidsMonounsaturated:
            food.micronutrients?.fattyAcidsMonounsaturated ?? 0,
          fattyAcidsPolyunsaturated:
            food.micronutrients?.fattyAcidsPolyunsaturated ?? 0,
          chloride: food.micronutrients?.chloride ?? 0,
        },
      });
    }
  }, [editData.editFood, editData.isModalOpen]);

  const handleChange = <K extends keyof Food>(field: K, value: Food[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMacroChange = (
    field: keyof Food["macronutrients"],
    value: number | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      macronutrients: { ...prev.macronutrients, [field]: value },
    }));
  };

  const handleMicroChange = (
    field: keyof Food["micronutrients"],
    value: number | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      micronutrients: { ...prev.micronutrients, [field]: value },
    }));
  };

  const handleCloseModal = () => {
    dispatch(closeModalEditFood());
  };

  const handleSubmit = () => {
    console.log("EditFoodModal submit:", formData);
    dispatch(updateFood(formData));
    handleCloseModal();
  };

  return (
    <Modal
      open={editData.isModalOpen}
      width={960}
      footer={null}
      title={null}
      className="add-food-modal"
      style={{ top: 40 }}
      onCancel={handleCloseModal}
    >
      <div className="px-6 pt-6 pb-4">
        <div className="text-center">
          <Title level={2} className="!mb-1 !text-gray-700">
            Edit food
          </Title>
          <Text className="!text-gray-400">
            Fill in the fields below with the food information
          </Text>
        </div>

        {/* Top grid */}
        <div style={{ maxHeight: "70vh", overflowY: "auto", paddingRight: 10 }}>
          <Form layout="vertical" className="mt-6">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Name" className="!mb-3">
                  <Input
                    placeholder=""
                    className="h-10 !border-gray-200"
                    value={formData.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Source" className="!mb-3 ">
                  <Input
                    className="h-10 text-gray-500 bg-gray-50 px-3 py-1 rounded"
                    value={formData.source || "My foods"}
                    disabled
                    style={{ opacity: 0.9 }}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Category" className="!mb-3">
                  <Select
                    placeholder="Select the food group"
                    className="!h-10"
                    options={[
                      { label: "Vegetable", value: "veg" },
                      { label: "Fruit", value: "fruit" },
                      { label: "Grain", value: "grain" },
                      { label: "Meat", value: "meat" },
                      { label: "Dairy", value: "dairy" },
                    ]}
                    value={formData.category || undefined}
                    onChange={(v) => handleChange("category", v)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Quantity" className="!mb-3">
                  <Space.Compact>
                    <Input
                      className="h-10 !rounded-l-md !border-gray-200"
                      style={{ width: "calc(100% - 84px)" }}
                      value={formData.quantity || 100}
                      onChange={(e) => handleChange("quantity", e.target.value)}
                    />
                    <Input
                      className="h-10 text-center !bg-gray-50 !border-gray-200 !text-gray-500"
                      style={{ width: 84 }}
                      value="grams"
                      disabled
                    />
                  </Space.Compact>
                </Form.Item>
              </Col>
            </Row>

            {/* Banner */}
            <div className="mt-2 mb-1 border border-gray-200 rounded-md py-2 text-center">
              <span className="text-green-600 font-medium">
                Nutritional value per 100 g
              </span>
            </div>

            {/* Macronutrients */}
            <div className="text-center mt-6 mb-2 text-gray-400 text-lg">
              Macronutrients
            </div>

            <Row gutter={16} className="mb-2 pl-10">
              <Col span={12}>
                <Form.Item label="Energy" className="!mb-4">
                  <UnitInput
                    unit="kcal"
                    value={formData.macronutrients?.energy ?? null}
                    onChange={(v) => handleMacroChange("energy", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Fat" className="!mb-4">
                  <UnitInput
                    unit="g"
                    value={formData.macronutrients?.fat ?? null}
                    onChange={(v) => handleMacroChange("fat", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Carbohydrate" className="!mb-4">
                  <UnitInput
                    unit="g"
                    value={formData.macronutrients?.carbohydrate ?? null}
                    onChange={(v) => handleMacroChange("carbohydrate", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Protein" className="!mb-4">
                  <UnitInput
                    unit="g"
                    value={formData.macronutrients?.protein ?? null}
                    onChange={(v) => handleMacroChange("protein", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Divider className="!my-4" />

            {/* Micronutrients */}
            <div className="text-center mt-2 mb-4 text-gray-400 text-lg">
              Micronutrients
            </div>

            <Row gutter={16}>
              {/* Col 1 */}
              <Col span={8} className="space-y-4">
                <Form.Item label="Cholesterol">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.cholesterol ?? null}
                    onChange={(v) => handleMicroChange("cholesterol", v)}
                  />
                </Form.Item>
                <Form.Item label="Water">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.water ?? null}
                    onChange={(v) => handleMicroChange("water", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin B-12">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.vitaminB12 ?? null}
                    onChange={(v) => handleMicroChange("vitaminB12", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin E">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.vitaminE ?? null}
                    onChange={(v) => handleMicroChange("vitaminE", v)}
                  />
                </Form.Item>
                <Form.Item label="Lactose">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.lactose ?? null}
                    onChange={(v) => handleMicroChange("lactose", v)}
                  />
                </Form.Item>
                <Form.Item label="Sugars">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.sugars ?? null}
                    onChange={(v) => handleMicroChange("sugars", v)}
                  />
                </Form.Item>
                <Form.Item label="Magnesium">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.magnesium ?? null}
                    onChange={(v) => handleMicroChange("magnesium", v)}
                  />
                </Form.Item>
                <Form.Item label="Zinc">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.zinc ?? null}
                    onChange={(v) => handleMicroChange("zinc", v)}
                  />
                </Form.Item>
                <Form.Item label="Manganese">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.manganese ?? null}
                    onChange={(v) => handleMicroChange("manganese", v)}
                  />
                </Form.Item>
                <Form.Item label="Riboflavin">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.riboflavin ?? null}
                    onChange={(v) => handleMicroChange("riboflavin", v)}
                  />
                </Form.Item>
                <Form.Item label="Folate, total">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.folateTotal ?? null}
                    onChange={(v) => handleMicroChange("folateTotal", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total saturated">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.fattyAcidsSaturated ?? null}
                    onChange={(v) =>
                      handleMicroChange("fattyAcidsSaturated", v)
                    }
                  />
                </Form.Item>
                <Form.Item label="Chloride">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.chloride ?? null}
                    onChange={(v) => handleMicroChange("chloride", v)}
                  />
                </Form.Item>
              </Col>

              {/* Col 2 */}
              <Col span={8} className="space-y-4">
                <Form.Item label="Fiber">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.fiber ?? null}
                    onChange={(v) => handleMicroChange("fiber", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin A">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.vitaminA ?? null}
                    onChange={(v) => handleMicroChange("vitaminA", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin C">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.vitaminC ?? null}
                    onChange={(v) => handleMicroChange("vitaminC", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin K">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.vitaminK ?? null}
                    onChange={(v) => handleMicroChange("vitaminK", v)}
                  />
                </Form.Item>
                <Form.Item label="Alcohol">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.alcohol ?? null}
                    onChange={(v) => handleMicroChange("alcohol", v)}
                  />
                </Form.Item>
                <Form.Item label="Calcium">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.calcium ?? null}
                    onChange={(v) => handleMicroChange("calcium", v)}
                  />
                </Form.Item>
                <Form.Item label="Phosphorus">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.phosphorus ?? null}
                    onChange={(v) => handleMicroChange("phosphorus", v)}
                  />
                </Form.Item>
                <Form.Item label="Copper">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.copper ?? null}
                    onChange={(v) => handleMicroChange("copper", v)}
                  />
                </Form.Item>
                <Form.Item label="Selenium">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.selenium ?? null}
                    onChange={(v) => handleMicroChange("selenium", v)}
                  />
                </Form.Item>
                <Form.Item label="Niacin">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.niacin ?? null}
                    onChange={(v) => handleMicroChange("niacin", v)}
                  />
                </Form.Item>
                <Form.Item label="Folic acid">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.folicAcid ?? null}
                    onChange={(v) => handleMicroChange("folicAcid", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total monounsaturated">
                  <UnitInput
                    unit="g"
                    value={
                      formData.micronutrients?.fattyAcidsMonounsaturated ?? null
                    }
                    onChange={(v) =>
                      handleMicroChange("fattyAcidsMonounsaturated", v)
                    }
                  />
                </Form.Item>
              </Col>

              {/* Col 3 */}
              <Col span={8} className="space-y-4">
                <Form.Item label="Sodium">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.sodium ?? null}
                    onChange={(v) => handleMicroChange("sodium", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin B-6">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.vitaminB6 ?? null}
                    onChange={(v) => handleMicroChange("vitaminB6", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin D (D2 + D3)">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.vitaminD ?? null}
                    onChange={(v) => handleMicroChange("vitaminD", v)}
                  />
                </Form.Item>
                <Form.Item label="Starch">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.starch ?? null}
                    onChange={(v) => handleMicroChange("starch", v)}
                  />
                </Form.Item>
                <Form.Item label="Caffeine">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.caffeine ?? null}
                    onChange={(v) => handleMicroChange("caffeine", v)}
                  />
                </Form.Item>
                <Form.Item label="Iron">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.iron ?? null}
                    onChange={(v) => handleMicroChange("iron", v)}
                  />
                </Form.Item>
                <Form.Item label="Potassium">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.potassium ?? null}
                    onChange={(v) => handleMicroChange("potassium", v)}
                  />
                </Form.Item>
                <Form.Item label="Fluoride">
                  <UnitInput
                    unit="µg"
                    value={formData.micronutrients?.fluoride ?? null}
                    onChange={(v) => handleMicroChange("fluoride", v)}
                  />
                </Form.Item>
                <Form.Item label="Thiamin">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.thiamin ?? null}
                    onChange={(v) => handleMicroChange("thiamin", v)}
                  />
                </Form.Item>
                <Form.Item label="Pantothenic acid">
                  <UnitInput
                    unit="mg"
                    value={formData.micronutrients?.pantothenicAcid ?? null}
                    onChange={(v) => handleMicroChange("pantothenicAcid", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total trans">
                  <UnitInput
                    unit="g"
                    value={formData.micronutrients?.fattyAcidsTrans ?? null}
                    onChange={(v) => handleMicroChange("fattyAcidsTrans", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total polyunsaturated">
                  <UnitInput
                    unit="g"
                    value={
                      formData.micronutrients?.fattyAcidsPolyunsaturated ?? null
                    }
                    onChange={(v) =>
                      handleMicroChange("fattyAcidsPolyunsaturated", v)
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        {/* Footer buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button
            type="primary"
            className="!bg-emerald-500"
            onClick={handleSubmit}
            disabled={formData.source !== userLogin?.username}
          >
            Save and close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

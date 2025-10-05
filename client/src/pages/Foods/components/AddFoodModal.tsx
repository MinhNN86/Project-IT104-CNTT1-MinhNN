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
import { closeModalAdd } from "../../../redux/slices/foods/modalAddFood";
import type { Food } from "../../../interface/food.interface";
import { useState } from "react";

const { Title, Text } = Typography;

const UnitInput = ({
  placeholder,
  unit,
  onChange,
  inputWidth,
}: {
  placeholder?: string;
  unit: string;
  onChange?: (v: number | null) => void;
  inputWidth?: number;
}) => (
  <Space.Compact>
    <Input
      className="h-10 !rounded-l-md !border-gray-200"
      style={{ width: inputWidth ? inputWidth : "calc(100% - 64px)" }}
      placeholder={placeholder}
      type="number"
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

export default function AddFoodModal() {
  const modalAdd = useAppSelector((state) => state.addFood);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const defaultFood: Food = {
    name: "",
    source: "My foods",
    category: "",
    quantity: "100",
    macronutrients: {
      energy: 0,
      carbohydrate: 0,
      fat: 0,
      protein: 0,
    },
    micronutrients: {
      cholesterol: 0,
      fiber: 0,
      sodium: 0,
      water: 0,
      vitaminA: 0,
      vitaminB6: 0,
      vitaminB12: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminE: 0,
      vitaminK: 0,
      starch: 0,
      lactose: 0,
      alcohol: 0,
      caffeine: 0,
      sugars: 0,
      calcium: 0,
      iron: 0,
      magnesium: 0,
      phosphorus: 0,
      potassium: 0,
      zinc: 0,
      copper: 0,
      fluoride: 0,
      manganese: 0,
      selenium: 0,
      thiamin: 0,
      riboflavin: 0,
      niacin: 0,
      pantothenicAcid: 0,
      folateTotal: 0,
      folicAcid: 0,
      fattyAcidsTrans: 0,
      fattyAcidsSaturated: 0,
      fattyAcidsMonounsaturated: 0,
      fattyAcidsPolyunsaturated: 0,
      chloride: 0,
    },
  };

  const [formData, setFormData] = useState<Food>(defaultFood);

  const handleCloseModal = () => {
    setFormData(defaultFood);
    form.resetFields();
    dispatch(closeModalAdd());
  };

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

  const handleSubmit = (values: {
    name: string;
    category: string;
    quantity: string;
    source: string;
  }) => {
    console.log("Form values:", values);
    console.log("Form data:", formData);
    // Thực hiện logic lưu food ở đây

    // Đóng modal sau khi lưu thành công
    handleCloseModal();
  };

  return (
    <Modal
      open={modalAdd.isModalOpen}
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
            Add food
          </Title>
          <Text className="!text-gray-400">
            Fill in the fields below with the food information
          </Text>
        </div>

        {/* Top grid */}
        <div style={{ maxHeight: "75vh", overflowY: "auto", paddingRight: 10 }}>
          <Form
            form={form}
            layout="vertical"
            className="mt-6"
            onFinish={handleSubmit}
            initialValues={{
              name: formData.name,
              source: formData.source,
              category: formData.category,
              quantity: formData.quantity,
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  className="!mb-3"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    placeholder="Enter food name"
                    className="h-10 !border-gray-200"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="source" label="Source" className="!mb-3 ">
                  <Input
                    className="h-10 text-gray-500 bg-gray-50 px-3 py-1 rounded"
                    value={formData.source}
                    disabled
                    style={{ opacity: 0.9 }}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="category"
                  label="Category"
                  className="!mb-3"
                  rules={[{ required: true, message: "Category is required" }]}
                >
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
                    value={formData.category}
                    onChange={(v) => handleChange("category", v)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="quantity"
                  label="Quantity"
                  className="!mb-3"
                  rules={[{ required: true, message: "Quantity is required" }]}
                >
                  <Space.Compact>
                    <Input
                      className="h-10 !rounded-l-md !border-gray-200"
                      style={{ width: "calc(100% - 84px)" }}
                      value={formData.quantity}
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
                    onChange={(v) => handleMacroChange("energy", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Fat" className="!mb-4">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMacroChange("fat", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Carbohydrate" className="!mb-4">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMacroChange("carbohydrate", v)}
                    inputWidth={300}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Protein" className="!mb-4">
                  <UnitInput
                    unit="g"
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
                    onChange={(v) => handleMicroChange("cholesterol", v)}
                  />
                </Form.Item>
                <Form.Item label="Water">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("water", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin B-12">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("vitaminB12", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin E">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("vitaminE", v)}
                  />
                </Form.Item>
                <Form.Item label="Lactose">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("lactose", v)}
                  />
                </Form.Item>
                <Form.Item label="Sugars">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("sugars", v)}
                  />
                </Form.Item>
                <Form.Item label="Magnesium">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("magnesium", v)}
                  />
                </Form.Item>
                <Form.Item label="Zinc">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("zinc", v)}
                  />
                </Form.Item>
                <Form.Item label="Manganese">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("manganese", v)}
                  />
                </Form.Item>
                <Form.Item label="Riboflavin">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("riboflavin", v)}
                  />
                </Form.Item>
                <Form.Item label="Folate, total">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("folateTotal", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total saturated">
                  <UnitInput
                    unit="g"
                    onChange={(v) =>
                      handleMicroChange("fattyAcidsSaturated", v)
                    }
                  />
                </Form.Item>
                <Form.Item label="Chloride">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("chloride", v)}
                  />
                </Form.Item>
              </Col>

              {/* Col 2 */}
              <Col span={8} className="space-y-4">
                <Form.Item label="Fiber">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("fiber", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin A">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("vitaminA", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin C">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("vitaminC", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin K">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("vitaminK", v)}
                  />
                </Form.Item>
                <Form.Item label="Alcohol">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("alcohol", v)}
                  />
                </Form.Item>
                <Form.Item label="Calcium">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("calcium", v)}
                  />
                </Form.Item>
                <Form.Item label="Phosphorus">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("phosphorus", v)}
                  />
                </Form.Item>
                <Form.Item label="Copper">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("copper", v)}
                  />
                </Form.Item>
                <Form.Item label="Selenium">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("selenium", v)}
                  />
                </Form.Item>
                <Form.Item label="Niacin">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("niacin", v)}
                  />
                </Form.Item>
                <Form.Item label="Folic acid">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("folicAcid", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total monounsaturated">
                  <UnitInput
                    unit="g"
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
                    onChange={(v) => handleMicroChange("sodium", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin B-6">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("vitaminB6", v)}
                  />
                </Form.Item>
                <Form.Item label="Vitamin D (D2 + D3)">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("vitaminD", v)}
                  />
                </Form.Item>
                <Form.Item label="Starch">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("starch", v)}
                  />
                </Form.Item>
                <Form.Item label="Caffeine">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("caffeine", v)}
                  />
                </Form.Item>
                <Form.Item label="Iron">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("iron", v)}
                  />
                </Form.Item>
                <Form.Item label="Potassium">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("potassium", v)}
                  />
                </Form.Item>
                <Form.Item label="Fluoride">
                  <UnitInput
                    unit="µg"
                    onChange={(v) => handleMicroChange("fluoride", v)}
                  />
                </Form.Item>
                <Form.Item label="Thiamin">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("thiamin", v)}
                  />
                </Form.Item>
                <Form.Item label="Pantothenic acid">
                  <UnitInput
                    unit="mg"
                    onChange={(v) => handleMicroChange("pantothenicAcid", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total trans">
                  <UnitInput
                    unit="g"
                    onChange={(v) => handleMicroChange("fattyAcidsTrans", v)}
                  />
                </Form.Item>
                <Form.Item label="Fatty acids, total polyunsaturated">
                  <UnitInput
                    unit="g"
                    onChange={(v) =>
                      handleMicroChange("fattyAcidsPolyunsaturated", v)
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            {/* Footer buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button
                type="primary"
                className="!bg-emerald-500"
                htmlType="submit"
              >
                Save and close
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

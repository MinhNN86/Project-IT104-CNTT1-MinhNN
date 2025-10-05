export interface Food {
  id?: string;
  name: string;
  source: string;
  category: string;
  quantity: string;

  macronutrients: {
    energy: number | null;
    carbohydrate: number | null;
    fat: number | null;
    protein: number | null;
  };

  micronutrients: {
    cholesterol: number | null;
    fiber: number | null;
    sodium: number | null;
    water: number | null;
    vitaminA: number | null;
    vitaminB6: number | null;
    vitaminB12: number | null;
    vitaminC: number | null;
    vitaminD: number | null;
    vitaminE: number | null;
    vitaminK: number | null;
    starch: number | null;
    lactose: number | null;
    alcohol: number | null;
    caffeine: number | null;
    sugars: number | null;
    calcium: number | null;
    iron: number | null;
    magnesium: number | null;
    phosphorus: number | null;
    potassium: number | null;
    zinc: number | null;
    copper: number | null;
    fluoride: number | null;
    manganese: number | null;
    selenium: number | null;
    thiamin: number | null;
    riboflavin: number | null;
    niacin: number | null;
    pantothenicAcid: number | null;
    folateTotal: number | null;
    folicAcid: number | null;
    fattyAcidsTrans: number | null;
    fattyAcidsSaturated: number | null;
    fattyAcidsMonounsaturated: number | null;
    fattyAcidsPolyunsaturated: number | null;
    chloride: number | null;
  };
}

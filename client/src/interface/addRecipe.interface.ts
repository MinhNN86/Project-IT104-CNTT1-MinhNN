export interface AddRecipe {
  id?: string;
  coverSrc: string;
  name: string;
  description: string;
  author: string;
  totalTime: string;
  preparationTime: string;
  finalWeight: number;
  portions: string;
  likes: number;
  ingredients: string[];
  cookingMethods: string;
  category: {
    id: string;
    name: string;
  }[];
  isLoading: boolean;
}

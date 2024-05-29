export interface Ingredient {
  name: string;
  category: string;
}

export interface Recipe {
  name: string;
  cuisine: string;
  ingredientList: Ingredient[];
}
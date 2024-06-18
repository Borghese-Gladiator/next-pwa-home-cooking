export interface Ingredient {
  name: string;
  category: string;
}

export interface Recipe {
  name: string;
  cuisine: "american" | "chinese" | "indian" | "japanese" | "korean" | "mexican" | "misc";
  ingredientList: Ingredient[];
  meal: "breakfast" | "lunch" | "dinner" | "snack";
}
import RecipePage from "@/features/RecipePage";
import { baseURL } from "@/utils/constants";

function Recipes({ recipes }) {
  return <RecipePage recipes={recipes} />
}

Recipes.getInitialProps = async (ctx) => {
  // Fetch constant from file (technically could use a require and load it, but it's cleaner as a RESET call)
  const res = await fetch(`${baseURL}/api/recipes`);
  const json = await res.json();
  const recipes = json?.recipes ?? [];
  const sortedRecipes = [...recipes].sort((recipeA, recipeB) => (recipeB.createdAt - recipeA.createdAt))
  return { recipes: sortedRecipes };
};

export default Recipes;
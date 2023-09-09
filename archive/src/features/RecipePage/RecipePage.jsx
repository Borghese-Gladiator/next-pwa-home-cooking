import { useMemo, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import Content from "@/components/Content";
import RecipeList from "./RecipeList";




const RecipePage = ({ recipes }) => {
  const [orders, setOrders] = useState(recipes.filter(({ isOrdered }) => isOrdered).map(({ id }) => id));
  const sortedRecipes = useMemo(() => {

    recipes.forEach((recipe) => {
      const isOrdered = orders.find((orderId) => orderId === recipe.id);
      recipe['isOrdered'] = isOrdered;
    })
    return [...recipes]
      .sort((recipeA, recipeB) => (recipeB.createdAt - recipeA.createdAt));
  }, [orders]);
  const onSubmit = () => {
    // updates isOrdered attribute for all recipes
    patchRecipes(orders);
  }

  return (
    <Content>
      <RecipeList
        recipes={sortedRecipes}
        orders={orders}
        setOrders={setOrders}
        hideIngredients={true}
        hideComments={false}
      />
    </Content >
  )
};

export default RecipePage;
import { useEffect, useMemo, useState } from "react";

import { Box, Chip, Paper, Typography } from "@mui/material";

import Content from "@/components/Content";
import IngredientsPanel from "@/features/IngredientsPanel";
import RecipeList from "@/features/RecipePage/RecipeList";


const OrderPage = ({ recipes }) => {
  const initialOrders = recipes.filter(({ isOrdered }) => isOrdered).map(({ id }) => id);
  const [orders, setOrders] = useState(initialOrders);
  const { orderedRecipes, ingredients } = useMemo(() => {
    const orderedRecipes = recipes.filter(({ id }) => orders.includes(id))
    const ingredients = [...new Set(orderedRecipes.flatMap(({ ingredients }) => ingredients))];
    return {
      orderedRecipes,
      ingredients
    }
  }, [orders]);

  return (
    <Content>
      <Box>
        <Typography variant="h6">Ingredients</Typography>
        <IngredientsPanel ingredients={ingredients} />
      </Box>
      <br />
      <hr />
      <Box>
        <Typography variant="h6">Current Order</Typography>
        <RecipeList
          recipes={orderedRecipes}
          orders={orders}
          setOrders={setOrders}
          hideIngredients={false}
          hideComments={true}
        />
      </Box>
    </Content>
  )
}

export default OrderPage;
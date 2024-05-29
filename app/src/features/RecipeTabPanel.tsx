/*
Tab Panel to select recipes that I want to cook that week
*/

import { useMemo } from "react";

import { Box, Button, Fab, Grid, Typography, Card, CardActionArea, Checkbox } from "@mui/material";
import { capitalize } from "lodash";
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { Recipe } from "@/common/types";
import { recipes } from '@/utils/constants';
import theme from "@/utils/theme";


const generateKey = (pre: string): string => {
  return `${pre}_${new Date().getTime()}`;
}

const RecipeTabPanel = ({ handleRecipeSelect, selectedRecipeNameList, setSelectedRecipeNameList }: any) => {
  /**
   * RECIPE GROUPS - maps cuisine to 
   */
  const cuisineToRecipeListMap: Record<string, Recipe[]> = useMemo(() => {
    const groups = recipes.reduce<Record<string, Omit<Recipe, 'cuisine'>[]>>((acc, { cuisine, ...recipe }) => {
      acc[cuisine] = acc[cuisine] ?? [];
      acc[cuisine].push(recipe);
      return acc;
    }, {});
    const orderedGroups = Object.keys(groups)
      .sort((categoryA, categoryB) => {
        if (categoryA === 'misc' && categoryB !== 'misc') return 1; // 'misc' should come after all other strings
        if (categoryA !== 'misc' && categoryB === 'misc') return -1;
        return categoryA.localeCompare(categoryB);
      })
      .reduce((obj, key) => ({ ...obj, [key]: groups[key] }), {});
    return orderedGroups;
  }, [recipes]);

  return (
    <>
      <Box display='flex' mb={5}>
        <Button variant="contained" color="secondary" onClick={() => setSelectedRecipeNameList([])}>Clear</Button>
        <Box sx={{ flexGrow: 1 }} />
        <Fab size="small"><LocalDiningIcon /></Fab>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 20, md: 3 }}>
        {Object.entries(cuisineToRecipeListMap).map(([cuisine, recipeList], idx) => (
          <Grid key={generateKey(cuisine)} item xs={12} md={12} lg={6} xl={4}>
            <Typography variant="h5">
              {capitalize(cuisine)}
            </Typography>
            {recipeList.map(({ name }) => {
              const isSelected = selectedRecipeNameList.includes(name);
              return (
                <Card
                  key={generateKey(cuisine + name)}
                  sx={{
                    display: "flex",
                    mt: 1,
                    p: 1,
                    backgroundColor: isSelected ? theme.palette.action.selected : "",
                    color: isSelected ? theme.palette.text.primary : theme.palette.text.secondary,
                    border: isSelected ? 2 : 1,
                  }}
                >
                  <CardActionArea onClick={() => handleRecipeSelect(name)}>
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5">{name}</Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <Checkbox checked={isSelected} />
                    </Box>
                  </CardActionArea>
                </Card>
              );
            })}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default RecipeTabPanel;
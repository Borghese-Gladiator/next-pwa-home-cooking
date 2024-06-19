/*
Tab Panel to select recipes that I want to cook that week
*/

import { useMemo, useState } from "react";

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, Checkbox, Container, Grid, Typography } from "@mui/material";
import { capitalize, startCase, uniqueId } from "lodash";

import { Recipe } from "@/common/types";
import { recipes } from '@/utils/constants';

import useDropdown from "@/src/hooks/useDropdown";
import useRecipeNamesList from "@/src/hooks/useRecipeNamesList";
import MealFilterBtnList from "./MealFilterBtnList";
import RecipeCardList from "./RecipeCardList";
import SelectedRecipeList from "../SelectedRecipeList";


const RecipeTabPanel = () => {
  const { openDropdownObj, toggleDropdown } = useDropdown()
  const { resetRecipes, } = useRecipeNamesList();
  const [mealFilterSet, setMealFilterSet] = useState<Set<string>>(new Set());

  const resetState = () => {
    resetRecipes();
    setMealFilterSet(new Set())
  }

  const cuisineToRecipeListMap: Record<string, Recipe[]> = (() => {
    const cuisineGroups = recipes.reduce<Record<string, Omit<Recipe, 'cuisine'>[]>>((acc, { cuisine, ...recipe }) => {
      acc[cuisine] = acc[cuisine] ?? [];
      acc[cuisine].push(recipe);
      return acc;
    }, {});
    const sortedRecipesCuisineGroups = Object.keys(cuisineGroups).reduce((acc, cuisine) => {
      acc[cuisine] = cuisineGroups[cuisine].sort(({ name: nameA }, { name: nameB }) => 
        nameA.localeCompare(nameB)
      );
      return acc;
    }, {} as Record<string, Omit<Recipe, 'cuisine'>[]>);
    const orderedCuisineGroups = Object.keys(sortedRecipesCuisineGroups)
      .sort((categoryA, categoryB) => {
        if (categoryA === 'misc' && categoryB !== 'misc') return 1; // 'misc' should come after all other strings
        if (categoryA !== 'misc' && categoryB === 'misc') return -1;
        return categoryA.localeCompare(categoryB);
      })
      .reduce((obj, key) => ({ ...obj, [key]: cuisineGroups[key] }), {});
    return orderedCuisineGroups;
  })();

  return (
    <Container maxWidth="md">
      <Box sx={{
        display: 'flex',
        marginBottom: 5,
      }}>
        <Button variant="outlined" color="secondary" onClick={resetState}>Clear</Button>
        <Box sx={{ flexGrow: 1 }} />
        <MealFilterBtnList mealFilterSet={mealFilterSet} setMealFilterSet={setMealFilterSet} />
      </Box>
      <SelectedRecipeList />
      {Object.entries(cuisineToRecipeListMap)
        .map(([cuisine, totalRecipeList], idx) => (
          <Accordion key={uniqueId()} sx={{ fontSize: '1.5rem' }} expanded={openDropdownObj[cuisine]} onChange={() => toggleDropdown(cuisine)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {capitalize(cuisine)}
            </AccordionSummary>
            <AccordionDetails>
              <RecipeCardList
                totalRecipeList={totalRecipeList}
                mealFilterSet={mealFilterSet}
              />
            </AccordionDetails>
          </Accordion>
        ))}
    </Container>
  )
}

export default RecipeTabPanel;

/*

const generateKey = (pre: string): string => {
  // return `${pre}_${new Date().getTime()}`;
}

06/18/2024 - archive grid approach in favor of accordion approach
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
                <Typography variant="h5">{startCase(name)}</Typography>
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
*/
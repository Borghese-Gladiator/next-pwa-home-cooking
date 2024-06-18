/*
Tab Panel to select recipes that I want to cook that week
*/

import { useMemo, useState } from "react";

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, Checkbox, Container, Grid, Typography } from "@mui/material";
import { capitalize, startCase, uniqueId } from "lodash";

import { Recipe } from "@/common/types";
import { recipes } from '@/utils/constants';
import theme from "@/utils/theme";



const RecipeCardList = ({
  cuisine,
  recipeList,
  selectedRecipeNameList,
  handleRecipeSelect,
  mealFilterSet,
}: any) => {
  const filteredRecipeList = recipeList
    .filter(({ meal }: { meal: string }) => mealFilterSet.size === 0 || mealFilterSet.has(meal))
  
    return (
    <>
      {filteredRecipeList.map(({ name }: { name: string }) => {
        const isSelected = selectedRecipeNameList.includes(name);

        return (
          <Card
            key={uniqueId()}
            sx={{
              display: 'flex',
              mt: 1,
              p: 1,
              backgroundColor: isSelected ? theme.palette.action.selected : '',
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
    </>
  );
}

const MealFilterBtnList = ({ mealFilterSet, setMealFilterSet }: any) => {
  const toggleMealType = (meal: "breakfast" | "lunch" | "dinner" | "snack") => {
    setMealFilterSet((prevMealFilterSet: Set<string>) => {
      const updatedMealTypes = new Set(prevMealFilterSet);
      if (updatedMealTypes.has(meal)) {
        updatedMealTypes.delete(meal);
      } else {
        updatedMealTypes.add(meal);
      }
      return updatedMealTypes;
    });
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Button
        size="small"
        onClick={() => toggleMealType("breakfast")}
        variant={mealFilterSet.has("breakfast") ? "contained" : "text"}
      >
        Breakfast
      </Button>
      <Button
        size="small"
        variant={mealFilterSet.has("lunch") ? "contained" : "text"}
        onClick={() => toggleMealType("lunch")}
      >
        Lunch
      </Button>
      <Button
        size="small"
        variant={mealFilterSet.has("dinner") ? "contained" : "text"}
        onClick={() => toggleMealType("dinner")}
      >
        Dinner
      </Button>
      <Button
        size="small"
        variant={mealFilterSet.has("snack") ? "contained" : "text"}
        onClick={() => toggleMealType("snack")}
      >
        Snack
      </Button>
    </Box>
  )
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
  }, []);

  /**
   * RECIPE Filter
   */
  const [mealFilterSet, setMealFilterSet] = useState<Set<string>>(new Set());

  const resetState = () => {
    setSelectedRecipeNameList([])
    setMealFilterSet(new Set())
  }

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
      {Object.entries(cuisineToRecipeListMap)
        .map(([cuisine, recipeList], idx) => (
          <Accordion key={uniqueId()} sx={{ fontSize: '1.5rem' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {capitalize(cuisine)}
            </AccordionSummary>
            <AccordionDetails>
              <RecipeCardList
                cuisine={cuisine}
                recipeList={recipeList}
                selectedRecipeNameList={selectedRecipeNameList}
                handleRecipeSelect={handleRecipeSelect}
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
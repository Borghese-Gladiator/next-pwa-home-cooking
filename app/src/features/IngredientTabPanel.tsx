/*
Tab Panel to show ingredients list based on selected recipes
*/
import { useEffect, useMemo, useState } from "react";

import { Box, Button, Card, CardActionArea, Checkbox, Grid, Typography } from "@mui/material";
import { startCase, toLower } from "lodash";
import { toast } from 'react-toastify';

import { recipes } from '@/utils/constants';
import theme from "@/utils/theme";
import { Ingredient } from "../common/types";


const generateKey = (pre: string): string => {
  return `${pre}_${new Date().getTime()}`;
}

const IngredientTabPanel = ({ selectedRecipeNameList }: any) => {
  console.log("selectedRecipeNameList", selectedRecipeNameList);

  const categoryToIngListForSelected: Record<string, string[]> = useMemo(() => {
    const allSelectedIngList = selectedRecipeNameList.flatMap((currName: string) =>
      recipes.find(({ name }) => name === currName)?.ingredientList || []
    );
    console.log("allSelectedIngList", allSelectedIngList);

    // groups selected ingredients by category
    const categoryToIngNamesMap: Record<string, string[]> = allSelectedIngList.reduce((acc: Record<string, string[]>, { category, name }: Ingredient) => {
      acc[category] = acc[category] ?? [];
      if (!acc[category].includes(name)) {
        acc[category].push(name);
      }
      return acc;
    }, {});

    // build ingredient string for every category
    const userFacingCategoryToIngredientStrMap = Object.entries(categoryToIngNamesMap).reduce<Record<string, any[]>>((acc, [category, ingredients]) => {
      // Count occurrences of each ingredient
      const countsMap = ingredients.reduce<Record<string, number>>((counts, name) => {
        counts[name] = (counts[name] || 0) + 1;
        return counts;
      }, {});

      // Create strings
      acc[category] = Object.entries(countsMap).map(([name, count]) => (count > 1 ? `${name} (x${count})` : name));

      // Sort the ingredients by name
      acc[category].sort((nameA, nameB) => nameA.localeCompare(nameB));
      return acc;
    }, {});

    // sort categories in object to render alphabetically
    const orderedUserFacingCategoryToIngredientStrMap = Object.keys(userFacingCategoryToIngredientStrMap)
      .sort((categoryA, categoryB) => categoryA.localeCompare(categoryB))
      .reduce((obj, key) => ({ ...obj, [key]: userFacingCategoryToIngredientStrMap[key] }), {});
    return orderedUserFacingCategoryToIngredientStrMap;
  }, [selectedRecipeNameList]);
  console.log("selectedIngListGroupedByCategory", categoryToIngListForSelected);

  /**
   * SELECTED INGREDIENTS - mark as strikethrough on IngredientsTab
   */
  const [selectedIngredientNameList, setSelectedIngredientNameList] = useState<string[]>([]);
  const handleIngredientSelect = (name: string) => {
    if (selectedIngredientNameList.includes(name)) {
      // delete from selected
      setSelectedIngredientNameList(selectedIngredientNameList.filter((curr) => curr !== name));
    } else {
      // add to selected
      setSelectedIngredientNameList([...selectedIngredientNameList, name])
    }
  }
  useEffect(() => {
    // reset selected ingredients if user changes selected recipes
    setSelectedIngredientNameList([]);
  }, [selectedRecipeNameList])

  //=============================
  //    UTILS
  //=============================
  const saveIngredientsToClipboard = () => {
    const getToday = (): string => {
      const today = new Date();
      let mm: number | string = today.getMonth() + 1; // Months start at 0!
      let dd: number | string = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      return `${mm}/${dd}`;
    }
    const shoppingListText = `${getToday()} SHOPPING LIST\n` + Object.entries(categoryToIngListForSelected).reduce((acc, [category, ingredients]) => {
      const categoryText = `${startCase(toLower(category))}\n`;
      const ingredientsText = ingredients.reduce((acc, ingredient) => {
        if (!(ingredient in selectedIngredientNameList)) {
          acc += `- ${ingredient}\n`;
        }
        return acc;
      }, "");
      acc += categoryText + ingredientsText + "\n"
      return acc;
    }, "");
    const recipeListText = "\nRECIPES\n" + selectedRecipeNameList.reduce((acc: string, name: string) => `${acc}- ${name}\n`, "");
    const textToCopy = shoppingListText + recipeListText;
    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied recipes to clipboard!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <>
      <Box display='flex' mb={5}>
        <Button variant="contained" color="secondary" onClick={() => setSelectedIngredientNameList([])}>Clear</Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="primary" onClick={saveIngredientsToClipboard}>Copy</Button>
      </Box>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 20, md: 3 }}>
        {Object.entries(categoryToIngListForSelected).map(([category, ingredients], idx) => (
          <Grid key={category} item xs={12} md={12} lg={6} xl={4}>
            <Typography variant="h5">
              {startCase(toLower(category))}
            </Typography>
            {ingredients.map((name) => {
              console.log('name', name)
              const isSelected = selectedIngredientNameList.includes(name);
              return (
                <Card
                  key={generateKey(name)}
                  sx={{
                    display: "flex",
                    mt: 1,
                    p: 1,
                    textDecoration: isSelected ? 'line-through' : 'none',
                    backgroundColor: isSelected ? theme.palette.action.selected : "",
                    color: isSelected ? theme.palette.text.primary : theme.palette.text.secondary,
                    border: isSelected ? 2 : 1,
                  }}
                >
                  <CardActionArea onClick={() => handleIngredientSelect(name)}>
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5">{name}</Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <Checkbox checked={isSelected} />
                    </Box>
                  </CardActionArea>
                </Card>
              )
            })}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default IngredientTabPanel;
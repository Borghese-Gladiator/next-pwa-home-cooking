import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';

import { Box, Button, Card, CardActionArea, Checkbox, Chip, Fab, Grid, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { capitalize, isEmpty, startCase, toLower } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';

import Navbar from '@/components/Navbar';
import { recipes } from '@/utils/constants';

import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Ingredient, Recipe } from '../common/types';

const generateKey = (pre: string): string => {
  return `${pre}_${new Date().getTime()}`;
}

interface CustomTabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
  other?: any;
}

const CustomTabPanel = ({ children, value, index, other }: CustomTabPanelProps): JSX.Element => {
  if (value !== index) {
    return <></>;
  }

  return (
    <Box
      sx={{
        display: 'block',
        padding: 2,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}


export default function Home() {
  const theme = useTheme();

  /**
   * TAB STATE
   */
  const [tabValue, setTabValue] = useState<number>(0);
  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => setTabValue(newValue);

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

  /**
   * SELECTED RECIPES - select recipes in RecipesTab to show in IngredientsTab
   */
  const [selectedRecipeNameList, setSelectedRecipeNameList] = useState<string[]>([]);
  const categoryToIngredientListGroup: Record<string, any[]> = useMemo(() => {
    const allIngredients = selectedRecipeNameList.flatMap(curr =>
      recipes.find(({ name }) => name === curr)?.ingredientList || []
    );
    const categoryGroups = allIngredients.reduce<Record<string, string[]>>((acc, { category, name }) => {
      acc[category] = acc[category] ?? [];
      if (!acc[category].includes(name)) {
        // unique list of ingredients in each category
        acc[category].push(name);
      }
      return acc;
    }, {});
    const categoryToIngredientNamesMap = Object.entries(categoryGroups).reduce<Record<string, any[]>>((acc, [category, ingredients]) => {
      // Count occurrences of each ingredient
      const countsMap = ingredients.reduce<Record<string, number>>((counts, name) => {
        counts[name] = (counts[name] || 0) + 1;
        return counts;
      }, {});

      // Create ingredient objects with unique IDs
      acc[category] = Object.entries(countsMap).map(([name, count]) => (count > 1 ? `${name} (x${count})` : name));

      // Sort the ingredients by name
      acc[category].sort((nameA, nameB) => nameA.localeCompare(nameB));
      return acc;
    }, {});
    const orderedCategoryToIngredientNamesMap = Object.keys(categoryToIngredientNamesMap)
      .sort((categoryA, categoryB) => categoryA.localeCompare(categoryB))
      .reduce((obj, key) => ({ ...obj, [key]: categoryToIngredientNamesMap[key] }), {});
    return orderedCategoryToIngredientNamesMap;
  }, [selectedRecipeNameList]);
  const handleRecipeSelect = (name: string) => {
    if (selectedRecipeNameList.includes(name)) {
      // delete from selected
      setSelectedRecipeNameList(selectedRecipeNameList.filter((curr) => curr !== name));
    } else {
      // add to selected
      setSelectedRecipeNameList([...selectedRecipeNameList, name]);
    }
  }

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

  /**
   * SAVE INGREDIENTS
   */
  const saveIngredientsToClipboard = () => {
    const getToday = (): string => {
      const today = new Date();
      let mm: number | string = today.getMonth() + 1; // Months start at 0!
      let dd: number | string = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      return `${mm}/${dd}`;
    }
    const shoppingListText = `${getToday()} SHOPPING LIST\n` + Object.entries(categoryToIngredientListGroup).reduce((acc, [category, ingredients]) => {
      const categoryText = `${startCase(toLower(category))}\n`;
      const ingredientsText = ingredients.reduce((acc, ingredient) => {
        acc += `- ${ingredient.name}\n`;
        return acc;
      }, "");
      acc += categoryText + ingredientsText + "\n"
      return acc;
    }, "");
    const recipeListText = "\nRECIPES\n" + selectedRecipeNameList.reduce((acc, name) => `${acc}- ${name}\n`, "");
    const textToCopy = shoppingListText + recipeListText;
    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied recipes to clipboard!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <>
      <Head>
        <title>Home Cooking PWA</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ flexGrow: 1 }} />
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Recipes" />
            <Tab label="Ingredients" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
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
                  )
                })}
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={1}>
          <Box display='flex' mb={5}>
            <Button variant="contained" color="secondary" onClick={() => setSelectedIngredientNameList([])}>Clear</Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained" color="primary" onClick={saveIngredientsToClipboard}>Save</Button>
          </Box>

          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 20, md: 3 }}>
            {Object.entries(categoryToIngredientListGroup).map(([category, ingredients], idx) => (
              <Grid key={category} item xs={12} md={12} lg={6} xl={4}>
                <Typography variant="h5">
                  {startCase(toLower(category))}
                </Typography>
                {ingredients.map(({ name }) => {
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
                        <Box display="flex" justifyContent="space-between">
                          <Box display="flex" flexDirection="column" alignItems="flex-start">
                            <Typography>{name}</Typography>
                          </Box>
                          <Checkbox checked={isSelected} />
                        </Box>
                      </CardActionArea>
                    </Card>
                  )
                })}
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>

        <ToastContainer />
      </main>
    </>
  );
}

import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Box, Button, Card, CardActionArea, Checkbox, Chip, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material'
import { capitalize, isEmpty } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import Navbar from '@/components/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { recipes } from '@/utils/constants';


const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
}

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box sx={{
      display: value !== index ? 'none' : 'block',
      padding: 2,
    }}>
      {children}
    </Box>
  )
}

export default function Home() {
  const theme = useTheme();

  /**
   * TAB STATE
   */
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (_, newValue) => setTabValue(newValue);

  /**
   * RECIPE GROUPS - maps cuisine to 
   */
  const cuisineToRecipeListMap = useMemo(() => {
    const groups = recipes.reduce((acc, { cuisine, ...recipe }) => {
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
  const [selectedRecipeNameList, setSelectedRecipeNameList] = useState([]);
  const categoryToIngredientListGroup = useMemo(() => {
    const allIngredients = selectedRecipeNameList.flatMap(curr => 
      recipes.find(({ name }) => name === curr).ingredientList
    );
    const categoryGroups = allIngredients.reduce((acc, { category, name }) => {
      acc[category] = acc[category] ?? [];
      if (!acc[category].includes(name)) {
        // unique list of ingredients in each category
        acc[category].push(name);
      }
      return acc;
    }, {});
    const categoryToIngredientObjMap = Object.entries(categoryGroups).reduce((acc, [category, ingredients]) => {
      // Count occurrences of each ingredient
      const countsMap = ingredients.reduce((counts, name) => {
        counts[name] = (counts[name] || 0) + 1;
        return counts;
      }, {});
    
      // Create ingredient objects with unique IDs
      acc[category] = Object.entries(countsMap).map(([name, count]) => ({
        id: uuidv4(),
        name: count > 1 ? `${name} (x${count})` : name,
      }));
    
      // Sort the ingredients by name
      acc[category].sort((a, b) => a.name.localeCompare(b.name));
      return acc;
    }, {});
    const orderedCategoryToIngredientObjMap = Object.keys(categoryToIngredientObjMap)
      .sort((categoryA, categoryB) => categoryA.localeCompare(categoryB))
      .reduce((obj, key) => ({ ...obj, [key]: categoryToIngredientObjMap[key] }), {});
    return orderedCategoryToIngredientObjMap;
  }, [selectedRecipeNameList]);
  const ingredientIdToNameMap = useMemo(() => (
    Object.entries(categoryToIngredientListGroup).reduce((acc, [_, group]) => {
      acc[group.id] = acc[group.name];
      return acc;
    }, {})
  ), [categoryToIngredientListGroup]);
  const handleRecipeSelect = (name) => {
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
  const [selectedIngredientIdList, setSelectedIngredientIdList] = useState([]);
  const handleIngredientSelect = (id) => {
    if (selectedIngredientIdList.includes(id)) {
      // delete from selected
      setSelectedIngredientIdList(selectedIngredientIdList.filter((curr) => curr !== id));
    } else {
      // add to selected
      setSelectedIngredientIdList([...selectedIngredientIdList, id])
    }
  }
  useEffect(() => {
    // reset selected ingredients if user changes selected recipes
    setSelectedIngredientIdList([]);
  }, [selectedRecipeNameList])


  /**
   * SAVE INGREDIENTS
   */
  const saveIngredientsToClipboard = () => {
    const shoppingListText = "SHOPPING LIST\n" + Object.entries(categoryToIngredientListGroup).reduce((acc, [category, ingredients]) => {
      const categoryText = `- ${category}\n`;
      const ingredientsText = ingredients.reduce((acc, ingredient) => {
        acc += `\t- ${ingredient.name}\n`;
        return acc;
      }, "");
      acc += categoryText + ingredientsText
      return acc;
    }, "");
    const recipeListText = "\n\nRECIPES\n" + selectedRecipeNameList.reduce((acc, name) => `${acc}- ${name}\n`, "");
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Recipes" />
            <Tab label="Ingredients" />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <Button variant="contained" color="secondary" onClick={() => setSelectedRecipeNameList([])}>Clear</Button>
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
                      key={name}
                      sx={{
                        display: "flex",
                        mt: 1,
                        p: 1,
                        backgroundColor: isSelected ? theme.palette.action.selected : "",
                        color: isSelected ? theme.palette.text.primary : theme.palette.text.secondary,
                        border: isSelected ? 3 : 0,
                        borderColor: theme.palette.common.white,
                        // borderColor: isSelected ? "" : "",
                        // backgroundColor: isSelected ? "primary.main" : "",
                        // color: isSelected ? theme.palette.getContrastText(theme.palette.primary.main) : "",
                      }}>
                      <CardActionArea onClick={() => handleRecipeSelect(name)}>
                        <Typography variant="h5">{name}</Typography>
                      </CardActionArea>
                    </Card>
                  );
                })}
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <Button variant="contained" color="secondary" onClick={saveIngredientsToClipboard}>Copy</Button>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
              margin: 0.5
            },
          }}>
            {selectedRecipeNameList.map((name, index) => (
              <Chip
                key={generateKey(name)}
                label={name}
              />
            ))}
          </Box>
          {isEmpty(categoryToIngredientListGroup) && (
            <Typography>
              Select recipes to see ingredients
            </Typography>
          )}
          {Object.entries(categoryToIngredientListGroup).map(([category, ingredients]) => (
            <Box key={generateKey(category)}>
              <Typography
                variant="h5"
                sx={{
                  textDecoration:
                    ingredients.every((name) => selectedIngredientIdList.includes(ingredientIdToNameMap[name]))
                      ? 'line-through' : 'none',
                }}
              >
                {category}
              </Typography>
              {ingredients.map(({ id, name }, idx) => {
                const isChecked = selectedIngredientIdList.includes(id);
                return (
                  <Box key={generateKey(name)} sx={{ display: 'flex', ml: 2 }}>
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => handleIngredientSelect(id)}
                    />
                    <Typography variant="h5" sx={{
                      textDecoration: isChecked ? 'line-through' : 'none',
                      color: isChecked ? '#888888' : null,
                    }}>{name}</Typography>
                  </Box>
                );
              })}
            </Box>
          ))}
        </CustomTabPanel>
      </main>
      <ToastContainer theme="dark" />
    </>
  )
}

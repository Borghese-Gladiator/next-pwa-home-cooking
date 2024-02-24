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
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  /**
   * RECIPE GROUPS - show recipes in RecipesTab
   */
  const recipeGroups = useMemo(() => {
    const groups = recipes.reduce((acc, { cuisine, ...recipe }) => {
      if (!(cuisine in acc)) {
        acc[cuisine] = [];
      }
      acc[cuisine].push(recipe);
      return acc;
    }, {});
    const orderedGroups = Object.keys(groups)
      .sort((categoryA, categoryB) => {
        if (categoryA === 'misc' && categoryB !== 'misc') {
          return 1; // 'misc' should come after all other strings
        } else if (categoryA !== 'misc' && categoryB === 'misc') {
          return -1; // 'misc' should come after all other strings
        } else {
          return categoryA.localeCompare(categoryB);
        }
      })
      .reduce(
        (obj, key) => {
          obj[key] = groups[key];
          return obj;
        },
        {}
      );
    return orderedGroups;
  }, [recipes]);

  /**
   * SELECTED RECIPES - select recipes in RecipesTab to show in IngredientsTab
   */
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const {
    ingredientGroups,
    ingredientsIdMap
  } = useMemo(() => {
    const ingredientsIdMap = {};
    const allIngredients = selectedRecipes.reduce((acc, curr) => {
      const recipe = recipes.find(({ name }) => name === curr);
      return acc.concat(recipe.ingredientList)
    }, []);
    const categoryGroups = allIngredients.reduce((acc, { category, name }) => {
      if (!(category in acc)) {
        acc[category] = [];
      }
      // unique list of ingredients in each category
      if (!(name in acc[category])) {
        acc[category].push(name)
      }
      return acc;
    }, {});
    const ingredientGroups = Object.entries(categoryGroups).reduce((acc, [category, ingredients]) => {
      const countsMap = ingredients.reduce((acc, name) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc;
      }, {});
      acc[category] = Object.entries(countsMap).map(([name, count]) => {
        const text = count > 1 ? `${name} (x${count})` : name;
        const id = uuidv4();
        ingredientsIdMap[name] = id;
        return { name: text, id, };
      })
      acc[category].sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB));
      return acc;
    }, categoryGroups);
    const orderedIngredientGroups = Object.keys(ingredientGroups)
      .sort((categoryA, categoryB) => categoryA.localeCompare(categoryB))
      .reduce(
        (obj, key) => {
          obj[key] = ingredientGroups[key];
          return obj;
        },
        {}
      );
    return {
      ingredientsIdMap,
      ingredientGroups: orderedIngredientGroups,
    }
  }, [selectedRecipes]);
  const handleRecipeSelect = (name) => {
    if (selectedRecipes.includes(name)) {
      // delete from selected
      setSelectedRecipes(selectedRecipes.filter((curr) => curr !== name));
    } else {
      // add to selected
      setSelectedRecipes([...selectedRecipes, name]);
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
  }, [selectedRecipes])


  /**
   * SAVE INGREDIENTS
   */
  const saveIngredientsToClipboard = () => {
    const shoppingListText = "SHOPPING LIST\n" + Object.entries(ingredientGroups).reduce((acc, [category, ingredients]) => {
      const categoryText = `- ${category}\n`;
      const ingredientsText = ingredients.reduce((acc, ingredient) => {
        acc += `\t- ${ingredient.name}\n`;
        return acc;
      }, "");
      acc += categoryText + ingredientsText
      return acc;
    }, "");
    const recipeListText = "\n\nRECIPES\n" + selectedRecipes.reduce((acc, name) => `${acc}- ${name}\n`, "");
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
          <Button variant="contained" color="secondary" onClick={() => setSelectedRecipes([])}>Clear</Button>
          <Stack spacing={1} p={2}>
            {Object.entries(recipeGroups).map(([cuisine, recipeList], idx) => (
              <Box key={generateKey(cuisine)}>
                <Typography variant="h5">
                  {capitalize(cuisine)}
                </Typography>
                {recipeList.map(({ name }) => {
                  const isSelected = selectedRecipes.includes(name);
                  return (
                    <Card
                      key={name}
                      sx={{
                        display: "flex",
                        mt: 1,
                        ml: 3,
                        p: 1,
                        border: isSelected ? 3 : 0,
                        // borderColor: isSelected ? "" : "",
                        backgroundColor: isSelected ? "primary.main" : "",
                        color: isSelected ? theme.palette.getContrastText(theme.palette.primary.main) : "",
                      }}>
                      <CardActionArea onClick={() => handleRecipeSelect(name)}>
                        <Typography variant="h5">{name}</Typography>
                      </CardActionArea>
                    </Card>
                  );
                })}
              </Box>

            ))}
          </Stack>
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
            {selectedRecipes.map((name, index) => (
              <Chip
                key={generateKey(name)}
                label={name}
              />
            ))}
          </Box>
          {isEmpty(ingredientGroups) && (
            <Typography>
              Select recipes to see ingredients
            </Typography>
          )}
          {Object.entries(ingredientGroups).map(([category, ingredients]) => (
            <Box key={generateKey(category)}>
              <Typography
                variant="h5"
                sx={{
                  textDecoration:
                    ingredients.every((name) => selectedIngredientIdList.includes(ingredientsIdMap[name]))
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
      <ToastContainer />
    </>
  )
}

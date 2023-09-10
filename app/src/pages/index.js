import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { Box, Card, CardActionArea, Checkbox, Chip, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from 'lodash';

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
  /**
   * TAB STATE
   */
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  /**
   * SELECTED RECIPES
   */
  const recipeNameList = recipes.map(({ name }) => name);
  recipeNameList.sort((nameA, nameB) => nameA.localeCompare(nameB));
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const {
    ingredientsGroup,
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
    const categoryGroupsCounted = Object.entries(categoryGroups).reduce((acc, [category, ingredients]) => {
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
    return {
      ingredientsIdMap,
      ingredientsGroup: categoryGroupsCounted,
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
   * SELECTED INGREDIENTS
   */
  const [selectedIngredientIdList, setSelectedIngredientIdList] = useState([]);
  const handleIngredientSelect = (id) => {
    setSelectedIngredientIdList([...selectedIngredientIdList, id])
  }
  useEffect(() => {
    console.log(selectedRecipes);
    setSelectedIngredientIdList([]);
  }, [selectedRecipes])

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
          <Stack spacing={1} p={2}>
            {recipeNameList.map((name) => (
              <Card
                key={name}
                sx={{
                  display: "flex",
                  p: 1,
                  border: 2,
                  borderColor: selectedRecipes.includes(name) ? "primary.main" : "",
                }}>
                <CardActionArea onClick={() => handleRecipeSelect(name)}>
                  <Typography variant="h5">{name}</Typography>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
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
          {isEmpty(ingredientsGroup) && (
            <Typography>
              Select recipes to see ingredients
            </Typography>
          )}
          {Object.entries(ingredientsGroup).map(([category, ingredientList]) => (
            <Box key={generateKey(category)}>
              <Typography
                variant="h5"
                sx={{
                  textDecoration:
                    ingredientList.every((name) => selectedIngredientIdList.includes(ingredientsIdMap[name]))
                      ? 'line-through' : 'none',
                }}
              >
                {category}
              </Typography>
              {ingredientList.map(({ id, name }, idx) => {
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
    </>
  )
}

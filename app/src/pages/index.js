import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Card, CardActionArea, Checkbox, Chip, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
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
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const groupedIngredients = useMemo(() => {
    const allSelectedIngredients = selectedRecipes.reduce((acc, curr) => {
      const recipe = recipes.find(({ name }) => name === curr);
      return acc.concat(recipe.ingredientList)
    }, []);
    const countMap = allSelectedIngredients.reduce((acc, { name }) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
    const ingredients = Object.entries(countMap).map(([name, count]) => {
      if (count > 1) {
        return `${name} (x${count})`
      }
      return name;
    })
    ingredients.sort((ingredientA, ingredientB) => ingredientA.localeCompare(ingredientB));
    return ingredients;
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
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const handleIngredientSelect = (idx) => {
    setSelectedIngredients((prev) => {
      const curr = [...prev];
      curr[idx] = { ...curr[idx], isChecked: !curr[idx]?.isChecked };
      console.log(curr)
      return curr;
    })
    console.log("REACHED", idx);
  }
  useEffect(() => {
    console.log("CALLED RESET")
    setSelectedIngredients(groupedIngredients.map((name) => ({
      name,
      isChecked: false
    })))
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
          <Tabs value={tabValue} onChange={handleTabChange}>
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
            {recipeNameList.map((name, index) => (
              <Chip
                key={index}
                label={name}
              />
            ))}
          </Box>

          {groupedIngredients.length === 0 && (
            <Typography>
              Select recipes to see ingredients
            </Typography>
          )}
          {selectedIngredients.map(({ name, isChecked }, idx) => (
            <Box key={name} sx={{ display: 'flex' }}>
              <Checkbox
                checked={isChecked}
                onChange={(e) => handleIngredientSelect(idx)}
              />
              <Typography key={generateKey(name)} variant="h5" sx={{
                textDecoration: isChecked ? 'line-through' : 'none',
                color: isChecked ? '#888888' : null,
              }}>{name}</Typography>
            </Box>

          ))}
        </CustomTabPanel>
      </main>
    </>
  )
}

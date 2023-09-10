import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Card, CardActionArea, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
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
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  /**
   * SELECTED RECIPES
   */
  const recipeNameList = recipes.map(({ name }) => name);
  const [selected, setSelected] = useState([]);
  const groupedIngredients = useMemo(() => {
    const selectedIngredients = selected.reduce((acc, curr) => {
      const recipe = recipes.find(({ name }) => name === curr);
      return acc.concat(recipe.ingredientList)
    }, []);
    console.log(selectedIngredients)
    const countMap = selectedIngredients.reduce((acc, { name }) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
    console.log(countMap)
    const ingredients = Object.entries(countMap).map(([name, count]) => {
      if (count > 1) {
        return `${name} (x${count})`
      }
      return name;
    })
    ingredients.sort((ingredientA, ingredientB) => ingredientA.localeCompare(ingredientB));
    return ingredients;
  }, [selected]);
  const handleSelect = (name) => {
    if (selected.includes(name)) {
      // delete from selected
      setSelected(selected.filter((curr) => curr !== name));
    } else {
      // add to selected
      setSelected([...selected, name]);
    }
  }
  useEffect(() => {
    console.log(selected)
  }, [selected])

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
          <Tabs value={tabValue} onChange={handleChange}>
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
                  borderColor: selected.includes(name) ? "primary.main" : "",
                }}>
                <CardActionArea onClick={() => handleSelect(name)}>
                  <Typography variant="h5">{name}</Typography>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          {groupedIngredients.length === 0 && (
            <Typography>
              Select recipes to see ingredients
            </Typography>
          )}
          {groupedIngredients.map((ingredient) => (
            <Typography key={generateKey(ingredient)} variant="h5">{ingredient}</Typography>
          ))}
        </CustomTabPanel>
      </main>
    </>
  )
}

import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Card, CardActionArea, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import Navbar from '@/components/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import { recipes } from '@/utils/constants';


const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

export default function Home() {
  const recipeNameList = recipes.map(({ name }) => name);
  const [selected, setSelected] = useState([]);
  const selectedIngredients = useMemo(() => {
    const ingredients = selected.reduce((acc, curr) => {
      const recipe = recipes.find(({ name }) => name === curr);
      return acc.concat(recipe.ingredientList)
    }, []);
    ingredients.sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
    return ingredients;
  }, [selected])
  const addSelected = (name) => {
    if (!selected.includes(name))
      setSelected([...selected, name]);
  }
  const removeSelected = (name) => {
    setSelected(selected.filter((curr) => curr !== name));
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
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3" p={2}>Recipes</Typography>
            <Stack spacing={1} p={2}>
              {recipeNameList.map((name) => (
                <Card
                  key={name}
                  sx={{
                    display: "flex",
                    p: 1,
                    backgroundColor: selected.includes(name) ? "primary.main" : ""
                  }}>
                  <CardActionArea onClick={() => addSelected(name)}>
                    <Typography variant="h5">{name}</Typography>
                  </CardActionArea>
                  <IconButton onClick={() => removeSelected(name)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {selectedIngredients.map(({ name }) => (
              <Typography key={generateKey(name)} variant="h5">{name}</Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>BLAH</div>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

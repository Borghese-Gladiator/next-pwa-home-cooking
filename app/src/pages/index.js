import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Card, CardActionArea, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import Navbar from '@/components/Navbar';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Home({ recipes }) {
  const recipeNameList = recipes.map(({ name }) => name);
  const [selected, setSelected] = useState([]);
  const selectedIngredients = useMemo(() => {
    const ingredients = selected.reduce((acc, curr) => {
      const recipe = recipes.find(({ name }) => name === curr);
      return acc.concat(recipe.ingredientList)
    }, []);
    ingredients.sort((a, b) => a.localeCompare(b))
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
            <Stack spacing={1} p={2}>
              {recipeNameList.map((name) => (
                <Card sx={{
                  display: "flex",
                  p: 1,
                  backgroundColor: selected.includes(name) ? "primary.main" : "secondary.main"
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
            {selectedIngredients.map((ingredient) => (
              <Typography variant="h5">{ingredient}</Typography>
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

export async function getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  const recipes = [{
    name: "curry",
    ingredientList: ["carrot", "potato", "Vermont Curry Cube", ],
  }, {
    name: "strapatsada",
    ingredientList: ["olive oil", "feta cheese", "white bread", "egg", "tomato",],
  }, {
    name: "肉松三明治",
    ingredientList: ["肉松", "cucumber", "white bread", "mayonnaise"],
  }, {
    name: "火锅",
    ingredientList: ["丸子", "nappa cabbage", "shiitake mushroom", "enoki mushroom", "daikon", "carrot", "沙茶酱", "芝麻将", "garlic", 'cilantro', 'scallions'],
  }];

  return {
    props: {
      recipes,
    },
  }
}

/*
const recipes = [{
  name: "curry",
  ingredientList: [{
    name: 'provolone cheese',
    location: 'dairy',
    store: 'western',
  }],
}, {
  name: "肉松三明治",
  ingredientList: [{
    name: '肉松',
    location: 'aisle',
    store: 'asian',
  }, {
    name: 'bread',
    location: 'aisle',
    store: 'western',
  }, {
    name: 'mayonnaise',
    location: 'aisle',
    store: 'western',
  }, {
    name: 'cucmbers',
    location: 'produce',
    store: 'western',
  }],
}];
*/


import Head from 'next/head';
import React, { useState } from 'react';

import { Box, Tab, Tabs, useTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import Navbar from '@/components/Navbar';

import RecipeTabPanel from '@/features/RecipeTabPanel';
import IngredientTabPanel from '@/features/IngredientTabPanel';
import RestaurantsTabPanel from '@/features/RestaurantsTabPanel';

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
   * SELECTED RECIPES - select recipes in RecipesTab to show in IngredientsTab
   */
  const [selectedRecipeNameList, setSelectedRecipeNameList] = useState<string[]>([]);
  
  const handleRecipeSelect = (name: string) => {
    if (selectedRecipeNameList.includes(name)) {
      // delete from selected
      setSelectedRecipeNameList(selectedRecipeNameList.filter((curr) => curr !== name));
    } else {
      // add to selected
      setSelectedRecipeNameList([...selectedRecipeNameList, name]);
    }
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
            <Tab label="Restaurants" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <RecipeTabPanel handleRecipeSelect={handleRecipeSelect} selectedRecipeNameList={selectedRecipeNameList} setSelectedRecipeNameList={setSelectedRecipeNameList} />
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={1}>
          <IngredientTabPanel selectedRecipeNameList={selectedRecipeNameList} />
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={2}>
          <RestaurantsTabPanel />
        </CustomTabPanel>

        <ToastContainer />
      </main>
    </>
  );
}

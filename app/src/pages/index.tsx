import Head from 'next/head';
import React, { useState } from 'react';

import { Box, Tab, Tabs, useTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import Navbar from '@/components/Navbar';

import RecipeTabPanel from '@/features/RecipeTabPanel';
import IngredientTabPanel from '@/features/IngredientTabPanel';
import RestaurantsTabPanel from '@/features/RestaurantsTabPanel';
import { SelectedRecipesProvider } from '@/hooks/useRecipeNamesList';
import { DropdownProvider } from '../hooks/useDropdown';

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

  return (
    <SelectedRecipesProvider initialList={[]}>
      <Head>
        <title>Home Cooking PWA</title>
        <meta name="description" content="Recipes and corresponding ingredients for reference when planning meals + shopping for the upcoming week" />
        <link rel="icon" href="/images/favicon.ico" />

        {/* PWA mobile support */}
        <meta name="viewport" content="width=device-width; initial-scale=1; viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
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
          <DropdownProvider>
            <RecipeTabPanel />
          </DropdownProvider>
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={1}>
          <IngredientTabPanel />
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={2}>
          <RestaurantsTabPanel />
        </CustomTabPanel>

        <ToastContainer />
      </main>
    </SelectedRecipesProvider>
  );
}
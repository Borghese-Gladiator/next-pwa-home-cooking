/*
Global hook to store current selected recipes
*/

import { createContext, useContext, useEffect, useState } from "react";

interface SelectedRecipesContextType {
  selectedRecipes: Set<string>;
  toggleRecipeName: (name: string) => void;
  resetRecipes: () => void;
}

const SelectedRecipesContext = createContext<SelectedRecipesContextType | undefined>(undefined);

export const SelectedRecipesProvider: React.FC<{ children: JSX.Element | JSX.Element[], initialList?: string[] }> = ({ children, initialList = [] }) => {
  const [selectedRecipes, setSelectedRecipes] = useState<Set<string>>(new Set(initialList));

  const toggleRecipeName = (name: string) => {
    setSelectedRecipes((prevRecipeNamesSet: Set<string>) => {
      const updatedRecipeNameList = new Set(prevRecipeNamesSet);
      if (updatedRecipeNameList.has(name)) {
        updatedRecipeNameList.delete(name);
      } else {
        updatedRecipeNameList.add(name);
      }
      return updatedRecipeNameList;
    });
  };

  const resetRecipes = () => setSelectedRecipes(new Set())

  const value = {
    selectedRecipes,
    toggleRecipeName,
    resetRecipes,
  };
  useEffect(() => {
    console.log(selectedRecipes)
  }, [selectedRecipes])

  return (
    <SelectedRecipesContext.Provider value={value}>
      {children}
    </SelectedRecipesContext.Provider>
  );
}

const useRecipeNamesList = () => {
  const context = useContext(SelectedRecipesContext);
  if (context === undefined) {
    throw new Error('useRecipeNamesList must be used within a SelectedRecipesContext');
  }
  return context;
};

export default useRecipeNamesList;
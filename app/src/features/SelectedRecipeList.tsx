import { Box, Chip } from "@mui/material";
import useRecipeNamesList from "../hooks/useRecipeNamesList";
import { uniqueId } from "lodash";

const SelectedRecipeList = () => {
  const { selectedRecipes } = useRecipeNamesList();
  return (
    <Box mb={2} sx={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {Array.from(selectedRecipes).map((name) => {
        return (
          <Chip label={name} sx={{ fontWeight: 'bold', textTransform: 'capitalize' }} key={uniqueId()} />
        )
      })}
    </Box>
  )
}

export default SelectedRecipeList;
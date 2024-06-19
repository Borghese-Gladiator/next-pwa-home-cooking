import useRecipeNamesList from "@/src/hooks/useRecipeNamesList";
import theme from "@/src/utils/theme";
import { Card, CardActionArea, Box, Typography, Checkbox } from "@mui/material";
import { uniqueId, startCase } from "lodash";

const RecipeCardList = ({
  totalRecipeList,
  mealFilterSet,
}: any) => {
  const { selectedRecipes, toggleRecipeName } = useRecipeNamesList();
  const handleClick = (e: React.MouseEvent<HTMLElement>, name: string) => {
    toggleRecipeName(name);
    e.stopPropagation();
  }
  const filteredRecipeList = totalRecipeList
    .filter(({ meal }: { meal: string }) => mealFilterSet.size === 0 || mealFilterSet.has(meal))

  return (
    <>
      {filteredRecipeList.map(({ name }: { name: string }) => {
        const isSelected = selectedRecipes.has(name);

        return (
          <Card key={uniqueId()}>
            <CardActionArea
              onClick={(e) => handleClick(e, name)}
              sx={{
                mt: 1,
                p: 1,
                backgroundColor: isSelected ? theme.palette.action.selected : '',
                color: isSelected ? theme.palette.text.primary : theme.palette.text.secondary,
                border: isSelected ? 2 : 1,
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="h5">{startCase(name)}</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Checkbox checked={isSelected} />
              </Box>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
export default RecipeCardList;
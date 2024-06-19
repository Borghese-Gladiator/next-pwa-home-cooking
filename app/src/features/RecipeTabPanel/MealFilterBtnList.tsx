import { Box, Button } from "@mui/material";

const MealFilterBtnList = ({ mealFilterSet, setMealFilterSet }: any) => {
  const toggleMealType = (meal: "breakfast" | "lunch" | "dinner" | "snack") => {
    setMealFilterSet((prevMealFilterSet: Set<string>) => {
      const updatedMealTypes = new Set(prevMealFilterSet);
      if (updatedMealTypes.has(meal)) {
        updatedMealTypes.delete(meal);
      } else {
        updatedMealTypes.add(meal);
      }
      return updatedMealTypes;
    });
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Button
        size="small"
        onClick={() => toggleMealType("breakfast")}
        variant={mealFilterSet.has("breakfast") ? "contained" : "text"}
      >
        Breakfast
      </Button>
      <Button
        size="small"
        variant={mealFilterSet.has("lunch") ? "contained" : "text"}
        onClick={() => toggleMealType("lunch")}
      >
        Lunch
      </Button>
      <Button
        size="small"
        variant={mealFilterSet.has("dinner") ? "contained" : "text"}
        onClick={() => toggleMealType("dinner")}
      >
        Dinner
      </Button>
      <Button
        size="small"
        variant={mealFilterSet.has("snack") ? "contained" : "text"}
        onClick={() => toggleMealType("snack")}
      >
        Snack
      </Button>
    </Box>
  )
}

export default MealFilterBtnList;
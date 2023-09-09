import { cookingHistoryList as recipes } from "@/utils/constants";

export default function handler(req, res) {
  recipes.forEach((item, idx) => {
    recipes[idx] = {
      ...item,
      ...(item.thumbnail && { thumbnail: `/images/${item.thumbnail}` })
    };
  });
  res.status(200).json({ recipes })
}

import { useMemo } from "react";
import type { Cocktail } from "../interfaces/Cocktail";

export const useCocktailIngredients = (cocktail: Cocktail): string[] => {
	return useMemo(() => {
		return Object.keys(cocktail)
			.filter((key) => key.startsWith("strIngredient") && cocktail[key])
			.map((key) => cocktail[key].toLowerCase());
	}, [cocktail]);
};

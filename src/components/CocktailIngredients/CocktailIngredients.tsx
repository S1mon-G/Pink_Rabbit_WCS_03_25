import { useEffect, useState } from "react";
import "./CocktailIngredients.css";

interface CocktailIngredientsProps {
	idDrink: string;
}

function CocktailIngredients({ idDrink }: CocktailIngredientsProps) {
	const [ingredients, setIngredients] = useState<string[]>([]);

	useEffect(() => {
		const fetchCocktailIngredients = async () => {
			const response = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`,
			);
			const data = await response.json();
			const drink = data.drinks ? data.drinks[0] : null;
			if (drink) {
				const ingredientList = [];
				for (let i = 1; i <= 15; i++) {
					const ingredient = drink[`strIngredient${i}`];
					if (ingredient) {
						ingredientList.push(ingredient);
					}
				}

				setIngredients(ingredientList);
			}
		};
		fetchCocktailIngredients();
	}, [idDrink]);
	return (
		<div className="cocktail-ingredients">
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
}

export default CocktailIngredients;

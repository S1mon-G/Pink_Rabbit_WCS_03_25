import { useEffect, useState } from "react";
import type { Cocktail } from "../Interfaces/Cocktail";
import "./CocktailRecipe.css";

const popularCocktailList = [
	"Margarita",
	"Daiquiri",
	"Mojito",
	"Old Fashioned",
	"Cosmopolitan",
	"Tequila Sunrise",
	"Bloody Mary",
	"Manhattan",
	"Negroni",
	"Martini",
	"Whiskey Sour",
	"Gin Tonic",
];

function CocktailRecipe() {
	const [cocktails, setCocktails] = useState<Cocktail[]>([]);

	useEffect(() => {
		const fetchCocktails = async () => {
			const promises = popularCocktailList.map(async (cocktailName) => {
				return fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktailName)}`,
				)
					.then((res) => res.json())
					.then((data) => (data.drinks ? data.drinks[0] : null));
			});

			Promise.all(promises).then((results) => {
				const filteredResults = results.filter((drink) => drink !== null);
				setCocktails(filteredResults as Cocktail[]);
			});
		};

		fetchCocktails();
	}, []);

	if (cocktails.length === 0) return <p>Chargement...</p>;

	const cocktail = cocktails[0];

	const getIngredients = () => {
		const ingredients = [];
		for (let i = 1; i <= 15; i++) {
			const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
			const measure = cocktail[`strMeasure${i}` as keyof Cocktail];
			if (ingredient) {
				ingredients.push(`${measure ?? ""} ${ingredient}`);
			}
		}
		return ingredients;
	};

	const ingredientsList = getIngredients();

	return (
		<div>
			<div className="cocktail-detail">
				<div className="cocktail-card">
					<img
						src={cocktail.strDrinkThumb}
						alt={cocktail.strDrink}
						width="300"
						height="auto"
					/>
					<h2>{cocktail.strDrink}</h2>
				</div>

				<div className="cocktail-instructions">
					<h3>Verre :</h3>
					<p>{cocktail.strGlass}</p>

					<h3>Instructions :</h3>
					<p>{cocktail.strInstructionsFR}</p>

					<h3>Ingrédients :</h3>
					<ul>
						{ingredientsList.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CocktailRecipe;

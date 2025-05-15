import { useEffect, useState } from "react";
import "./CocktailList.css";
import CocktailView from "../components/CocktailView/CocktailView";

interface CocktailListProps {
	cocktail: {
		idDrink: string;
		strDrink: string;
		strDrinkThumb: string;
	};
}
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

function CocktailList() {
	const [cocktails, setCocktails] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchCocktails = async () => {
			const promises = popularCocktailList.map(async (cocktailName) => {
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktailName)}`,
				);
				const data = await response.json();
				return data.drinks ? data.drinks[0] : null;
			});

			const results = await Promise.all(promises);
			const filteredResults = results.filter((drink) => drink !== null);
			setCocktails(filteredResults);
		};

		fetchCocktails();
	}, []);

	const cocktailFiltered = cocktails.filter((cocktail) =>
		cocktail.strDrink.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className="cocktail-list">
			<h1>Retrouve tous tes cocktails ici 🍸</h1>

			<input
				className="input"
				type="text"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				placeholder="Rechercher un cocktail..."
			/>

			<div className="cocktail-list-filter">
				{cocktailFiltered.map((cocktail) => (
					<CocktailView key={cocktail.idDrink} cocktail={cocktail} />
				))}
			</div>
		</div>
	);
}
export default CocktailList;

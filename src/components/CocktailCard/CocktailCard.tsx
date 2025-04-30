import React, { useState } from "react";
import CocktailIngredients from "../CocktailIngredients/CocktailIngredients";
import "./CocktailCard.css";

type Props = {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
};

function CocktailCard({ idDrink, strDrink, strDrinkThumb }: Props) {
	const [showIngredients, setShowIngredients] = useState(false);

	const handleToggleIngredients = () => {
		setShowIngredients(!showIngredients);
	};

	return (
		<div className="cocktail-card">
			<img src={strDrinkThumb} alt={strDrink} width="300" height="auto" />
			<div className="cocktail-details">
				<h2
					className="cocktail-name"
					onClick={handleToggleIngredients}
					onKeyUp={handleToggleIngredients}
				>
					{strDrink}
				</h2>

				{showIngredients ? <CocktailIngredients idDrink={idDrink} /> : null}
			</div>
		</div>
	);
}

export default CocktailCard;

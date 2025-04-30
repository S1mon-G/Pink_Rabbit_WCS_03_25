import React, { useState } from "react";
import CocktailIngredients from "../CocktailIngredients/CocktailIngredients";
import "./CocktailCard.css";

interface CocktailCardProps {
	cocktail: {
		idDrink: string;
		strDrink: string;
		strDrinkThumb: string;
	};
}

function CocktailCard({ cocktail }: CocktailCardProps) {
	const [showIngredients, setShowIngredients] = useState(false);

	const handleToggleIngredients = () => {
		setShowIngredients(!showIngredients);
	};

	return (
		<div className="cocktail-card">
			<img
				src={cocktail.strDrinkThumb}
				alt={cocktail.strDrink}
				width="300"
				height="auto"
			/>
			<div className="cocktail-details">
				<h2
					className="cocktail-name"
					onClick={handleToggleIngredients}
					onKeyUp={handleToggleIngredients}
				>
					{cocktail.strDrink}
				</h2>

				{showIngredients ? (
					<CocktailIngredients idDrink={cocktail.idDrink} />
				) : null}
			</div>
		</div>
	);
}

export default CocktailCard;

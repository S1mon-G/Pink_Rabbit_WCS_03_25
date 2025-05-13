import { Link } from "react-router";
import "./CocktailView.css";
import type { Cocktail } from "../../Interfaces/Cocktail";

interface CocktailViewProps {
	cocktail: Cocktail;
}

function CocktailView({ cocktail }: CocktailViewProps) {
	return (
		<div className="cocktail-card">
			<img
				src={cocktail.strDrinkThumb}
				alt={cocktail.strDrink}
				width="300"
				height="auto"
			/>
			<div className="cocktail-details">
				<h2 className="cocktail-name">
					{/* TODO: <Link to={"/cocktail/${cocktail.idDrink}"}>{cocktail.strDrink}</Link> */}
				</h2>
			</div>
		</div>
	);
}

export default CocktailView;

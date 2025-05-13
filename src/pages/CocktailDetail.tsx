import { Link } from "react-router";
import type { Cocktail } from "../Interfaces/Cocktail";
import "./CocktailDetail.css";

interface CocktailDetailProps {
	cocktail: Cocktail;
}

function CocktailDetail({ cocktail }: CocktailDetailProps) {
	// a la place de la soluce du chat
	// ta function CocktailQuelquechose prend en props {cocktail}
	// ensuite tu return des trucs genre cocktail.strDrink, cocktail.ingredients etc etc

	return (
		<div className="cocktail-page">
			<Link to="/cocktail-list">← Retour à la liste des cocktails</Link>

			<h1>{cocktail.strDrink}</h1>
			<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="300" />

			<div className="cocktail-detail">
				<h2>Verre :</h2>
				<p>{cocktail.strGlass}</p>

				<div className="cocktail-instruction">
					<h2>Instructions</h2>
					<p>{cocktail.strInstructionsFR}</p>
				</div>
				<div className="cocktail-ingredients">
					<h2>Ingrédients :</h2>

					<ul>
						{/* {ingredients.map((item, index) => (
							<li key={index}>{item}</li>
						))} */}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CocktailDetail;

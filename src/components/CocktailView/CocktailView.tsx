import "./CocktailView.css";
import { useNavigate } from "react-router";
import type { Cocktail } from "../../Interfaces/Cocktail";

interface CocktailViewProps {
	cocktail: Cocktail;
}

function CocktailView({ cocktail }: CocktailViewProps) {
	const navigate = useNavigate();

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
					onClick={() => {
						navigate("/cocktail-recipe");
					}}
					onKeyUp={undefined}
				>
					{cocktail.strDrink}
				</h2>
			</div>
		</div>
	);
}

export default CocktailView;

import Swal from "sweetalert2";
import "./ShakeButton.css";
import type { Cocktail } from "../../Interfaces/Cocktail";

import { useNavigate } from "react-router";
import { useCocktailIngredients } from "../../hooks/useCocktailIngredients";

interface ShakeButtonProps {
	cocktail: Cocktail;
	selectedIngredients: { [key: string]: boolean };
	isProfileCocktail?: boolean;
}

function ShakeButton({
	cocktail,
	selectedIngredients,
	isProfileCocktail = false,
}: ShakeButtonProps) {
	const navigate = useNavigate();

	const cocktailIngredients = useCocktailIngredients(cocktail);

	const ValidateCocktail = () => {
		const allRightIngredients = cocktailIngredients.every(
			(ingredient) => selectedIngredients[ingredient] === false,
		);

		if (allRightIngredients) {
			Swal.fire({
				icon: "success",
				title: "Bravo!",
				text: "Tu serais pas un champion de la mixologie toi ?",
				timer: 2000,
				showConfirmButton: false,
			}).then(() => {
				if (isProfileCocktail) {
					navigate("/profile");
				}
			});
		} else {
			Swal.fire({
				icon: "error",
				title: "oups...",
				text: "Tu veux pas un verre d'eau plutôt ?",
				footer:
					'<a href="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHQ5OW9ldXA5eDE3YjQ4ZHU4MnIxaGc5eTJvc3VmZW1jaGRxOWo1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwF34cGDoFFhRfy/giphy.gif" target="blank" > lien secret à ne pas cliquer surtout </a>',
			});
		}
	};
	return (
		<button type="button" className="shake-button" onClick={ValidateCocktail}>
			let's shake !
		</button>
	);
}
export default ShakeButton;

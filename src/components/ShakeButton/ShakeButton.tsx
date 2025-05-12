import Swal from "sweetalert2";
import "./ShakeButton.css";
import type { CocktailInterface } from "../../Interfaces/CocktailInterface";

import { useNavigate } from "react-router";

interface ShakeButtonProps {
	cocktail: CocktailInterface;
	selectedStates: { [key: string]: string };
	isProfileCocktail?: boolean;
}

function ShakeButton({
	cocktail,
	selectedStates,
	isProfileCocktail = false,
}: ShakeButtonProps) {
	const navigate = useNavigate();

	const handleShakeButton = () => {
		const cocktailIngredients = Object.keys(cocktail)
			.filter((key) => key.startsWith("strIngredient") && cocktail[key])
			.map((key) => cocktail[key].toLowerCase());

		const allRightIngredients = cocktailIngredients.every(
			(ingredient) => selectedStates[ingredient] === "right",
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
		<button type="button" className="shake-button" onClick={handleShakeButton}>
			let's shake !
		</button>
	);
}
export default ShakeButton;

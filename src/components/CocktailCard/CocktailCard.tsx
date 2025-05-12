import { useEffect, useState } from "react";
import type { CocktailInterface } from "../../Interfaces/CocktailInterface";
import QuizButton from "../QuizButton/QuizButton";
import ShakeButton from "../ShakeButton/ShakeButton";

import "./CocktailCard.css";

interface CocktailCardProps {
	cocktail: CocktailInterface;
	isProfileCocktail: boolean;
}
type ingredientState = "default" | "right" | "wrong";

const fakeIngredients = [
	"green tea",
	"spring water",
	"beer",
	"milk",
	"honey",
	"vanilla",
];

function CocktailCard({ cocktail, isProfileCocktail }: CocktailCardProps) {
	const [selectedStates, setSelectedStates] = useState<
		Record<string, ingredientState>
	>({});

	const [quizIngredients, setQuizIngredients] = useState<string[]>([]);

	useEffect(() => {
		const cocktailIngredients = Object.keys(cocktail)
			.filter((key) => key.startsWith("strIngredient") && cocktail[key])
			.map((key) => cocktail[key].toLowerCase());

		const shuffledFakeIngredients = [...fakeIngredients].sort(
			() => Math.random() - 0.5,
		);
		const neededFakeCount = Math.max(0, 9 - cocktailIngredients.length);
		const selectedFakeIngredients = shuffledFakeIngredients.slice(
			0,
			neededFakeCount,
		);

		const finalIngredients = [
			...cocktailIngredients,
			...selectedFakeIngredients,
		].sort(() => Math.random() - 0.5);

		setQuizIngredients(finalIngredients);
	}, [cocktail]);

	const handleIngredientClick = (ingredient: string) => {
		const isFake = fakeIngredients.includes(ingredient);
		setSelectedStates((prev) => ({
			...prev,
			[ingredient]: isFake ? "wrong" : "right",
		}));
	};

	return (
		<>
			<h1> {cocktail.strDrink} </h1>
			<section className="full-cocktail-card">
				<img
					src={cocktail.strDrinkThumb}
					alt={cocktail.strDrink}
					className="cocktail-image"
				/>
				<div className="cocktail-buttons">
					{quizIngredients.map((ingredient) => (
						<QuizButton
							key={ingredient}
							ingredients={ingredient}
							onClick={handleIngredientClick}
							ingredientState={selectedStates[ingredient] || "default"}
						/>
					))}
				</div>
			</section>
			<ShakeButton
				cocktail={cocktail}
				selectedStates={selectedStates}
				isProfileCocktail={isProfileCocktail}
			/>
		</>
	);
}

export default CocktailCard;

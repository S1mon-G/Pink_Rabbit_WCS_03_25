import { useEffect, useState } from "react";
import type { Cocktail } from "../../Interfaces/Cocktail";
import QuizButton from "../QuizButton/QuizButton";
import ShakeButton from "../ShakeButton/ShakeButton";

import "./CocktailCard.css";
import { useCocktailIngredients } from "../../hooks/useCocktailIngredients";

interface CocktailCardProps {
	cocktail: Cocktail;
	isProfileCocktail: boolean;
}
type ingredientState = boolean;

const fakeIngredients = [
	"green tea",
	"spring water",
	"beer",
	"milk",
	"honey",
	"vanilla",
];

function CocktailCard({ cocktail, isProfileCocktail }: CocktailCardProps) {
	const [selectedIngredients, setSelectedIngredients] = useState<
		Record<string, ingredientState>
	>({});

	const [quizIngredients, setQuizIngredients] = useState<string[]>([]);
	const cocktailIngredients = useCocktailIngredients(cocktail);
	useEffect(() => {
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
	}, [cocktailIngredients]);

	const handleIngredientClick = (ingredient: string) => {
		const isFake = fakeIngredients.includes(ingredient);

		setSelectedIngredients((prev) => ({
			...prev,
			[ingredient]: isFake,
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
							ingredientState={selectedIngredients[ingredient]}
						/>
					))}
				</div>
			</section>
			<ShakeButton
				cocktail={cocktail}
				selectedIngredients={selectedIngredients}
				isProfileCocktail={isProfileCocktail}
			/>
		</>
	);
}

export default CocktailCard;

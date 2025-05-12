import "./QuizButton.css";

interface QuizButtonProps {
	ingredients: string;
	onClick: (ingredient: string) => void;
	ingredientState: boolean;
}

function QuizButton({
	ingredients,
	onClick,
	ingredientState,
}: QuizButtonProps) {
	const buttonStyle =
		ingredientState === false
			? "button-right"
			: ingredientState === true
				? "button-wrong"
				: "button-default";

	return (
		<button
			type="button"
			onClick={() => onClick(ingredients)}
			className={buttonStyle}
		>
			{ingredients}
		</button>
	);
}

export default QuizButton;

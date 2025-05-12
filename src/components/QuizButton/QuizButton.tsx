import "./QuizButton.css";

interface QuizButtonProps {
	ingredients: string;
	onClick: (ingredient: string) => void;
	ingredientState: "wrong" | "right" | "default";
}

function QuizButton({
	ingredients,
	onClick,
	ingredientState,
}: QuizButtonProps) {
	const buttonStyle =
		ingredientState === "wrong"
			? "button-wrong"
			: ingredientState === "right"
				? "button-right"
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

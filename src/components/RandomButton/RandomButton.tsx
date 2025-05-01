import "./RandomButton.css";

type RandomButtonProps = {
	onClick: () => void;
};

function RandomButton({ onClick }: RandomButtonProps) {
	return (
		<button type="button" onClick={onClick} className="random-cocktail-button">
			Garçon, un cocktail!
		</button>
	);
}

export default RandomButton;

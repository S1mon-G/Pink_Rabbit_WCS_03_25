import "./LikeButton.css";
import { useState } from "react";
import likeLogoRed from "../../assets/images/heart_red_logo.png";
import likeLogo from "../../assets/images/heart_unliked_logo.png";

const LikeButton = () => {
	const [isLiked, setIsLiked] = useState(false);
	const [likes, setLikes] = useState(0);

	const handleLike = () => {
		if (isLiked) {
			setLikes(likes - 1);
			setIsLiked(false);
		} else {
			setLikes(likes + 1);
			setIsLiked(true);
		}
	};

	return (
		<img
			onClick={handleLike}
			onKeyUp={handleLike}
			src={isLiked ? likeLogoRed : likeLogo}
			alt="like"
			id="logo-container"
		/>
	);
};
export default LikeButton;

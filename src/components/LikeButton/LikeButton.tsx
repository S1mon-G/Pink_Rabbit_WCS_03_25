import "./LikeButton.css";
import { useEffect, useState } from "react";
import type { Profile } from "../../Interfaces/Profile";
import likeLogoRed from "../../assets/images/heart_red_logo.png";
import likeLogo from "../../assets/images/heart_unliked_logo.png";
import { useLikedProfiles } from "../../contexts/LikedProfilesContext";

interface ProfileCardProps {
	profile: Profile;
}

function LikeButton({ profile }: ProfileCardProps) {
	const [isLiked, setIsLiked] = useState(false);
	const { likedProfiles, setLikedProfiles } = useLikedProfiles();

	useEffect(() => {
		const alreadyLiked = likedProfiles.some(
			(likedProfile) => likedProfile.id === profile.id,
		);
		setIsLiked(alreadyLiked);
	}, [likedProfiles, profile.id]);

	const handleLike = () => {
		if (isLiked) {
			setIsLiked(false);
			setLikedProfiles((prev) =>
				prev.filter((likedProfile) => likedProfile.id !== profile.id),
			);
		} else {
			setIsLiked(true);
			setLikedProfiles((prev) => [...prev, profile]);
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
}
export default LikeButton;

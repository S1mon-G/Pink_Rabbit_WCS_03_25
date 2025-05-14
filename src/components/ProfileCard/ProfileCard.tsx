import "./ProfileCard.css";

import { useNavigate } from "react-router";
import type { Profile } from "../../Interfaces/Profile";
import cocktailLogo from "../../assets/images/cocktail_logo.png";
import LikeButton from "../LikeButton/LikeButton";

interface ProfileCardProps {
	profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
	const navigate = useNavigate();
	return (
		<article className="profile-card">
			<div
				className="front"
				style={{
					background: `url(${profile.picture})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div id="profile-info-container">
					<h2>
						{profile.firstname} - {profile.age}
					</h2>
				</div>
				<div id="logo-container">
					<div id="like-logo">
						<LikeButton profile={profile} />
					</div>
					<div id="cocktail-logo">
						<img
							src={cocktailLogo}
							alt="cocktailLogo"
							onClick={() => {
								navigate("/quiz");
							}}
							onKeyUp={undefined}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

export default ProfileCard;

import "./ProfileCard.css";
import cocktailLogo from "../../assets/images/cocktail_logo.png";
import likeLogo from "../../assets/images/like_logo.png";

interface ProfileCardInterface {
	profile: {
		id: number;
		firstname: string;
		genre: string;
		age: number;
		cocktail: string;
		picture: string;
	};
}

function ProfileCard({ profile }: ProfileCardInterface) {
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
						<img src={likeLogo} alt="like" />
					</div>
					<div id="cocktail-logo">
						<img src={cocktailLogo} alt="cocktailLogo" />
					</div>
				</div>
			</div>
		</article>
	);
}

export default ProfileCard;

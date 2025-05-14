import { useNavigate } from "react-router";
import ProfileData from "../data/ProfileData.json";

function Profile() {
	const navigate = useNavigate();
	const accessChat = () => {
		navigate("/chat");
	};
	const accessBar = () => {
		window.open(
			"https://www.instagram.com/explore/locations/1021464342/bar-lavant-scene/",
			"_blank",
		);
	};
	const profile = ProfileData[0];
	return (
		<>
			<div className="profile-details">
				<img
					src={profile.picture}
					alt="selected profile thumbnail"
					className="fullprofile-image"
				/>
				<h2>Et si on se retrouvait à </h2>
				<h2>{profile.favouriteBar}</h2>
				<img
					src={profile.favouriteBarPicture}
					alt="le bar l'avant-scène"
					className="bar-picture"
					onClick={accessBar}
					onKeyUp={accessBar}
				/>
				<h3 className="bar-adress">c'est au {profile.favouriteBarAdress}</h3>
				<button type="button" onClick={accessChat} className="chat-button">
					<h2>On discute ? 🥂</h2>
				</button>
			</div>
		</>
	);
}

export default Profile;

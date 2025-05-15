import { useNavigate } from "react-router";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ProfileData from "../data/ProfileData.json";

function Profile() {
	const navigate = useNavigate();
	const accessChat = () => {
		navigate("/chat");
	};
	const accessBar = () => {
		window.location.href = "https://maps.app.goo.gl/zaQmYDmHayE4pNPy8";
	};
	const profile = ProfileData[0];
	return (
		<>
			<div className="profile-details">
				<ProfileCard profile={profile} />
				<h2>Mon bar préféré c'est </h2>
				<h2>{profile.favouriteBar}</h2>
				<img
					src={profile.favouriteBarPicture}
					alt="le bar l'avant-scène"
					className="bar-picture"
					onClick={accessBar}
					onKeyUp={accessBar}
				/>

				<h3 className="bar-adress">au {profile.favouriteBarAdress}</h3>
				<button type="button" onClick={accessChat} className="chat-button">
					<h2>On discute ? 🥂</h2>
				</button>
			</div>
		</>
	);
}

export default Profile;

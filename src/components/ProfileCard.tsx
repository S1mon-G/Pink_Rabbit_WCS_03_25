import type { ProfileInterface } from "../Interfaces/Profile";

interface ProfileCardProps {
	profile: ProfileInterface;
}

function ProfileCard({ profile }: ProfileCardProps) {
	return (
		<>
			<h1>ceci est la carte de {profile.firstname} </h1>
			<img src={profile.picture} alt="profile pic" />
			<h2>son cocktail préféré est le {profile.favouriteCocktail}</h2>
		</>
	);
}

export default ProfileCard;

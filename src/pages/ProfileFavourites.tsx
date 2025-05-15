import { useContext } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { ProfileContext } from "../contexts/LikedProfilesContext";
import "./ProfileFavourite.css";

function ProfileFavourites() {
	const { likedProfiles } = useContext(ProfileContext);

	return (
		<section className="profiles-container">
			<h1>Mes profils favoris</h1>
			{likedProfiles.length === 0 ? (
				<p>Vous n'avez pas encore de profils favoris</p>
			) : (
				<article className="profiles-data">
					{likedProfiles.map((profile) => (
						<ProfileCard key={profile.id} profile={profile} />
					))}
				</article>
			)}
		</section>
	);
}

export default ProfileFavourites;

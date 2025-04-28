import "./ProfileCard.css";

function ProfileCard({ profile }) {
	return (
		<article className="profile-card">
			<img src={profile.photo} alt={profile.prenom} />
			<h2>{profile.prenom}</h2>
			<p>{profile.age}</p>
		</article>
	);
}

export default ProfileCard;

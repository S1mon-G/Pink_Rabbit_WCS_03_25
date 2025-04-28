import { useState } from "react";
import profilesData from "../assets/data/profilesdata";
import feminineLogo from "../assets/feminine_logo.png";
import masculineLogo from "../assets/masculine_logo.png";
import neutralLogo from "../assets/neutral_logo.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./Profile.css";

function Profile() {
	const [requestGenre, setRequestGenre] = useState<string[]>([]);

	const profilesfiltered = profilesData.filter((profile) => {
		return requestGenre.includes(profile.genre);
	});
	const isFiltered = requestGenre.length > 0;

	return (
		<>
			<section className="genderfilter-container">
				{!isFiltered ? (
					<>
						<article className="main-text">
							<h1>Je veux boire un verre avec :</h1>
						</article>
						<article className="button-container">
							<button
								type="button"
								className="gender-buttons"
								id="masculine"
								onClick={() => {
									setRequestGenre(["M"]);
								}}
							>
								<img src={masculineLogo} alt="masculine" />
							</button>
							<button
								type="button"
								className="gender-buttons"
								id="feminine"
								onClick={() => {
									setRequestGenre(["F"]);
								}}
							>
								<img src={feminineLogo} alt="feminine" />
							</button>
							<button
								type="button"
								className="gender-buttons"
								id="neutral"
								onClick={() => {
									setRequestGenre(["F", "M"]);
								}}
							>
								<img src={neutralLogo} alt="neutral" />
							</button>
						</article>
					</>
				) : (
					<article className="profiles-data">
						{profilesfiltered.map((profile) => {
							return (
								<ProfileCard
									key={profile.id}
									profile={profile}
									onClick={() => setRequestGenre([])}
								/>
							);
						})}
					</article>
				)}
			</section>
			<section className="agefilter-container">
				<article className="main-text">
					<h1>Je cherche une personne entre :</h1>
				</article>
				<article id="filterbar-container">
					<p>Mon filtre d'âge </p>
				</article>
				<article>
					<button type="button" id="validate-button" onClick={() => {}}>
						Montre moi!
					</button>
				</article>
			</section>
		</>
	);
}

export default Profile;

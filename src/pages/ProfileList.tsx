import { useContext, useState } from "react";
import feminineLogo from "../assets/images/feminine_logo.png";
import masculineLogo from "../assets/images/masculine_logo.png";
import neutralLogo from "../assets/images/neutral_logo.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./ProfileList.css";
import { ProfileContext } from "../contexts/LikedProfilesContext";

function ProfileList() {
	const { profiles } = useContext(ProfileContext);

	const [display, setDisplay] = useState("displayGenre");

	const [filterGender, setFilterGender] = useState<string[]>([]);
	const [filterAge, setFilterAge] = useState(60);

	const profilesFiltered = profiles.filter((profile) => {
		return filterGender.includes(profile.gender) && profile.age <= filterAge;
	});

	const handleGenderClick = (gender: string[]) => {
		setDisplay("displayAge");
		setFilterGender(gender);
	};

	const handleShowfilteredProfiles = () => {
		setDisplay("displayProfiles");
	};

	return (
		<>
			{display === "displayGenre" && (
				<section className="genderfilter-container">
					<article className="gender-text">
						<h1>Je veux boire un verre avec :</h1>
					</article>
					<article className="button-container">
						<button
							type="button"
							className="gender-buttons"
							id="masculine"
							onClick={() => {
								handleGenderClick(["M"]);
							}}
						>
							<img src={masculineLogo} alt="masculine" />
						</button>
						<button
							type="button"
							className="gender-buttons"
							id="feminine"
							onClick={() => {
								handleGenderClick(["F"]);
							}}
						>
							<img src={feminineLogo} alt="feminine" />
						</button>
						<button
							type="button"
							className="gender-buttons"
							id="neutral"
							onClick={() => {
								handleGenderClick(["F", "M"]);
							}}
						>
							<img src={neutralLogo} alt="neutral" />
						</button>
					</article>
				</section>
			)}

			{display === "displayAge" && (
				<section className="age-filter-container">
					<article className="age-text">
						<h1>Je cherche une personne entre :</h1>
					</article>
					<article id="age-slider-container">
						<div className="age-range-values">
							<span className="min-age">18</span>
							<span className="max-age">{filterAge}</span>
						</div>
						<input
							type="range"
							id="age-slider"
							min={18}
							max={60}
							value={filterAge}
							onChange={(e) => {
								setFilterAge(Number(e.target.value));
							}}
						/>
					</article>
					<article>
						<button
							type="button"
							className="validate-button"
							onClick={handleShowfilteredProfiles}
						>
							Montre moi!
						</button>
					</article>
				</section>
			)}

			{display === "displayProfiles" && (
				<section className="profiles-container">
					<article className="profiles-data">
						{profilesFiltered.map((profile) => {
							return <ProfileCard key={profile.id} profile={profile} />;
						})}
					</article>
				</section>
			)}
		</>
	);
}

export default ProfileList;

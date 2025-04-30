import { useState } from "react";
import profilesData from "../assets/data/profilesdata";
import feminineLogo from "../assets/images/feminine_logo.png";
import masculineLogo from "../assets/images/masculine_logo.png";
import neutralLogo from "../assets/images/neutral_logo.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./Profile.css";

function Profile() {
	const [display, setDisplay] = useState("display1");

	const [requestGenre, setRequestGenre] = useState<string[]>([]);
	const [maxAge, setMaxAge] = useState(60);

	const profilesFiltered = profilesData.filter((profile) => {
		return requestGenre.includes(profile.genre) && profile.age <= maxAge;
	});

	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMaxAge(Number(e.target.value));
	};

	const handleGenderClick = (gender: string[]) => {
		setDisplay("display2");
		setRequestGenre(gender);
	};

	const handleShowfilteredProfiles = () => {
		setDisplay("display3");
	};

	return (
		<>
			{display === "display1" && (
				<section className="genderfilter-container">
					<article className="main-text">
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

			{display === "display2" && (
				<section className="age-filter-container">
					<article className="main-text">
						<h1>Je cherche une personne entre :</h1>
					</article>
					<article id="age-slider-container">
						<div className="age-range-values">
							<span className="min-age">18</span>
							<span className="max-age">{maxAge}</span>
						</div>
						<input
							type="range"
							id="age-slider"
							min={18}
							max={60}
							value={maxAge}
							onChange={handleAgeChange}
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

			{display === "display3" && (
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

export default Profile;

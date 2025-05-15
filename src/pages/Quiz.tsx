import { useCallback, useEffect, useState } from "react";

import CocktailCard from "../components/CocktailCard/CocktailCard";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import RandomButton from "../components/RandomButton/RandomButton";
import ProfileData from "../data/ProfileData.json";

import type { Cocktail } from "../Interfaces/Cocktail";
import type { Profile } from "../Interfaces/Profile";

import "./Quiz.css";

const popularCocktailList = [
	"Margarita",
	"Daiquiri",
	"Mojito",
	"Old Fashioned",
	"Cosmopolitan",
	"Tequila Sunrise",
	"Bloody Mary",
	"Manhattan",
	"Negroni",
	"Martini",
	"Whiskey Sour",
	"Gin Tonic",
];

const profile = ProfileData[0];

function Quiz() {
	const [cocktail, setCocktail] = useState<Cocktail | null>(null);
	const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

	const fetchRandomCocktail = useCallback(async () => {
		const randomCocktail =
			popularCocktailList[
				Math.floor(Math.random() * popularCocktailList.length)
			];

		const cocktailRes = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(randomCocktail)}`,
		);
		const cocktailData = await cocktailRes.json();
		setCocktail(cocktailData?.drinks?.[0]);
	}, []);

	const fetchProfileCocktail = async (cocktailName: string) => {
		const cocktailRes = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktailName)}`,
		);
		const profileCocktailData = await cocktailRes.json();
		setCocktail(profileCocktailData?.drinks?.[0]);
	};

	const handleSelectProfile = (profile: Profile) => {
		setSelectedProfile(profile);
		fetchProfileCocktail(profile.favouriteCocktail);
	};

	useEffect(() => {
		fetchRandomCocktail();
	}, [fetchRandomCocktail]);

	return (
		<>
			<h2 className="quiz-title">trouve les ingrédients des cocktails !</h2>

			{selectedProfile ? (
				<>
					{cocktail !== null && <ProfileCard profile={profile} />}
					{cocktail && cocktail.strDrink === profile.favouriteCocktail ? (
						<CocktailCard cocktail={cocktail} isProfileCocktail={true} />
					) : null}
				</>
			) : (
				<>
					<div className="all-quiz-buttons">
						<RandomButton onClick={fetchRandomCocktail} />
						<button
							type="button"
							className="secret-button"
							onClick={() => handleSelectProfile(profile)}
						>
							<h3 className="secret-text">profil choisi</h3>
						</button>
					</div>
					{cocktail && (
						<CocktailCard cocktail={cocktail} isProfileCocktail={false} />
					)}
				</>
			)}
		</>
	);
}

export default Quiz;

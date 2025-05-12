import { useCallback, useEffect, useState } from "react";

import type { ProfileInterface } from "../Interfaces/ProfileInterface";
import type { CocktailInterface } from "../Interfaces/CocktailInterface";
import CocktailCard from "../components/CocktailCard/CocktailCard";
import ProfileCard from "../components/ProfileCard";
import RandomButton from "../components/RandomButton/RandomButton";
import ProfileData from "../data/ProfileData.json";

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

const profile = ProfileData[Math.floor(Math.random() * ProfileData.length)];

function Quiz() {
	const [cocktail, setCocktail] = useState<CocktailInterface | null>(null);
	const [selectedProfile, setSelectedProfile] =
		useState<ProfileInterface | null>(null);

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

	const handleSelectProfile = (profile: ProfileInterface) => {
		setSelectedProfile(profile);
		fetchProfileCocktail(profile.favouriteCocktail);
	};

	useEffect(() => {
		fetchRandomCocktail();
	}, [fetchRandomCocktail]);

	return (
		<>
			<h2>
				Entraîne toi à trouver <br /> les ingrédients des cocktails !
			</h2>

			{selectedProfile ? (
				<>
					{cocktail !== null && <ProfileCard profile={profile} />}
					{cocktail && cocktail.strDrink === profile.favouriteCocktail ? (
						<CocktailCard cocktail={cocktail} isProfileCocktail={true} />
					) : null}
				</>
			) : (
				<>
					<button type="button" onClick={() => handleSelectProfile(profile)}>
						profil choisi
					</button>
					<RandomButton onClick={fetchRandomCocktail} />
					{cocktail && (
						<CocktailCard cocktail={cocktail} isProfileCocktail={false} />
					)}
				</>
			)}
		</>
	);
}

export default Quiz;

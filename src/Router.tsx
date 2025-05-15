import { createBrowserRouter } from "react-router";

import App from "./App";

import Chat from "./pages/Chat";
import CocktailList from "./pages/CocktailList";
import CocktailRecipe from "./pages/CocktailRecipe";
import Home from "./pages/Home";
import ProfileFavourites from "./pages/ProfileFavourites";
import ProfileList from "./pages/ProfileList";
import Quiz from "./pages/Quiz";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/profile-list", element: <ProfileList /> },
			{ path: "/quiz", element: <Quiz /> },
			{ path: "/chat", element: <Chat /> },
			{ path: "/cocktail-list", element: <CocktailList /> },
			{ path: "/cocktail-recipe", element: <CocktailRecipe /> },
			{ path: "/profile-favourites", element: <ProfileFavourites /> },
		],
	},
]);

export default router;

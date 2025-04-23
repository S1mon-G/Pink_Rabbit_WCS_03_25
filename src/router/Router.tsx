import { createBrowserRouter } from "react-router";

import App from "../App";

import Chat from "../pages/Chat";
import Cocktail from "../pages/Cocktail";
import CocktailList from "../pages/CocktailList";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileFavourites from "../pages/ProfileFavourites";
import Quiz from "../pages/Quiz";
import ProfileList from "../pages/ProfileList";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/profilelist", element: <ProfileList /> },
			{ path: "/quiz", element: <Quiz /> },
			{ path: "/profile", element: <Profile /> },
			{ path: "/chat", element: <Chat /> },
			{ path: "/cocktaillist", element: <CocktailList /> },
			{ path: "/cocktail", element: <Cocktail /> },
			{ path: "/profilefavourites", element: <ProfileFavourites /> },
		],
	},
]);

export default router;

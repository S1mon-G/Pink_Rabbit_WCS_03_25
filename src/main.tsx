import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";

import AgeFilter from "./components/AgeFilter/AgeFilter.tsx";
import ChatPage from "./components/ChatPage/ChatPage.tsx";
import CocktailList from "./components/CocktailList/CocktailList.tsx";
import FavouriteList from "./components/FavouriteList/FavouriteList.tsx";
import FullProfile from "./components/FullProfile/FullProfile.tsx";
import GenderFilter from "./components/GenderFilter/GenderFilter.tsx";
import Home from "./components/Home/Home.tsx";
import ProfileList from "./components/ProfileList/ProfileList.tsx";
import Quiz from "./components/Quiz/Quiz.tsx";
import RandomQuiz from "./components/RandomQuiz/RandomQuiz.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/gender",
				element: <GenderFilter />,
			},
			{
				path: "/age",
				element: <AgeFilter />,
			},
			{
				path: "/profiles",
				element: <ProfileList />,
			},
			{
				path: "/quiz",
				element: <Quiz />,
			},
			{
				path: "/fullprofile",
				element: <FullProfile />,
			},
			{
				path: "/chat",
				element: <ChatPage />,
			},
			{
				path: "/cocktails",
				element: <CocktailList />,
			},
			{
				path: "/randomquiz",
				element: <RandomQuiz />,
			},
			{
				path: "/favourites",
				element: <FavouriteList />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}

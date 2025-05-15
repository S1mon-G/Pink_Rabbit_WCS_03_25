import { Outlet } from "react-router";

import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import "./App.css";

import "./fonts/DynaPuff-Regular.ttf";
import { LikedProfilesProvider } from "./contexts/LikedProfilesContext";

function App() {
	return (
		<LikedProfilesProvider>
			<Header />
			<Outlet />
			<Navbar />
		</LikedProfilesProvider>
	);
}

export default App;

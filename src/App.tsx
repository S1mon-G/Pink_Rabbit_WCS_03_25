import { Outlet } from "react-router";

import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import "./App.css";

import "./fonts/DynaPuff-Regular.ttf";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Navbar />
		</>
	);
}

export default App;

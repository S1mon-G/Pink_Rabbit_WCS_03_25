import { Outlet } from "react-router";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./App.css";

import "./fonts/DynaPuff-Regular.ttf";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Nav />
		</>
	);
}

export default App;

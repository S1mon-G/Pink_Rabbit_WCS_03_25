import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Profilesdata from "./assets/data/profilesdata";
import Profile from "./pages/Profile";

function App() {
	return (
		<>
			<Header />
			<Profile />
			<Nav />
		</>
	);
}

export default App;

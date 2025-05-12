import "./Navbar.css";
import { NavLink } from "react-router";

function Navbar() {
	return (
		<>
			<nav className="menu-nav">
				<h2 className="menu-title">menu</h2>
				<NavLink to="/">
					<img
						src="./src/images/home-icon.png"
						alt="icône de l'accueil"
						id="nav-icon"
					/>
				</NavLink>
				<NavLink to="/quiz">
					<img
						src="./src/images/quiz-icon.png"
						alt="icône du quiz"
						id="nav-icon"
					/>
				</NavLink>
				<NavLink to="/chat">
					<img
						src="./src/images/chat-icon.png"
						alt="icône du chat"
						id="nav-icon"
					/>
				</NavLink>
				<NavLink to="/profile-favourites">
					<img
						src="./src/images/favourite-icon.png"
						alt="icône des favoris"
						id="nav-icon"
					/>
				</NavLink>
				<NavLink to="/cocktail-list">
					<img
						src="./src/images/cocktail-icon.png"
						alt="icône de la liste de cocktail"
						id="nav-icon"
					/>
				</NavLink>
			</nav>
		</>
	);
}

export default Navbar;

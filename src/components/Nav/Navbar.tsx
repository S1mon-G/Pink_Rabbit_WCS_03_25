import "./Navbar.css";
import { NavLink } from "react-router";

import chatIcon from "../../images/chatIcon.png";
import homeIcon from "../../images/homeIcon.png";
import cocktailIcon from "../../images/cocktailIcon.png";
import favouriteIcon from "../../images/favouriteIcon.png";
import quizIcon from "../../images/quizIcon.png";

function Navbar() {
	return (
		<>
			<nav className="menu-nav">
				<h2 className="menu-title">menu</h2>
				<NavLink to="/">
					<img src={homeIcon} alt="icône de l'accueil" id="nav-icon" />
				</NavLink>
				<NavLink to="/quiz">
					<img src={quizIcon} alt="icône du quiz" id="nav-icon" />
				</NavLink>
				<NavLink to="/chat">
					<img src={chatIcon} alt="icône du chat" id="nav-icon" />
				</NavLink>
				<NavLink to="/profile-favourites">
					<img src={favouriteIcon} alt="icône des favoris" id="nav-icon" />
				</NavLink>
				<NavLink to="/cocktail-list">
					<img
						src={cocktailIcon}
						alt="icône de la liste de cocktail"
						id="nav-icon"
					/>
				</NavLink>
			</nav>
		</>
	);
}

export default Navbar;

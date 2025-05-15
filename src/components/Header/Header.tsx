import "./Header.css";

import pinkRabbitLogo from "../../assets/images/pink_Rabbit_logo.png";

function Header() {
	return (
		<>
			<img src={pinkRabbitLogo} alt="logo de pink rabbit" className="pr-logo" />
		</>
	);
}

export default Header;

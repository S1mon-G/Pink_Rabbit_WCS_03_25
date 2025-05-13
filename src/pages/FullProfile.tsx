import { useNavigate } from "react-router";

function FullProfile() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/chat");
	};
	return (
		<>
			<h1>Coucou</h1>
			<button type="button" onClick={handleClick} className="chat-button">
				<h2>Let's chat</h2>
			</button>
		</>
	);
}

export default FullProfile;

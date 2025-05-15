import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import RulesCarousel from "../components/RulesCarousel/RulesCarousel";

function Home() {
	const [hasOpenedAlert, setHasOpenedAlert] = useState(
		sessionStorage.getItem("hasAlertOpened") === "true",
	);
	const navigate = useNavigate();

	const handleAlert = useCallback(() => {
		if (hasOpenedAlert) return;
		setHasOpenedAlert(true);

		Swal.fire({
			title: "💘",
			text: "L'amour c'est enivrant mais l'alcool est à consommer avec modération",
			showDenyButton: true,
			confirmButtonText: "J’ai plus de 18 ans 👌",
			denyButtonText: "je suis trop jeune 😞",
			allowOutsideClick: false,
			allowEscapeKey: false,
			focusConfirm: false,
			background: "linear-gradient(#f2059f, #f20505)",
			color: "#ffff",
		}).then((result) => {
			if (result.isDenied) {
				window.location.href = "https://www.google.com";
			}
			sessionStorage.setItem("hasAlertOpened", "true");
			setHasOpenedAlert(true);
		});
	}, [hasOpenedAlert]);

	useEffect(() => {
		handleAlert();
	}, [handleAlert]);

	return (
		<>
			<RulesCarousel />
			<button
				type="button"
				className="start-button"
				onClick={() => {
					navigate("/profile-list");
				}}
			>
				<h2>c'est parti !</h2>
			</button>
		</>
	);
}

export default Home;

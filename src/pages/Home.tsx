import Swal from "sweetalert2";
import RulesCarousel from "../components/RulesCarousel/RulesCarousel";

Swal.fire({
	title: "💘",
	text: "L'amour c'est enivrant mais l'alcool est à consommer avec modération",
	showDenyButton: true,
	confirmButtonText: "J’ai plus de 18 ans 👌",
	denyButtonText: "je suis trop jeune 😞",
	allowOutsideClick: false,
}).then((result) => {
	if (result.isDenied) {
		window.location.href = "https://www.google.com";
	}
});

function Home() {
	return (
		<>
			<h2>Bienvenue sur l'appli de rencontre pour les fans de mixologie 🍸 </h2>
			<h2>Comment ça marche ?</h2>
			<RulesCarousel />
		</>
	);
}

export default Home;

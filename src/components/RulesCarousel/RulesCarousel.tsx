import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./RulesCarousel.css";

const handleDragStart = (e: React.DragEvent<HTMLDivElement>) =>
	e.preventDefault();

const items = [
	<div key={0} onDragStart={handleDragStart}>
		<h3>
			Bienvenue sur l'appli de rencontre <br />
			pour les fans de mixologie 🍸{" "}
		</h3>
	</div>,
	<div key={1} onDragStart={handleDragStart}>
		<h3 className="second-pannel">Comment ça marche ?</h3>
	</div>,
	<div key={2} onDragStart={handleDragStart}>
		<h1>1</h1>
		<p>Filtre les profils selon tes préférences</p>
	</div>,
	<div key={3} onDragStart={handleDragStart}>
		<h1>2</h1>
		<p>Choisis le profil qui t’intéresse</p>
	</div>,
	<div key={4} onDragStart={handleDragStart}>
		<h1>3</h1>
		<p>Réponds au quiz et tente de débloquer le profil complet</p>
	</div>,
];

const RulesCarousel = () => (
	<>
		<section className="carousel">
			<div className="carousel-card">
				<AliceCarousel
					mouseTracking
					items={items}
					infinite
					activeIndex={0}
					autoPlayInterval={3000}
					disableDotsControls={false}
					disableButtonsControls={false}
				/>
			</div>
		</section>
	</>
);

export default RulesCarousel;

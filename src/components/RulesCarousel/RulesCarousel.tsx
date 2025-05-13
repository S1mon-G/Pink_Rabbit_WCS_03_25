import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./RulesCarousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
	<div key={0} onDragStart={handleDragStart}>
		<h1>1</h1>
		<p>Filtre les profils selon tes préférences</p>
	</div>,
	<div key={1} onDragStart={handleDragStart}>
		<h1>2</h1>
		<p>choisis le profil qui t’intéresse</p>
	</div>,
	<div key={2} onDragStart={handleDragStart}>
		<h1>3</h1>
		<p>répond au quizz et tente de débloquer le profil complet</p>
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

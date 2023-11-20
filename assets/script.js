const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgBanner = document.querySelector('.banner-img');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

let currentDots = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
		} else {
			dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
		}
	});
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {

	//correction du bug pour la première et la dernière image
	if (currentDots === -1 && direction === 'left') {
		currentDots = slides.length - 1;
	} else if (currentDots === slides.length && direction === 'right') {
		currentDots = 0;
	}

	// Mettre à jour l'image
	const imagePath = `assets/images/slideshow/${slides[currentDots].image}`;
	imgBanner.src = imagePath;
	imgBanner.alt = `Slide ${currentDots + 1}`;

	// Mettre à jour le texte
	const tagLine = slides[currentDots].tagLine;
	document.querySelector('p').innerHTML = tagLine;

	console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
leftArrow.addEventListener('click', function () {
    currentDots = (currentDots - 1);
    updateCarousel(currentDots, 'left');
    updateDots(currentDots); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
rightArrow.addEventListener('click', function () {
    currentDots = (currentDots + 1) ;
    updateCarousel(currentDots, 'right');
    updateDots(currentDots); // Mettez à jour les points indicateurs
});

// Afficher la première diapositive au chargement de la page
updateCarousel(currentDots, 'démarrage');
updateDots(currentDots); // Mettez à jour les points indicateurs pour la première diapositive
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

let currentImg = 0;

//Les points indicateurs
function MAJDots(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); // Ajoutez
		} else {
			dot.classList.remove('dot_selected'); // Supprimez
		}
	});
}

function MAJCarousel(index, direction) {

	if (currentImg === -1 && direction === 'left') {
		currentImg = slides.length - 1;
	} else if (currentImg === slides.length && direction === 'right') {
		currentImg = 0;
	}

	
	const imagePath = `assets/images/slideshow/${slides[currentImg].image}`;
	imgBanner.src = imagePath;
	imgBanner.alt = `Slide ${currentImg + 1}`;

	
	const tagLine = slides[currentImg].tagLine;
	document.querySelector('p').innerHTML = tagLine;
}

leftArrow.addEventListener('click', function () {
	currentImg = (currentImg - 1);
	MAJCarousel(currentImg, 'left');
	MAJDots(currentImg); // Mettez à jour les points indicateurs
});


rightArrow.addEventListener('click', function () {
	currentImg = (currentImg + 1);
	MAJCarousel(currentImg, 'right');
	MAJDots(currentImg);
});
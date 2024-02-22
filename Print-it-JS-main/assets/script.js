// Tableau de diapositives
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

// Variable
let i = 0
let myBanner = document.getElementById("banner")
let mooveOnRight = document.getElementById("right")
let mooveOnLeft = document.getElementById("left")
let dotsContainer = document.querySelector(".dots");

// Mouvement vers la droite aprés le click sur la flêche
mooveOnRight.addEventListener("click", () => {
	afficherImageSuivante();
	let img = slides[i]
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + img.image
	document.querySelector("#banner p").innerHTML = img.tagLine
	dynamicBullets(i);
})

function afficherImageSuivante() {
	if (i === slides.length - 1) {
		i = 0;
	} else {
		i++;
	}
}

// Mouvement vers la droite aprés le click sur la flêche
mooveOnLeft.addEventListener("click", () => {
	afficherImagePrecedente();
	let img = slides[i]
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + img.image
	document.querySelector("#banner p").innerHTML = img.tagLine
	dynamicBullets(i);
})

function afficherImagePrecedente() {
	if (i === 0) {
		i = slides.length - 1;
	} else {
		i--;
	}
}

// Créez et ajoutez les éléments .dot enfants en fonction de la longueur du tableau slides
for (let j = 0; j < slides.length; j++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
}

// Sélectionnez à nouveau les éléments .dot après les avoir ajoutés
const dotsEl = dotsContainer.querySelectorAll(".dot");

// Fonction pour mettre à jour les bullets dynamiquement
function dynamicBullets(count) {
	dotsEl.forEach((dot, index) => {
		if (index === count) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}
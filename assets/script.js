// Tableau des slides
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
	},
	{
		"image": "slide5.jpg",
		"tagLine": "Exemple <span>le slider fonctionne bien</span>"
	}
]

// Variables générales
let i = 0

// Fonction initialisation bullet points
function initBulletPoints() {
	for (let i = 0; i < slides.length; i++) {
		let dots = document.querySelector(".dots")
		let dot = document.createElement("span")
		dot.classList.add("dot")
		if (i == 0) {
			dot.classList.add("dot_selected")
		}
		dots.appendChild(dot)	
	}
}

// Initialisation bullet points
initBulletPoints()

// Fonction initialisation slide
function initSlide() {
	let imagePath = slides[i].image
	let slide = document.querySelector(".banner-img")
	slide.setAttribute("src", "./assets/images/slideshow/" + imagePath)
}

// Fonction initialisation texte slide
function initSlideText() {
	let tagLine = slides[i].tagLine
	let slideText = document.querySelector("#banner p")
	slideText.innerHTML = tagLine
}

// Fonction changement bullet point actif
function changeActiveDot() {
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	let dotsList = document.querySelectorAll(".dots span")
	let activeDot = dotsList[i]
	activeDot.classList.add("dot_selected")
}

// Fonction initialisation slideshow
function initSlideshow() {
	initSlide()
	initSlideText()
	changeActiveDot()
}

// Fonction slide suivante
function nextSlide() {
	i++
	initSlideshow()
}

// Fonction slide precedente
function previousSlide () {
	i--
	initSlideshow()
}

// Event listener clic fleche droite
let arrowRight = document.getElementById("arrowRight")
arrowRight.addEventListener("click", () => {
	if (i == (slides.length - 1)) {
		i = 0
		initSlideshow()
	} else {
		nextSlide()
	}
})

// Event listener clic fleche gauche
let arrowLeft = document.getElementById("arrowLeft")
arrowLeft.addEventListener("click", () => {
	if (i == 0) {
		i = (slides.length - 1)
		initSlideshow()
	} else {
	previousSlide()
	}
})


// Tests

// // Recuperation objet tableau
// console.log(slides[0].image)

// // Changement deuxieme image sur clic fleche droite
// function deuxiemeImage() {
// 	let slide = document.querySelector(".banner-img")
// 	let imagePath = slides[1].image
// 	slide.setAttribute("src", "./assets/images/slideshow/" + imagePath)
// }
// let arrowRight = document.getElementById("arrowRight")
// arrowRight.addEventListener("click",() => {
// 	deuxiemeImage()
// })

// // Creation element bullet point du carrousel
// let dot = document.createElement("a")
// dot.setAttribute("href", "#")
// dot.setAttribute("class", "dot")

// // Insertion du bullet point sur le slider
// let dots = document.querySelector(".dots")
// dots.appendChild(dot)

// // Insertion des bullet points en fonction du nb de slides
// let dots = document.querySelector(".dots")

// 	// Creation premier bullet point
// let dot = document.createElement("span")
// dot.setAttribute("class", "dot dot_selected")
// dots.appendChild(dot)

// 	// Creation des bullet points suivants
// for (let i = 1; i < slides.length; i++) {
// 	let dot = document.createElement("span")
// 	dot.setAttribute("class", "dot")
// 	dot.setAttribute("href", "#")
// 	dots.appendChild(dot)
// }
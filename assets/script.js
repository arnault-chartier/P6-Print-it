// Tableau des slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Event listeners sur les fleches du carrousel
let arrowLeft = document.getElementById("arrowLeft")
arrowLeft.addEventListener("click",() => {
	alert("Clic gauche")
})

let arrowRight = document.getElementById("arrowRight")
arrowRight.addEventListener("click",() => {
	alert("Clic droit")
})

// // Creation element bullet point du carrousel
// let dot = document.createElement("a")
// dot.setAttribute("href", "#")
// dot.setAttribute("class", "dot")

// // Insertion du bullet point sur le slider
// let dots = document.querySelector(".dots")
// dots.appendChild(dot)

// Insertion des bullet points en fonction du nb de slides
let dots = document.querySelector(".dots")

	// Creation premier bullet point
let dot = document.createElement("a")
dot.setAttribute("class", "dot dot_selected")
dot.setAttribute("href", "#")

dots.appendChild(dot)

	// Creation des bullet points suivants
for (let i = 1; i < slides.length; i++) {
	let dot = document.createElement("a")
	dot.setAttribute("class", "dot")
	dot.setAttribute("href", "#")

	dots.appendChild(dot)
}
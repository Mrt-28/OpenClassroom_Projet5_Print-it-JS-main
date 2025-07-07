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


const preloadedImages = [];

for (let i = 0; i < slides.length; i++) {
	const img = new Image();
	img.src = `./assets/images/slideshow/${slides[i].image}`;
	preloadedImages.push(img);
}

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const dot = document.querySelector(".dots");
const dots = [];

for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div");
	newDot.classList.add("dot");
	dots.push(newDot);
	dot.appendChild(newDot);
	if (i === 0) {
		newDot.classList.add("dot_selected");
	}
}

let i=0;
arrowRight.addEventListener("mousedown", function (event) {
	if(event.button === 0){
		if(i<dots.length-1){
			i++;
		}
		else{
			i=0;
		}
		updateSlide();
		updateDots();
	}
});
arrowRight.addEventListener("contextmenu", function (event) {
	event.preventDefault();
}); 

arrowLeft.addEventListener("mousedown", function(event) {
	if (event.button === 0) {
		if(i>0){
			i--;
		}
		else{
			i=dots.length-1;
		}
		updateSlide();
		updateDots();
	}
});
arrowLeft.addEventListener("contextmenu", function (event) {
	event.preventDefault();
});

function updateSlide(){
	bannerImg.src = preloadedImages[i].src;
	bannerText.innerHTML = slides[i].tagLine;
}

function updateDots() {
	for (let j = 0; j < dots.length; j++) {
		if (j === i) {
			dots[j].classList.add("dot_selected");
		} else {
			dots[j].classList.remove("dot_selected");
		}
	}
}
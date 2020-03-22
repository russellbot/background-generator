var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector(".randomize");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";

	css.textContent = body.style.background + ";";
}

function randomizeColors() {
	var randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);

	body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 +")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomize.addEventListener("click", randomizeColors)
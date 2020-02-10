var input = document.querySelector("input");
var button = document.querySelector(".submit");
var show = document.querySelector("p");

function display(response) {
	show.innerHTML = "";
	var data = response;
	var rate = {};
	rate = data.rates;
	console.log(rate);
	for (let [key, value] of Object.entries(rate)) {
		let p = document.createElement("p");
		p.textContent = `1 ${input.value.toUpperCase()} is ${value} ${key} `;
		show.appendChild(p);
	}
}
function getData() {
	fetch(`https://api.exchangerate-api.com/v4/latest/${input.value}`)
		.then(response => response.json())
		.then(res => display(res));
}

button.addEventListener("click", getData);

var inputCountry = document.querySelector(".base_currency");
var input = document.querySelector(".amount");

var button = document.querySelector(".submit");
var div = document.querySelector(".show");

function display(response) {
	div.innerHTML = "";
	var data = response;
	var rate = {};
	rate = data.rates;
	for (let [key, value] of Object.entries(rate)) {
		let a = document.createElement("a");
		let value = (a.textContent = ` ${inputCountry.value.toUpperCase()} is ${value.toFixed(
			2
		)} ${key}`);
		div.appendChild(a);
	}
}
function getData() {
	fetch(`https://api.exchangerate-api.com/v4/latest/${inputCountry.value}`)
		.then(response => response.json())
		.then(res => display(res));
}
button.addEventListener("click", getData);

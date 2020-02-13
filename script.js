var inputCountry = document.querySelector(".base_currency");
inputCountry.value = inputCountry.value.toUpperCase();
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
		let calculate = input.value * value;
		a.innerHTML = `${input.value} is <strong>${calculate.toFixed(
			2
		)}</strong> ${key}`;
		div.appendChild(a);
	}
	inputCountry.value = "";
	input.value = "";
}
function getData() {
	if (inputCountry.value.trim() != "" && input.value.trim() != "") {
		fetch(
			`https://api.exchangerate-api.com/v4/latest/${inputCountry.value}`
		)
			.then(response => response.json())
			.then(res => display(res));
	}
}
button.addEventListener("click", getData);

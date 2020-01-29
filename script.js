var input = document.querySelector("input");
var button = document.querySelector(".submit");
var rate = document.querySelector("p");

function display(response) {
	// rate.innerHTML = "";
	var data = response;
	var rate = {};
	rate = data.rates;
	console.log(rate);
	for (let [key, value] of Object.entries(rate)) {
		let p = document.createElement("p");
		p.textContent = `1 ${input.value.toUpperCase()} is ${value} ${key} `;
		document.body.append(p);
	}
}

function getData() {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", () => display(JSON.parse(xhr.response)));
	xhr.open(
		"GET",
		`https://api.exchangerate-api.com/v4/latest/${input.value}`
	);
	xhr.send();
}
button.addEventListener("click", getData);

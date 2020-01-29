var base = document.querySelector("input");
var button = document.querySelector(".submit");
var rate = document.querySelector("p");

function display(response) {
	rate.innerHTML = "";
	var data = response;
	// console.log(data);
	rate.innerHTML = `1 ${base.value} is ${data.rates.AED} AED`;
}

function getData() {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", () => display(JSON.parse(xhr.response)));
	xhr.open("GET", `https://api.exchangerate-api.com/v4/latest/${base.value}`);
	xhr.send();

	// console.log(JSON.parse(xhr.response));
}
button.addEventListener("click", getData);

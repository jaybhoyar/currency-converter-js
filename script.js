var base = document.querySelector("input");
var button = document.querySelector(".submit");

function display(response) {
  var data = response;
  
}

function rates() {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("load", () => display(JSON.parse(xhr.response)));
	xhr.open("GET", `https://api.exchangerate-api.com/v4/latest/${base.value}`);
	xhr.send();

	// console.log(JSON.parse(xhr.response));
}

button.addEventListener("click", rates);

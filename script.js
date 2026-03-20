// your code here

const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlDisplay = document.getElementById("url");

button.addEventListener("click", (event) => {
	event.preventDefault();
	const name = nameInput.value;
	const year = yearInput.value;

	let queryString = `?name=${name}&year=${year}`; // Create a query string using template literals that includes the name and year parameters
    let fullURL = `https://localhost:8080/${queryString}`;

	urlDisplay.textContent = fullURL;
})
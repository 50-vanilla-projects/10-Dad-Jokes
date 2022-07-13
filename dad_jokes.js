const joke = document.querySelector(".joke");
const button = document.querySelector("button");

getJoke();

function getJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

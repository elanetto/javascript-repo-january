const dropdown = document.querySelector('#circles');
const circleContainer = document.querySelector(".circles-container");

dropdown.onchange = function (event) {
    circleContainer.innerHTML = "";
    for (let x = 1; x <= this.value; x++) {
        circleContainer.innerHTML += `
            <div class="circles">${x}</div>
        `
    }
}
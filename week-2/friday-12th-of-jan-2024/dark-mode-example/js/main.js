const body = document.querySelector("body");
const toggleBtn = document.querySelector(".mode-btn");
let isDarkMode = false; // my toggle

function init() {
    const currentMode = window.localStorage.getItem("mode");
    if (currentMode) {
        console.log("currentMode: ", currentMode);
        if (currentMode === "dark") {
            isDarkMode = true;
            body.style.backgroundColor = "#0A0A0A";
        } else {
            isDarkMode = false;
            body.style.backgroundColor = "#D9D9D9";
        }
    } else {
        console.log("no mode yet");
    }
}

init();

toggleBtn.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    console.log("isDarkMode: ", isDarkMode);
    if (isDarkMode) {
        body.style.backgroundColor = "#0A0A0A";
        window.localStorage.setItem("mode", "dark");
    } else {
        body.style.backgroundColor = "#D9D9D9";
        window.localStorage.setItem("mode", "light");
    }
});
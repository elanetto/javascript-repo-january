

// function expressions

// variable function in JS
const someFunction = function () {
    console.log("hello I am a person");
}
someFunction();
// you can only activate this under the function code


// normal function in JS
function saySomethingFunction () {
    console.log("Hello, you!");
}
saySomethingFunction();
// you can call this both under and over where 
// the function is written in the code


// Question 2
// Add eventListener
// select the .btn

const button = document.querySelector(".btn");

console.log(button);

// way 1

const handleClickTwo = function() {
    console.log("You clicked on THIS!");
}

button.addEventListener("click", handleClick);

function handleClick(){
    console.log("Wow! You clicked!");
}

button.addEventListener("click", function(){
    console.log("Oh my god, you clicked me!");
})

// way 2

button.onclick = function(){
    console.log("Oh WOW! You clicked me using onclick!");
}

button.onclick = function (event) {
    console.log(event.target.value);
    console.log(this.value);
}

// Q3

// onKeyDown // the event will trigger when you press on
// onKeyUp // the event will trigger when you release the key
// The onKeyPress

// onKeyDown, onKeyUp and onKeyPress --> NO ONE IS USING THESE ANYMORE

const myFirstNameInput = document.querySelector("#firstName");
console.log("myFirstNameInput", myFirstNameInput); //yes! It is selected!

const handleKeyPress = function (event) {
    console.log("a key is pressed");
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);


// Q4
// hover event (detecting hover)

// const theHoverBtn = document.querySelector(".pet-btn");

// const handleMouseOver = function (event) {
//     console.log("event.target.dataset.animal",event.target.dataset.animal);
// }

// theHoverBtn.addEventListener("mouseover",handleMouseOver)

// // Change the background color of the body when you hover

// const background = document.querySelector("body");
// console.log("This is the ad: ", background);

// // background.style.backgroundColor = "red";

// let lightSwitch = function(){
//     if (theHoverBtn.addEventListener("mouseover",handleMouseOver)) {
//         background.style.backgroundColor = "red";
//     } else {
//         background.style.backgroundColor = "white";
//     }
// }

// background.addEventListener("mouseover", lightSwitch);

// Anna sin

const petButton = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
    console.log(event.target.dataset.animal);
    event.target.style.background = "red";
};

function handleMouseOut(event){
    event.target.style.background = "blue";
}

petButton.addEventListener("mouseout", handleMouseOut);
petButton.addEventListener("mouseover", handleMouseOver);








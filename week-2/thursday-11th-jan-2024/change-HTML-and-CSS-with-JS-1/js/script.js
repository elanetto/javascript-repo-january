// hello

console.log("Day 7");

// I want to create a function in my calculator app
// to sum three numbers
// please write this function for me

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// every function will return something
// function --> return

addThreeNumbers(10, 20, 50);
console.log(addThreeNumbers(10, 20, 50));

// but we want to store this. How?

let resultOfSummation = addThreeNumbers(10, 20, 50);
console.log("result: ", resultOfSummation);


// Task: Create a function that multiplies three numbers

function multiplyThreeNumbers(num1, num2, num3) {
    return num1 * num2 * num3;
}

let resultOfMultiplication = multiplyThreeNumbers(10, 20, 30);
console.log("Multiply result: ", resultOfMultiplication);

// please select the heading h1 and when I click on the btn "change heading"
// change it to be "It is a good day today"

// When I click on the btn "change colors" I would like to change the
// background color of the body to be blue
// and the heading h1 to be green

// Teachers solution:

let heading = document.querySelector("h1");
let button = document.querySelector("button");
let buttonColors = document.querySelector(".colors");
let body = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "Happy birthday, Hesh!";
}

button.onclick = changeHeading;

function changeColors() {
    body.style.backgroundColor = "#83CAD8";
    heading.style.color = "#1B213C";
}

buttonColors.onclick = changeColors;

// function inside objects

const pet = {
    type : "cat",
    name : "kitty",
    age : 10,
    isFriendly : false,
    mjauMjau : function() {
        console.log("The sound of the cat is MJAAAU");
    }
};

console.log("type: ", pet.type);
console.log("is the cat friendly: ", pet.isFriendly);

pet.mjauMjau();

// Task: Make the function ru whn you click the button:

let buttonCat = document.querySelector(".mjau");
buttonCat.onclick = pet.mjauMjau;

// console.log("is the console working?");

// if and else statements

let temp = 19;

if (temp > 30) {
    console.log("It is very hot, man!")
} else if (temp > 20) {
    console.log("The weather is nice ;)")
} else {
    console.log("the weather is very cold!")
}


// Lunch test

let money = 120;

if (money < 40) {
    console.log("I do not have enough money for lunch :(")
} else if (money > 50) {
    console.log("I'm payig for all of us!")
} else if (money < 60) {
    console.log("Let's have lunch! I can afford it today!")
}

let score = 50;

if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("YOU FAILED");
}

let grade = "A";

// A means very good
// B means good
// C means avarange
// D means you need to think to do something else
// Otherwise you failed badly

if (grade === "A") {
    console.log("Very good! " + "You got the grade " + grade + "!");
} else if (grade == "B") {
    console.log("Good! " + "You got the grade " + grade);
} else if (grade == "C") {
    console.log("Avarange. " + "You got the grade " + grade);
} else if (grade == "D" ) {
    console.log("Please work harder. " + "You got the grade " + grade);
} else {
    console.log("You failed. " + "You got the grade " + grade);
}

// add a break to the sentences in the console log:
const sentences = `First sentence. \n Second sentence.`
console.log(sentences);

// Traffick light
// 2. Switch case

let color = "red";

switch (color){
    case "red":
        console.log("stop!");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("No traffic lights go murder people!");
}


// Task before pause

let gradeLetter = "A"; // Change this value to test different outcomes

switch (gradeLetter) {
    case "A":
        console.log("Outstanding! You got an " + gradeLetter);
        break;
    case "B":
        console.log("Very Good! You got an " + gradeLetter);
        break;
    case "C":
        console.log("Good effort! You got an " + gradeLetter);
        break;
    case "D":
        console.log("Your work needs improvement. You got an " + gradeLetter);
        break;
    case "F":
        console.log("You failed. You got an " + gradeLetter);
        break;
    default:
        console.log("Invalid grade");
}

// 3. scope

var name = "hesham"; // global scope

let myName = "hesham"; // function scope

var greeting = "Hello";

if(true){
    var greeting = "Hi"; // re-decleared my variable
    console.log(greeting); // hi
}
console.log(greeting) // hi

// Explained: var sets the variable both inside and outside of the if loop

let message = "Hello";

if (true) {
    let message = "Hi";
    console.log(message); // Hi
}

console.log(message) // Hello

// Explained: let is a function scope. It only changed inside the curly brackets.

// Try NOT to use VAR at all. NEVER re-delceare a variable. Use LET.

// const --> Global scope / Unchangable

// const letter = "A";

// letter = "B";
// console.log(letter); // wont work

// If you change the const to a let, then it will work

const teacher = "Hesh";
console.log(teacher)

if(true){
    console.log(teacher);
}

console.log(teacher);
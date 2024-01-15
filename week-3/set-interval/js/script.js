// let count = 0;

// const intervalId = setInterval(function(){
//     console.log("Testing testing");
//     count++; // increment
//     if(count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

// const nameList = document.querySelector(".container");
// let newListItem = document.querySelector("li");

// let counter = 0;

// nameList = setInterval(function(){
//     newListItem.innerHTML = "test! ", count+;
//     count++;
//     if(count === 6){
//         clearInterval(newListItem);
//     }
// }, 2000);

const container = document.querySelector(".container");
let counter = 0;

const ulIntervalId = setInterval(function(){
    counter++; // add by 1
    container.innerHTML += `<li> Hello there ${counter} </li>`;
    if(counter === 5) {
        clearInterval(ulIntervalId);
    }
}, 1000);

// Create an empty user object
// Add a name property with the value Jonas
// Add a surname property with the value The Great
// Change the value of name to Helene
// Remove the name property from the object

let user = {}

user.name = "Jonas";
user.surname = "The Great";
user.name = "Helene";

delete user.name;

console.log(user);

// Question 2

// Create a function isEmpty(obj)
// that returns true if the object
// has no properties and false if
// there is at least one property.


{   // key
    name: "Hesh";
    // key
    age: 32;
}


function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}

const  isMyObjectEmpty = isEmpty(user);
console.log("is my object empty?", isMyObjectEmpty);


// Q3 - typical interview question

// Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Find the maximum and minimum value of the array
// 2) Write all positive and even numbers into another array.
// Display the results on the screen

// To do this, start with sorting the numbers from small to big, and then 
// Get the first (0) number of the array, and then find the last number (0-1) o the array.

let numbers = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];

console.log(numbers);

// sort from low to hight:

numbers.sort(function(a, b){return a-b});

let lowest = numbers[0];
console.log("sorted numbers: ", numbers);
console.log("Lowest: ", numbers[0]);

let maxNumber = numbers[numbers.length - 1];

console.log("number of items: ", numbers.length)
console.log("Max: ", maxNumber);
console.log("Max index number 14 - 1 gives the index of 13 (because index starts at 0)", maxNumber);

// Get only the positive numbers:

// let positiveNumbers = if (numbers > 0) {
    
// }

// local storage
// session storage

const myVariable = "some text";

window.localStorage.setItem("variableOne", myVariable);

window.localStorage.setItem("name", "Hesham");

// save objects
// save arrays

let car = {
    make: "bmw",
    model: 1992,
    price: 2000
};

// we have to make this into a string to be able to save it locally.
// to do that, use the JSON.stringify() and add the object within the ():

window.localStorage.setItem("myCar", JSON.stringify(car));

// Task: 
// Use local storage
// Create three items there
// First item: A string
// Second item: An object
// Third item: An array

let puddingFlavour = "Chocolate";
let coffee = {
    origin : "South Africa",
    intensity : "medium 7"
}
let shoppingList = ["coffee", "jam", "oat milk"];

// Save the items in the local storage
// Use JSON.Stringify and JSON.parse

window.localStorage.setItem("puddingFlavourChocolate",puddingFlavour);
window.localStorage.setItem("coffee", JSON.stringify(coffee));
window.localStorage.setItem("Shopping list", JSON.stringify(shoppingList));



console.log("Pudding flavour:  ",puddingFlavour);

const myCoffeeParsed = JSON.parse(coffee);
console.log("coffee: ",myCoffeeParsed);

const myListParsed = JSON.parse(shoppingList);
console.log("coffee: ",myListParsed);
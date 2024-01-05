// loops are for repeating

for(let i = 0; i < 5; i++){
    console.log(i);
}

// i = 0
// true (is 0 less then 5? yes, then it's true)
// i = 1

// i = 1
// true (is 1 less then 5? yes, then it's true)
// console.log (1)
// 1 + 1 = 2
// i = 2

// i = 2
// true (is 2 less then 5? yes, then it's true)
// console.log(2)
// 2 + 1 = 3
// i = 3

// i = 3
// true (is 3 less then 5? yes, then it's true)
// console.log (3)
// 3 + 1 = 4
// i = 4

// i = 4
// true (is 4 less then 5? yes, then it's true)
// console.log (4)
// 4 + 1 = 5
// i = 5

// i = 5
// FALSE (is 5 less then 5? No, then it's FALSE)
// nothing happens

console.log("Task:")

// Task: Count from 1 to 10:

for(let i = 1; i < 11; i++){
    console.log(i);
}

console.log("Task with cars:")

// Task: Make an array of cars

//               0       1       2           3
const cars = ["Tesla", "BMW", "Volvo", "VolvsWagen"];

console.log(cars[0]); // shows Tesla
console.log(cars[3]); // shows VolvsWagen

console.log(cars.length);

const totalNumberOfCars = cars.length;

for (let i = 0; i < totalNumberOfCars; i++) {
    console.log(cars[i]);
}

console.log("- - - - - Fruit task: - - - - -")

// Given an array of fruits
// write a for loop to print
// each fruit in the array

//                 0        1         2           3         4
const fruit = ["banana", "kiwi", "grapefruit", "apple", "grapes"];

console.log(fruit[0]); // prints banana

const totalNumberOfFruit = fruit.length;
console.log(fruit.length);

for (let i = 0; i < totalNumberOfFruit; i++) {
    console.log(fruit[i]);
}

// How to get the last item in the array

console.log(fruit[4]); 
// However, this will not work when you have over 
//5 mill items in the array

console.log("The length of the array is: " + totalNumberOfFruit);
console.log(fruit.length - 1);
console.log(fruit[fruit.length - 1]);

// You want to get the total number of items i the
// array, and then minus one of it
// then you will get the very last item of the array
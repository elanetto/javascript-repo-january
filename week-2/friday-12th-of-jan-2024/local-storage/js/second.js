const myName = window.localStorage.getItem("name");

console.log("myName: ",myName);

// this did not work for me? What is wrong?
// I wrote SET item, but the correct one was GET item!
// Now, it works!

const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// parse

const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);

let bestFlavour = window.localStorage.getItem("puddingFlavourChocolate");
console.log("The best flavour is: ",bestFlavour);



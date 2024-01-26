const showPetName = function (name){
    console.log("the pet name is: " + name);
}

showPetName("Pet One");

//

showPetNameTwo("Pet Two");

function showPetNameTwo (name){
    console.log("Number two: " + name);
}

// Fat arrow function
const showPetNameYes = (name) => {
    console.log("the pet name is " + name);
}

showPetNameYes("Pet Yes");

//

const sum = (num1, num2) => {
    console.log(num1 + num2);
}

sum(100,200);


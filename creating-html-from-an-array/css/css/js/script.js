const pets = [
    {
        type: "dog",
        color: "brown",
        age: 10,
        friendly: true,
    },
    {
        color: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        color: "#00ff00",
        age: 20,
        friendly: false,
    },
];

// Select the pet-container class

const petContainer = document.querySelector(".pet-container");
console.log("Pet container: ", petContainer);

// used let because we will keep adding stuff to it



// Create a html variable to hold our html in it when we use the loop
// Loop over the array
// change the innerHTML of the pet-container class div

const totalItemsOfPets = pets.length;
console.log(totalItemsOfPets);

for(let i = 0; i < totalItemsOfPets; i++){
    console.log(pets[i]);
}

let html = "";

for (let i = 0; i < totalItemsOfPets; i++) {
    console.log(pets[i].color);
    console.log(pets[i].age);

    html += `
        <div class="pet pet-detail">
            <p style="color: ${pets[i].color}"><b>The color of the animal</b></p>
            <h2>Age: ${pets[i].age}</h2>                                  
            <p>Friendly : ${pets[i].friendly ? "Yes, it is friendly" : "No, it is not friendly"}
        </div>    
    `; //                                              true                  false
    console.log(html);
}

petContainer.innerHTML = html;


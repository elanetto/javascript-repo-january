// // learn to use API

// // notice that this constant is all in upper case:

// const API_URL = "https://catfact.ninja/facts"; // link to the backend application

// // fetch (get) this information, and THEN do this
// fetch(API_URL).then((response) => response.json())
//               .then((data) => {
//                 console.log("data :", data)
//               })

// const factsContainer = document.querySelector(".facts-container");

// fetch(API_URL, { method: 'GET' }).then((response) => response.json())
//               .then((factsData) => {
//                 console.log("data 2: ", factsData.data);
//                 const totalNumberOfFacts = factsData.data.length;
//                 for(let i = 0; i < totalNumberOfFacts; i++) {
//                     factsContainer.innerHTML += `
//                     <div>
//                         <span>${factsData.data[i]}</span>
//                     </div>
//                     `
//                 }
//               })

const API_URL = "https://catfact.ninja/facts"; // LINK FOR THE BACK END APPLICATION THE API

const factsContainer = document.querySelector(".facts-container");

// GET
fetch(API_URL, {method: 'GET'}).then((response) => response.json())
    .then((factsData) => {
        console.log("data: ", factsData.data);
        const totalNumberOfFacts = factsData.data.length;
        for (let i = 0; i < totalNumberOfFacts; i++) {

            console.log(i)
            console.log(factsData.data[i])
            factsContainer.innerHTML += `
            <div>
                <span>${factsData.data[i].fact}</span>
             </div>
            `
        }
    })
// setTimeout

// a method ( function ) used to execute a function 
// after a specific period of time.

// 1.

setTimeout(function(){
    console.log("Hello, Jack");
}, 5000);



function logHello(){
    console.log("Hello Jack two");
}

setTimeout(logHello, 5000);

// 1. select the element with class .loader

const loading = document.querySelector(".loader");
console.log("loader element", loading);

// 2. use the setTimeout

setTimeout(function () {
    // 3. change the inner HTML of the loading
    loading.innerHTML = "Finished Loading my boy ;))))";
}, 5000);
// set timer for ad to appear after 1 second

const advertisement = document.querySelector(".ad");
console.log("This is the ad: ", advertisement);

setTimeout(function(){
    advertisement.style.display = "block";
},1000);
const ageInput = document.querySelector("#age");
const enterBTN = document.querySelector(".enter-btn");

enterBTN.addEventListener("click" , function(){
    console.log("Button clicked!");
    const age = ageInput.value;
    console.log("age: ", age);
    const isAgeOk = isOldEnough(age);
    console.log("isAgeOk: ", isAgeOk);
    if (isAgeOk) {
        document.location.href = "welcome.html";
    } else {
        alert("NO! You are not old enough!");
    }
});

function isOldEnough(ageToCheck) {
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
}
console.log("Hey, there!"); 

const article = document.querySelector("#post");
console.log("Is the article created? ",article);

console.dir(article);

console.log(article.dataset.author);
console.log(article.dataset.category);

const comicBtn = document.querySelector(".comic-btn");
console.log("The button: ", comicBtn);

const alertDiv = document.querySelector(".alert");

comicBtn.onclick = function(){
    alertDiv.innerHTML = `
    <h2>The author is: ${article.dataset.author}</h2>
    <p>Type: ${article.dataset.category}
    `
    alert(`The author is: ${article.dataset.author}, 
    and the type is ${article.dataset.category}`);
};

// comicBtn.onclick = function(){
//     alert(`The author is: ${article.dataset.author}, 
//     and the type is ${article.dataset.category}`);

//     showBookDetails(article.dataset.author, article.dataset.category);
// };

// function showBookDetails (author, category){
//     alert(`The author is THIS ONE: ${author}, 
//     and the type is THIIIIS ${category}`);
// }

const postImg = document.querySelector(".post-img");

postImg.addEventListener("click", function(){
    window.open(postImg.dataset.fullsize, "_self");
});
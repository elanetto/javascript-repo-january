const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

let html = "";

const totalItemsOfBooks = books.length;
console.log(totalItemsOfBooks);

const booksContainer = document.querySelector(".book-container");
console.log("Pet container: ", booksContainer);

for(let i = 0; i < totalItemsOfBooks; i++){
    console.log(books[i]);
}

for (let i = 0; i < totalItemsOfBooks; i++) {
    console.log(books[i].title);
    console.log(books[i].author);

    html += `
        <div class="book-container book-detail">
            <p>Book:</p>
            <h2>${books[i].title}</h2>
            <p><b>Author:</b> ${books[i].author}</p>
            <p><b>Available:</b> ${books[i].available ? "Yes" : "No"}</p>
        </div>
    `
}

booksContainer.innerHTML = html;
const libraryName = "The Great Library";

const books = [
    { id: 101, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Mystery", copiesAvailable: 3 },
    { id: 102, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", copiesAvailable: 5 },
    { id: 103, title: "1984", author: "George Orwell", genre: "Dystopian", copiesAvailable: 2 },
    { id: 104, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", copiesAvailable: 4 }
];

let totalBooks = books.length;

function addBook(newBook) {
    books.push(newBook);
    totalBooks = books.length;
}

function calculateTotalAvailableCopies(bookList) {
    return bookList.reduce((total, book) => total + book.copiesAvailable, 0);
}

console.log(`Library Name: ${libraryName}`);
console.log(`Total Books: ${totalBooks}`);
console.log(`Total Available Copies: ${calculateTotalAvailableCopies(books)}`);

books.forEach((book) => {
    if (book.copiesAvailable < 3) {
        console.log(`Low stock: ${book.title} has only ${book.copiesAvailable} copies available.`);
    }
});

books.forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Copies Available: ${book.copiesAvailable}`);
});

addBook({ id: 105, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", copiesAvailable: 6 });

console.log(`Updated Total Books: ${totalBooks}`);
console.log(`Updated Total Available Copies: ${calculateTotalAvailableCopies(books)}`);
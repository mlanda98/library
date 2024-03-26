function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let myLibrary = [];

function addBookToLibrary(){
  let title = prompt("Enter the book's title");
  let author = prompt("Enter the author's name of the book");
  let pages = prompt("Enter the number of pages in the book");
  let read = prompt("Enter yes if you have read the book or no if you haven't");

  myLibrary.push(new Book(title, author, pages, read));
  displayLibrary();

}

function displayLibrary(){
  let libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = "";

  myLibrary.forEach(function(book, index){
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
    <p><strong>Title:</strong> ${book.title}</p>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <p><strong>Read:</strong> ${book.read}</p>
    `;

    libraryContainer.appendChild(bookDiv);
  });
}

while (true){
addBookToLibrary();
let addAnother = prompt("Do you want to add another book (yes/no)");
if (addAnother.toLocaleLowerCase() != "yes"){
  break;
}
}


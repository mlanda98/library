function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let myLibrary = [];

function addBookToLibrary(title, author, pages, read){
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
    <p><strong>Read:</strong> ${book.read? "Yes" : "No"}</p>
    <button onclick="toggleReadStatus(${index})">Change Read Status</button>
    <button onclick="removeBook(${index})">Delete</button>
    `;

    libraryContainer.appendChild(bookDiv);
  });
}

function toggleReadStatus(index){
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary();
}
function removeBook(index){
  myLibrary.splice(index, 1);
  displayLibrary();
}
document.getElementById("add-book-button").addEventListener("click", function(){
  document.getElementById("form-container").style.display = "block";
});

document.getElementById("book-form").addEventListener("submit", function(event){
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  document.getElementById("book-form").reset();
  document.getElementById("form-container").style.display = "none";
})
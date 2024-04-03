class Book{
  constructor(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
  static myLibrary = [];

  static addBookToLibrary(title, author, pages, read){
    this.myLibrary.push(new Book(title, author, pages, read));
    this.displayLibrary();

  }

  static displayLibrary(){
    let libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = "";

  this.myLibrary.forEach(function(book, index){
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
    <p><strong>Title:</strong> ${book.title}</p>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <p><strong>Read:</strong> ${book.read? "Yes" : "No"}</p>
    <button onclick="Book.toggleReadStatus(${index})">Change Read Status</button>
    <button onclick="Book.removeBook(${index})">Delete</button>
    `;

    libraryContainer.appendChild(bookDiv);
  });
}

  static toggleReadStatus(index){
    this.myLibrary[index].read = !this.myLibrary[index].read;
    this.displayLibrary();
  }
  static removeBook(index){
    this.myLibrary.splice(index, 1);
    this.displayLibrary();
  }
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

  Book.addBookToLibrary(title, author, pages, read);

  document.getElementById("book-form").reset();
  document.getElementById("form-container").style.display = "none";
})
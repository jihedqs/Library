const myLibrary = [];

const addBtn = document.querySelector(".addBtn");
const modal = document.querySelector(".modal");

//function constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function readBtn(button, index) {
  myLibrary[index].toggleRead();
  render();
}
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").checked;
  let newbook = new Book(title, author, pages, isRead);
  myLibrary.push(newbook);
  render();
}

//render
function render() {
  let myLibraryEl = document.querySelector(".book-grid");
  myLibraryEl.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <h3>${book.title}</h3>
    <span>by: ${book.author}</span>
    <span>Number of pages: ${book.pages}</span>
    <button class="remove-btn" onclick="removeBtn(${i})">Remove</button>
    <button class="toggleRead-btn" onclick="readBtn(this, ${i})">
    ${book.read ? "Read: ✔" : "Read: ✖"}
  </button>
    `;
    bookEl.setAttribute("class", "book-card");
    myLibraryEl.appendChild(bookEl);
  }
}
//remove
function removeBtn(index) {
  myLibrary.splice(index, 1);
  render();
}

//submit
document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  modal.close();
});

//open form
addBtn.addEventListener("click", () => {
  modal.showModal();
});

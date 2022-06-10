/* eslint-disable no-unused-vars */
let books = [];

// retrieve saved books
function retrieve() {
  const data = JSON.parse(localStorage.getItem('aboutBook'));
  if (data) {
    books = JSON.parse(localStorage.getItem('aboutBook'));
  }
}
retrieve();

const main = document.querySelector('.books');

function addBook(enteredTitle, enteredAuthor) {
  books.push({ title: enteredTitle, author: enteredAuthor });
}
// Dsiplay books
function show(index) {
  const bookName = books[index].title;
  const authorName = books[index].author;

  const book = document.createElement('div');
  book.innerHTML = '';
  book.innerHTML = `
      ${bookName}
      <br>
      ${authorName}
      <br>
      <button type='button' class="remove" data-id=${index} onclick="removeBook(this)">Remove</button>
      <hr>`;
  main.appendChild(book);
}

for (let i = 0; i < books.length; i += 1) {
  show(i);
}

function removeBook(item) {
  // Get saved books
  retrieve();
  // Remove book
  books = books.filter((element) => element !== books[item.getAttribute('data-id')]);
  // Update books
  localStorage.setItem('aboutBook', JSON.stringify(books));
  // Initialize screen
  main.innerHTML = '';
  // Display books
  for (let i = 0; i < books.length; i += 1) {
    show(i);
  }
}

const add = document.querySelector('#add');

add.addEventListener('click', (e) => {
  e.preventDefault();

  const t = document.querySelector('#title').value;
  const a = document.querySelector('#author').value;
  addBook(t, a);

  // update local storage
  localStorage.setItem('aboutBook', JSON.stringify(books));

  show(books.length - 1);
});
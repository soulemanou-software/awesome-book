/* eslint-disable no-plusplus */
/* eslint-disable radix */
import navigators from '../nav.js'

let myLibrary = [];
let storage = [];

const booksTable = document.querySelector('.books-list');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add');

storage = JSON.parse(localStorage.getItem('books')) || [];

//  ADD BOOK HERE
function addBook(book, title, author) {
  book.title = title;
  book.author = author;

  const bookLabel = document.createElement('article');
  const bookText = document.createElement('h4');
  const deleteButton = document.createElement('button');

  bookLabel.classList.add('bookLabel');
  bookText.classList.add('bookText');
  deleteButton.classList.add('btn');
  deleteButton.classList.add('delete');

  booksTable.appendChild(bookLabel);
  bookLabel.appendChild(bookText);
  bookLabel.appendChild(deleteButton);

  bookText.textContent = `"${title}" by ${author}`;
  deleteButton.textContent = 'Delete';

  const l = bookLabel.style;
  l.display = 'flex';
  l.alignItems = 'center';

  deleteButton.style.margin = '0 5px';
  deleteButton.style.flex = '1';
  bookText.style.flex = '7';
  deleteButton.style.transform = 'translateX(0)';
  deleteButton.style.height = '45px';

  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    book.remove();
    const  removemsg = document.querySelector('#removemsg');
     removemsg.innerHTML = 'Book removed successfully';
    console.log( removemsg);
  });
}
// END OF ADD BOOK HERE
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    myLibrary.push(this);
    addBook(this, title.value, author.value);
    localStorage.setItem('books', JSON.stringify(myLibrary));
  }

  remove() {
    myLibrary = myLibrary.filter((element) => element !== this);
    localStorage.setItem('books', JSON.stringify(myLibrary));
  }
}
for (let i = 0; i < storage.length; i += 1) {
  const book = new Books();
  book.title = storage[i].title;
  book.author = storage[i].author;
  myLibrary.push(book);
  addBook(myLibrary[i], myLibrary[i].title, myLibrary[i].author);
}
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Books();
  book.add();
  const message = document.querySelector('#message');
    message.innerHTML = 'Book added successfully';
    console.log(message);
});
navigators();
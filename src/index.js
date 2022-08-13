import nav from './modules/nav.js';
import BookForm from './modules/book-form.js';
import Books from './modules/books-list.js';

window.onload = () => {
  const books = new Books();
  const bookForm = new BookForm(books);
  const removeButtonElements = document.querySelectorAll('.book-card__button');

  nav.init();
  bookForm.afterSubmit = () => {
    nav.switchView('books-list');
  };

  removeButtonElements.forEach((buttonEl) => {
    buttonEl.addEventListener('click', (event) => {
      const { id } = event.target.dataset;
      const bookCardEl = document.querySelector(`#book-card-${id}`);
      books.remove(id);
      bookCardEl.remove();
    });
  });
};

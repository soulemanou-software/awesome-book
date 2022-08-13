export default class BookForm {
  constructor(books) {
    const bookFormEl = document.querySelector('.book-form');

    this.books = books;

    bookFormEl.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const newBook = {
        title: data.get('title'),
        author: data.get('author'),
      };

      this.onSubmit(newBook);
    });
  }

  onSubmit(newBook) {
    this.books.add(newBook);
    this.clear();

    if (typeof this.afterSubmit === 'function') this.afterSubmit();
  }

  // eslint-disable-next-line class-methods-use-this
  clear() {
    const inputs = document.querySelectorAll('.book-form__input');

    inputs.forEach((input) => {
      input.value = '';
    });
  }
}

const booksListEl = document.querySelector('.books-list');

const uid = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

export default class Books {
  books = [];

  constructor() {
    this.#fetchBooks();
    this.#render();
  }

  add(book) {
    book.id = uid();
    this.books.push(book);
    this.#persist();
    this.#render();
  }

  remove(id) {
    if (!id) return;

    this.books = this.books.filter((book) => book.id !== id);
    this.#persist();
  }

  #persist() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  #fetchBooks() {
    const booksListString = localStorage.getItem('books');

    this.books = JSON.parse(booksListString);
  }

  // eslint-disable-next-line class-methods-use-this
  #generateBookCard({ id, title, author }) {
    const bookCardEl = document.createElement('div');

    bookCardEl.className = 'book-card';
    bookCardEl.id = `book-card-${id}`;
    bookCardEl.innerHTML = `
      <div class="book-card__content">"${title}" by ${author}</div>
      <button class="button book-card__button" data-id="${id}" type="button">Remove</button>
    `;

    return bookCardEl;
  }

  #render() {
    booksListEl.innerHTML = '';

    this.books.forEach((book) => {
      const bookCard = this.#generateBookCard(book);
      booksListEl.appendChild(bookCard);
    });
  }
}

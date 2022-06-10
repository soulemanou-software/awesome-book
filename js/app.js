class books{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }
    set books(title,author){

    }
}
//selectibng the container
const container = document.querySelector('#book_content');
const bookList = document.createElement('ul');

container.appendChild(bookList);
const listItems = document.createElement('li');
listItems.classList.add('list_Items')
listItems.innerHTML=`
                <li id="book_${book.id}">
                    <div class="title">${books.title}</div>
                    <div class="author">${books.author}</div>
                    <button onclick="Remove()" >Remove</button>
                    <hr/>
                </li>
                `;
                bookList.appendChild(listItems);
//Book class here 
/* eslint-disable max-classes-per-file */
class books{
    constructor(title,author,ids){
        this.title = title;
        this.author = author;
        this.ids = ids;
    }
    get  getBooks(){
        return(

        );
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
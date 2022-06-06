const inputTitle = document.querySelector('#txt-title');
const inputAuthor = document.querySelector('#txt-author');
const myButton = document.querySelector('btn-list');
const list = document.querySelector('content ul');
myButton.addEventListener('click',(e)=>{
    if(inputTitle.value != ""){
        e.preventDefault();
        //create li
        const myli = document.createElement('li');
        list.appendChild(myli);
        //create div.title
        const divTitle = document.createElement('div');
        divTitle.innerHTML = inputTitle.value;
        myli.appendChild(divTitle);
        //create div.author
        const divAuthor = document.createElement('div');
        divAuthor.innerHTML = inputAuthor.value;
        myli.appendChild(divAuthor);
        //create button.Remove
        const btnRemove = document.createElement('button');
        btnRemove.innerHTML = 'Remove';
        myli.appendChild(btnRemove);
    }
})
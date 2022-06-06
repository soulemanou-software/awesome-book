const inputTitle = document.querySelector('#txt-title');
const inputAuthor = document.querySelector('#txt-author');
const myButton = document.querySelector('btn-list');
const list = document.querySelector('content ul');
myButton.addEventListener('click',(e)=>{
    if(inputTitle.value != ""){
        e.preventDefault();
        //create li
        const myli = document.createElement('li');
        myli.innerHTML = inputTitle.value;
        list.appendChild(myli);
        //create div.title
        const divTitle = document.createElement('div');
        divTitle.innerHTML = inputTitle.value;
        list.appendChild(myli);
    }
})
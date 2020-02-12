'use strict'; 

let todo = document.querySelectorAll('.todo')[0]; 
let todoCompleted = document.querySelectorAll('.todo')[1];

//todo.hidden = true;
//todoCompleted.hidden = true;


let headerInput = document.querySelector('.header-input'); 
let headerButton = document.querySelector('.header-button');

let pareentTodo = document.getElementById('todo');
let elem = document.querySelectorAll('.todo-item')[0];

const showText = function () {
    headerInput.textContent = localStorage.getItem('memory');
};

headerButton.addEventListener('click', function(){
    localStorage.setItem('memory', headerInput.value);
    showText(); 

if (headerInput.value !== '') {
    let elemClone = todo.cloneNode(true);
    pareentTodo.insertBefore(elemClone, null);
};

return
});

showText();



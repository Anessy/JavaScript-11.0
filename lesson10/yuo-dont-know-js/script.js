'use strict';

// Восстановить порядок книг.
let allBooks = document.querySelectorAll('.books');
console.log('allBooks: ', allBooks);

let book = document.querySelectorAll('.book');
console.log('book: ', book);

allBooks[0].insertBefore(book[1], book[0]);
allBooks[0].insertBefore(book[4], book[2]);
allBooks[0].insertBefore(book[3], book[2]);
allBooks[0].insertBefore(book[5], book[2]);

// Заменить картинку заднего фона на другую из папки image

document.body.style.backgroundImage = "url('./image/1.jpg')";

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

let name = document.querySelectorAll('a');
let a = name[2];
console.log('a: ', a);
a.innerHTML='Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы

let parentReclame = document.querySelector('body'); 
let cahildReclame = document.querySelector('.adv');

parentReclame.removeChild(cahildReclame);







// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
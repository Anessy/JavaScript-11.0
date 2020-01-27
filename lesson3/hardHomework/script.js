'use strict'; 

let lang = prompt('Выберите язык ru или eng', 'ru');
let weekRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскреенье';
let weekEng = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'; 

if (lang == 'ru') {
    console.log(weekRu);
} else 
console.log(weekEng);

switch (lang) {
    case 'ru': 
        console.log(weekRu);
        break; 
    case 'eng': 
        console.log(weekEng);
        break;
}

let week = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскреенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

 let answer = (lang == 'ru') ? ru() : eng();

function ru(){
    for (let i=0; i<=6; i++) {
        console.log(week[0][i]);
    }
}; 

function eng(){
    for (let i=0; i<=6; i++) {
        console.log(week[1][i]);
    }
}





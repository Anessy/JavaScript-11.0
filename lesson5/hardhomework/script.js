'use strict'; 

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let arr = []; 

for (let i = 0; i<7; i++) {
    arr[i] = prompt(`Введите число`);
    while (!isNumber(arr[i])) {
        arr[i] = prompt(`Вы ввели некоректные данные. Введите число`);
    }; 
}; 

console.log('array = ', arr);

let str;

for (let i = 0; i<7; i++) {
    str = arr[i];

    if (str[0] === '2') {
        console.log('str = ' + str + ' здесь str[0] = 2');
    };

    if (str[0] === '4') {
        console.log('str = ' + str + ' здесь str[0] = 4');
    };
};

console.log('Простые числа: ');

nextNumber:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextNumber; // МЕТКА: не подходит, берём следующее
  }

  console.log(i + ' => Делители этого числа: ' + 1 + ' и ' + i);
  
}





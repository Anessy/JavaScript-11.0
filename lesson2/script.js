// типы данных

let myVAr;

myVAr = 10; // число 
myVAr = 'Hello world'; // строка 
myVAr = true; // логическое булевое значение
myVAr = null;
console.log(typeof myVAr);
myVAr = undefined;
myVAr = Symbol(); // появился в стандарте ES6

// Обьекты
myVAr = {}; // объект
myVAr = []; // массив
let regExp = /w+/g; // регулярные выражения 
let func = function () {}; // функции
let error = Error('error message'); // ошибки
let date = new Date();

console.log(typeof regExp);


//=================================

console.log (2 === 2); // true 
console.log (2 === 3); // false

console.log(Boolean(5)); // true

// ==============================

console.log(50); // целые
console.log(8.5); // дробные или = с плавающей точкой
console.log(.5); // то же самое, что 0.5 
console.log(5e6); //экспоненциальная форма = 5000000 
console.log(0b1111); // двоичная форма 15 
console.log(0o11); // восьмеричная форма числа 9 
console.log(0x22aacc); // шестнадцатиричная форма

console.log(Number.isInteger(5.3)); // ответ false


// ==============================

let str = 'Hello my friends!';

console.log(str.length); // длина строки = 17 
console.log(str.toUpperCase()); // все буквы в верхний регистр
console.log(str.toLowerCase()); // все буквы в нижний регистр 
console.log(str[4]); // возвращает символ с указанным номером (начало с 0)
console.log(str.substring(6)); // возвращает подстроку от указанного индекса 
console.log(str.substring(7, 15)); // вернет с 7 по 15 буквы, без написания 15
console.log(str.slice(-8)); // вернет с конца 8 символов (слово friends!)
console.log(str.substr(6, 2)); // c какого места и сколько символов вернуть

console.log(str.indexOf('friends'));// вернет номер первого символа искомой подстроки
console.log(str.replace('my friends' , 'world')); // заменит my friends на world
console.log(str.split(' ')); // разбивает строку на массив по указанному разделителю (пробел)

// ==============================

// доход за месяц 
let money = 500; 

// дополнительный доход 
let income = '300'; 

// дополнительные расходы
let addExpenses =  'Интеренет, Такси, Коммуналка'; 
let deposit = true; 
let mission = 30000;
let period = 11; 
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ` + period +  ` месяцев`);
console.log(`Цель заработать ` + mission + ` рублей/долларов/гривен/юани`);  
addExpenses = addExpenses.toLowerCase(); 
console.log('addExpenses: ', addExpenses);
addExpenses = addExpenses.split(', ');
console.log('addExpenses: ', addExpenses);

let budgetDay = money/30;
console.log('budgetDay: ', budgetDay);




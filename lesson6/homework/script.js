'use strict'; 

let myNamber = 50; 
 

// проверка на корректность ввода 


 

// if (userNumber === myNamber) {
//     alert ('Вы угадали!');
// } else if (userNumber > myNamber) {
//     prompt('Слишком много. Выберете дугое число');
// } else {
//     prompt('Слишком мало. Выберете дугое число');
// }

function number() {
    function inputNumber() {
        let userNumber = prompt ('Угадайте число от 1 до 100?');
        let isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        };
        while (!isNumber(userNumber)) {
            userNumber = prompt ('Вы ввели некоректные данные. Попробуйте еще раз ввести цифру от 1 до 100'); 
        };
        rightNumber(userNumber);
        return userNumber;
    }; 

    let userNumber = inputNumber();
    
    function rightNumber(userNumber) { 
        if (userNumber == myNamber) {
            alert ('Вы угадали!');
        } else if (userNumber > myNamber) {
            alert ('Слишком много');
            userNumber = inputNumber();
        } else {
            alert ('Слишком мало');
            userNumber = inputNumber();
        };
    };
    
};

number();
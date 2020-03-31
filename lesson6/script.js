'use strict'; 

let myNamber = 50; 
let i = 9;

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
        
        while (i > 1) {
            if (userNumber == myNamber) {
                alert ('Вы угадали!');
            } else if (userNumber > myNamber) {
                alert ('Слишком много. Осталось ' + i + ' попыток');
                i--;
                userNumber = inputNumber();
            } else {
                alert ('Слишком мало. Осталось ' + i + ' попыток');
                i--;
                userNumber = inputNumber();
            };
        };
        alert ('Попытки закончились');
    };
    
    
};

number();

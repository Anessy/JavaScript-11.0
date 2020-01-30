'use strict';

// если входящее n - число, ф-ция возвращ. true иначе - false
// isFinite - если число конечное - возвращ true
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

// =========== входные условия =================

let money; // доход за месяц
let income = 'frilance'; // кем работаете
let addExpenses = 'Internet, Taxi, Cafe'; // обязательные расходы по умолчанию
let deposit = true; // наличие депозита 
let mission = 2000; // сколько хочешь накопить
let period = 11; //накопить за период 11 месяцев

// ==============================================

// спрашиваем уровень дохода, пока пользователь не введет корректные данные

do {
    money = prompt('Ваш месячный доход?');
} while (!isNumber(money));

console.log(money);

// расходы в массиве с маленькой буквы

let a = addExpenses.length;
addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log('обязательные расходы addExpenses = ' + addExpenses);


// ф-ция для опеределния типа данных

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money); //console.log(typeof money);
showTypeOf(income); //console.log(typeof income);
showTypeOf(deposit); //console.log(typeof deposit);


addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Кафе, Такси, Кредит');
deposit = confirm('Есть ли у вас депозит?'); 

// Math.ceil(x) // округленное к большему
// Math.floor(x)// округленное к меньшему 


// массив со статьями расходов
let expenses = [];

//Функция getExpensesMonth возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth () {
    let sum = 0; 
    let number = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов', 'хозяйственные нужды');
        number = +prompt('Во сколько это обойдется?');
        
        while (!isNumber(number)) {
            number = +prompt('Вы ввели неккоректные данные. Во сколько это обойдется?');
        };

        sum +=number;
            
    }
    
    console.log(' Расходы за месяц = ' + sum);
    return sum;
};

let ExpensesMonth = getExpensesMonth();

//====================================

let budgetMonth = money - ExpensesMonth;
 if (budgetMonth > 0) {
         console.log('Бюджет на месяц: ', budgetMonth);

          period = Math.floor(mission/budgetMonth);
          console.log(`Вы сможете накопить ` + mission + ` за период в ` + period + ` месяцев` );

 }else {
     console.log('Вы в долгах! Накопить не получится!');
 }

//Функция getAccumulatedMonth возвращает Накопления за месяц (Доходы минус расходы)

function getAccumulatedMonth (income , rate) {
    income = Number(income);
    rate = Number(rate);
    return income - rate;
};

let accumulatedMonth = getAccumulatedMonth(money, ExpensesMonth); // накопления

// функция getTargetMonth за какой период будет достигнута цель

function getTargetMonth (accumulation, target) {
    accumulation = Number(accumulation);
    target = Number(target);
    return Math.floor(target/accumulation);  
};

let needPeriod = getTargetMonth(accumulatedMonth, mission);
if (needPeriod > 0) {
    console.log('needPeriod =' + needPeriod);
} else if (needPeriod = 0) {
    console.log('У вас уже есть нужная сумма. Период = 0');
} else {
    console.log('Цель не будет достигнута.');
}



let budgetDay = accumulatedMonth/30;

// уровень дохода
let getStatusIncome = function () {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if ((budgetDay > 600) && (budgetDay <= 1200)) {
        return ('У вас средний уровень дохода');
    } else if (((budgetDay <= 600) && (budgetDay > 0))) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    };
};

console.log(getStatusIncome());
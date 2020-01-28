let money = 10000; 
let income = 'frilance'; 
let addExpenses = 'Internet, Taxi, Cafe'; 
let deposit = true; 
mission = 2000; 
period = 11; 

let a = addExpenses.length;
//console.log(a);
//console.log(`Период равен ` + period + ` месяцев`);
//console.log(`Цель заработка ` + mission + ` рублей`);
addExpenses = addExpenses.toLowerCase();
//console.log(addExpenses); 
addExpenses = addExpenses.split(', ');
//console.log(addExpenses);

//let budgetDay = money/30;
//console.log('budgetDay: ', budgetDay);

//============== lesson 4 =============

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

//console.log(typeof money);
//console.log(typeof income);
//console.log(typeof deposit);
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


// ============= lesson 3 =============

money = prompt('Ваш месячный доход?', 10000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Кафе, Такси, Кредит');
deposit = confirm('Есть ли у вас депозит?'); 
let expenses1 = prompt('Введите обязательную статью расходов', 'садик'); 
let amount1 = prompt(`Во сколько обойдется ` + expenses1 +`?`, 100 );
let expenses2 = prompt('Введите обязательную статью расходов', 'налоги'); 
let amount2 = prompt(`Во сколько обойдется ` + expenses2 +`?`, 200 );

let budgetMonth = money - amount1 - amount2;
if (budgetMonth > 0) {
        console.log('Бюджет на месяц: ', budgetMonth);

        period = Math.ceil(mission/budgetMonth);
        console.log(`Вы сможете накопить ` + mission + ` за период в ` + period + ` месяцев` );

        period = Math.floor(mission/budgetMonth);
        console.log(`Вы сможете накопить ` + mission + ` за период в ` + period + ` месяцев` );

}else {
    console.log('Вы в долгах! Накопить не получится!');
}


//budgetDay = budgetMonth/30; 
//console.log(`Ваш дневной бюджет = ` + Math.floor(budgetDay));
// Math.ceil(x) // округленное к большему
// Math.floor(x)// округленное к меньшему 

// ================  домашнее задание к уроку 4 ================

// Объявить функцию getExpensesMonth. 
//Функция возвращает сумму всех обязательных расходов за месяц


function getExpensesMonth (rate1, rate2) {
    rate1 = Number(rate1);
    rate2 = Number(rate2);

    return rate1 + rate2;
};
let expenses = getExpensesMonth(amount1, amount2);

// Объявить функцию getAccumulatedMonth. 
//Функция возвращает Накопления за месяц (Доходы минус расходы)

function getAccumulatedMonth (income , rate) {
    income = Number(income);
    rate = Number(rate);
    return income - rate;
};

// Объявить переменную accumulatedMonth 
// присвоить ей результат вызова функции getAccumulatedMonth 

let accumulatedMonth = getAccumulatedMonth(money, expenses);

// Объявить функцию getTargetMonth. 
// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

function getTargetMonth (accumulation, target) {
    accumulation = Number(accumulation);
    target = Number(target);
    return Math.floor(target/accumulation);  
};

let needPeriod = getTargetMonth(accumulatedMonth, mission);
console.log(needPeriod);
// Удалить из кода переменную budgetMonth
// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

let budgetDay = accumulatedMonth/30;
// Почистить консоль логи и добавить недостающие, должны остаться:
//  - вызовы функции showTypeOf
//  - Расходы за месяц вызов getExpensesMonth
//  - Вывод возможных расходов в виде массива (addExpenses)
//  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth)
//  - Бюджет на день
//  - вызов функции getStatusIncome


//=========== lesson 4 ====================
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
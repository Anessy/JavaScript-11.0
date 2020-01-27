let money = 700; 
let income = 'frilance'; 
let addExpenses = 'Internet, Taxi, Cafe'; 
let deposit = true; 
mission = 2000; 
period = 11; 

//console.log(typeof money);
//console.log(typeof income);
//console.log(typeof deposit);
let a = addExpenses.length;
//console.log(a);
//console.log(`Период равен ` + period + ` месяцев`);
//console.log(`Цель заработка ` + mission + ` рублей`);
addExpenses = addExpenses.toLowerCase();
//console.log(addExpenses); 
addExpenses = addExpenses.split(', ');
//console.log(addExpenses);

let budgetDay = money/30;
//console.log('budgetDay: ', budgetDay);

// ============= lesson 3 =============

money = prompt('Ваш месячный доход?', 100);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Кафе, Такси, Кредит');
deposit = confirm('Есть ли у вас депозит?'); 
let expenses1 = prompt('Введите обязательную статью расходов', 'садик'); 
let amount1 = prompt(`Во сколько обойдется ` + expenses1 +`?`, 100 );
let expenses2 = prompt('Введите обязательную статью расходов', 'налоги'); 
let amount2 = prompt(`Во сколько обойдется ` + expenses2 +`?`, 100 );

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


budgetDay = budgetMonth/30; 
console.log(`Ваш дневной бюджет = ` + Math.floor(budgetDay));
// Math.ceil(x) // округленное к большему
// Math.floor(x)// округленное к меньшему 

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if ((budgetDay > 600) && (budgetDay <= 1200)) {
    console.log('У вас средний уровень дохода');
} else if (((budgetDay <= 600) && (budgetDay > 0))) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}


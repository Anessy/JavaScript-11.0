let money, income, addExpenses, deposit, mission, period;

money = 12000; 
income = 'freelance'; 
addExpenses = 'Internet, Taxi, Cafe';
deposit = true; 
mission = 50000; 
period = 12; 
console.log('period: ', period);

console.log(typeof money, typeof income, typeof addExpenses, typeof deposit, typeof mission, typeof period);
console.log(addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать', mission, 'гривен');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(addExpenses);

let budgetDay = money/30;
console.log('budgetDay: ', budgetDay);
//    - Вывести в консоль budgetDay

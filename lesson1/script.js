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

money = prompt ('Ваш месячный доход?', 10000);
addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'taxi, cafe, apartment');
deposit = confirm ('Есть ли у вас депозит в банке?');
let expenses1 = prompt ('Введите обязательную статью расходов?', 'садик');
let amount1 = prompt('Во сколько это обойдется?', 2000);
let expenses2 = prompt ('Введите обязательную статью расходов?', 'школа');
let amount2 = prompt('Во сколько это обойдется?', 2000);
let budgetMonth = (money-amount1-amount2);
console.log('budgetMonth: ', budgetMonth);
console.log(Math.floor(mission/budgetMonth));

budgetDay = budgetMonth/30;

if (budgetDay>1200) {
  console.log('У вас высокий уровень дохода')
}
if (budgetDay>1200) {
} else if ((budgetDay>600) && (budgetDay<1200)) {
  console.log('У вас средний уровень дохода');
} else {
  console.log('Вы бомж');
}
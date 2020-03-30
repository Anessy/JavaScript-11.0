let money, income, addExpenses, deposit, mission, period;

money = 12000; 
income = 'freelance'; 
addExpenses = 'Internet, Taxi, Cafe';
deposit = true; 
mission = 50000; 
period = 12; 

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');

money = prompt ('Ваш месячный доход?', 10000);
addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'taxi, cafe, apartment');
deposit = confirm ('Есть ли у вас депозит в банке?');
let expenses1 = prompt ('Введите обязательную статью расходов?', 'садик');
let amount1 = prompt('Во сколько это обойдется?', 2000);
let expenses2 = prompt ('Введите обязательную статью расходов?', 'школа');
let amount2 = prompt('Во сколько это обойдется?', 2000);






let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth = function(a, b) {
  return ((+a) + (+b)); 
};
console.log('Расходы за месяц =  ',getExpensesMonth(amount1, amount2));

let getAccumulatedMonth = function(a,b) {
  return ((+a) - (+b));
};

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1,amount2) );
console.log('Накопления за месяц  =  ', accumulatedMonth);

let getTargetMonth = function (a,b) {
  let result = a / b; 
  return result;
};

console.log('Цель будет достигнута за :', getTargetMonth(mission, accumulatedMonth));

budgetDay = accumulatedMonth/30; 

let getStatusIncome = function() {
  if (budgetDay>1200) {
    return('У вас высокий уровень дохода')
  }
  if (budgetDay>1200) {
  } else if ((budgetDay>600) && (budgetDay<1200)) {
    return('У вас средний уровень дохода');
  } else {
    return('Вы бомж');
  }
};
console.log(getStatusIncome());
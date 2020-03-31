let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n) 
};

let money, income, addExpenses, deposit, mission, period;

income = 'freelance'; 
addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'taxi, cafe, apartment');
deposit = confirm ('Есть ли у вас депозит в банке?'); 
mission = 50000; 
period = 12; 

let start = function(){
  money = prompt ('Ваш месячный доход?', 10000);
  while (!isNumber(money)) {
    money = prompt ('Ваш ответ не корректен. Введите сумму месячного дохода?');
  }
};
start();

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];
console.log(addExpenses.toLowerCase().split(','));


let getExpensesMonth = function() {
  let sum = 0;
  for (let i=0; i < 2; i++) {
    expenses[i] = prompt ('Введите обязательную статью расходов?', 'садик');
    sum += Number(prompt('Во сколько это обойдется?', 2000));
    while (!isNumber(sum)) {
      sum = prompt ('Ваш ответ не корректен. Введите сумму?');
    }
  }
  return sum; 
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц =  ', expensesAmount);

let getAccumulatedMonth = function() {
  return (money - expensesAmount);
};

let accumulatedMonth = expensesAmount;

let getTargetMonth = function(){
  if ((mission / accumulatedMonth) < 0) {
    console.log('Цель не будет достигнута');
  } else {
    console.log('Цель будет достигнута через : ', mission / accumulatedMonth);
  }
  return mission / accumulatedMonth;
};

getTargetMonth();

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
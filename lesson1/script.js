'use ctrict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n) 
};

let money;

let start = function(){
  money = prompt ('Ваш месячный доход?', 10000);
  while (!isNumber(money)) {
    money = prompt ('Ваш ответ не корректен. Введите сумму месячного дохода?');
  }
};
start();

let appData = {
  budget : money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income : {},
  addIncome : [], 
  expenses : {}, 
  addExpenses : [],
  deposit : false, 
  mission : 50000, 
  period : 3, 
  asking : function() {
    let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'taxi, cafe, apartment');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm ('Есть ли у вас депозит в банке?'); 
    
    for (let i=0; i < 2; i++) {
      let key = prompt ('Введите обязательную статью расходов?');
      appData.expenses[key] = Number(prompt('Во сколько это обойдется?', 2000));
      
      while (!isNumber(appData.expenses[key])) {
        appData.expenses[key] = prompt ('Ваш ответ не корректен. Введите сумму?');
      }
    }
    
  }, 
  getExpensesMonth : function() {
    let sum = 0; 
    for (let key in appData.expenses ) {
      sum = sum + appData.expenses[key];
    }
    appData.expensesMonth = sum;
    return sum
  },
  getBudget : function() {
    appData.budgetMonth = appData.budget - appData.getExpensesMonth();
    appData.budgetDay = appData.budgetMonth/30;
    return (appData.budgetMonth);
  },
  getTargetMonth : function(){
    if ((appData.mission / accumulatedMonth) < 0) {
      console.log('Цель не будет достигнута');
    } else {
      console.log('Цель будет достигнута через : ', appData.mission / accumulatedMonth);
    }
    return appData.mission / accumulatedMonth;
  },
  getStatusIncome : function() {
    if (budgetDay>1200) {
      return('У вас высокий уровень дохода')
    }
    if (budgetDay>1200) {
    } else if ((budgetDay>600) && (budgetDay<1200)) {
      return('У вас средний уровень дохода');
    } else {
      return('Вы бомж');
    }
  },
};

appData.asking();
appData.getBudget();

let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц =  ', expensesAmount);

let accumulatedMonth = expensesAmount;

appData.getTargetMonth();

budgetDay = accumulatedMonth/30; 

console.log(appData.getStatusIncome());
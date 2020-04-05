'use ctrict';
let money,
    start = function () {
      do {
        money = prompt('Ваш месячный доход?', 50000);
      }
      while (isNaN(money) || money === '' || money === null)
    };

    start();

let appData = {
  budget : money,
  budgetDay: 0,
  budgetMonth: 0,
  income : {},
  addIncome : [], 
  expenses : {}, 
  addExpenses : [],
  expensesMonth: 0,
  deposit : false, 
  persentDeposit: 0,
  moneyDeposit: 0,
  mission : 50000, 
  period : 3, 
  asking : function() {

    if (confirm('Есть ли у вас дополнительный заработок?')) {
      let itemIncome = prompt ('Какой у вас дополнительный заработок?','taxi');
      let cashIncome = prompt ('Какую сумму вы на этом зарабатываете?', 1000);
      appData.income[itemIncome] = cashIncome;
    };

    let addExpenses = prompt ('Перечислите возможные расходы через запятую', 'taxi, cafe, apartment');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
    for (let i = 0; i < 2; i++) {

      let itemExpenses = prompt ('Введите обязательную статью расходов?');
      let cashExpenses; 
      do {
        cashExpenses = prompt('Во сколько это обойдется?', 2500);
      }
      while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
      appData.expenses[itemExpenses] = cashExpenses;
    }
  }, 

  getExpensesMonth : function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  getBudget : function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth : function(){
    return appData.mission / appData.budgetMonth;
  },

  getStatusIncome : function() {
    if (appData.budgetDay > 800) {
      return('У вас высокий уровень дохода');
    } else if (appData.budgetDay > 300) {
      return('У вас средний уровень дохода');
    } else if (appData.budgetDay > 0){
      return('Вы бомж');
    } else {
      return('Что-то пошло не так');
    }
  },

  getInfoDeposit: function() {
    if (appData.deposit) {
      appData.persentDeposit = prompt('Какой годовой процент?', '10');
      appData.moneyDeposit = prompt('Какая сумма на депозите', 10000);
    }
  }, 

  calcSaveMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0 ) {
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + 'месяца');
} else {
  console.log('Цель не будедостигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
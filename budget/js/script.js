'use ctrict';

let start = document.getElementById('start'), // кнопка рассчитать
    cancel = document.querySelector('#cancel'), 
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1], // + для добавления расходов
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'), // возможнй доход
    depositCheck = document.querySelector('#deposit-check'), 
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0], 
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0], 
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0], 
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0], 
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], 
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0], 
    salaryAmount = document.querySelector('.salary-amount'), // поле месячный доход
    incomeTitle = document.querySelector('.income-title'), // имя дополнительного дохода
    expesesTitle = document.querySelector('.expeses-title'), 
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional-expenses'),
    periodSelect = document.querySelector('.period-select'), 
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    tergetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items');

let appData = {
  budget : 0,
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
  incomeManth: 0,
  start: function () {
    // месячный доход - обязательная строка, пропишем это 
    if (salaryAmount.value === '') {
      alert ('Ошибка! Поле "Месячный доход" должно быть заполнено!'); 
      return
    };
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    
    appData.getAddExpenses();
    appData.getAddIncome();
    
    appData.getBudget();

    appData.showResult();

    cancel.style.display = 'block';
    start.style.display='none';
  },
  reset: function(){
    window.location = window.location.href; // обновить страницу!
    cancel.style.display = 'none';
    start.style.display='block';
      
  },
  showResult: function() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.round(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSaveMoney();
  } ,
  // чтобы кнопочка + добавляла новые поля расходов 
  addExpensesBlock: function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
  },

  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function() {
    incomeItem.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });

    for (let key in appData.income) {
      appData.incomeManth += +appData.income[key];
    }
  },
  addIncomeBlock: function() {
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
      if (incomeItem.length === 3) {
        incomePlus.style.display = 'none';
      };
  },
  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item); 
      }
    });
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },

  getExpensesMonth : function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  getBudget : function() {
    appData.budgetMonth = appData.budget + appData.incomeManth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth : function(){
    return tergetAmount.value / appData.budgetMonth;
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
    return appData.budgetMonth * periodSelect.value;
  }
};

start.addEventListener('click', appData.start); // клик на кнопку рассчитать
cancel.addEventListener('click', appData.reset); // клик на кнопку сбросить
expensesPlus.addEventListener('click', appData.addExpensesBlock); // клик на + расходов
incomePlus.addEventListener('click', appData.addIncomeBlock); // клик на + доходов


document.querySelector('.period-select').addEventListener('input', function(){
  document.querySelector('.period-amount').innerHTML = document.querySelector('.period-select').value;
});



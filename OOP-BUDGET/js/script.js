'use ctrict';

let money = document.querySelector('.salary-amount'); // cумма месячного дохода

    const AppData = function(){
        this.budget =  0;
        this.budgetDay =  0;
        this.budgetMont =  0;
        this.income  = {};
        this.alwaysIncome = 0;
        this.alwaysExpenses = 0;
        this.addIncome  = []; 
        this.expenses  = {}; 
        this.addExpenses  = [];
        this.expensesMont =  0;
        this.deposit = false; 
        this.persentDeposi =  0;
        this.moneyDeposi =  0; 
        this.incomeMant =  0;
    };

    
    AppData.prototype.constructor = AppData;
    let appData = new AppData;
    
   
    AppData.prototype.budget = function() { // ф-ция вивода доходов за месяц
      let budgetMonthValue = document.querySelector('.budget_month-value'); // поле вывода доход за месяц
      budgetMonthValue.placeholder = Number(money.value) + Number(appData.alwaysIncome) - appData.alwaysExpenses;
    };
    
    AppData.prototype.newIncomeItems = function() { // ф-ция добавления новых эелементов возможный доход
      let element = document.querySelector('.income-items'); // получили элементы
      let copy = element.cloneNode(true); // создали копию
      let parent = document.querySelector('.income'); // получили родителя 
      parent.insertBefore(copy,incomeAdd); // вставляем перед кнопкой добавить
      let incomeItems = document.querySelectorAll('.income-items'); // получаем все вставленные элементы
      if (incomeItems.length > 2) { // если количество вставленных элементов равно 2
        incomeAdd.style.display = 'none'; // прячем кнопку добавления новых доходов
      };
    };

    AppData.prototype.additionalIncome = function(){ // ф-ция получения значений с дополнительного дохода
      let incomeItems = document.querySelectorAll('.income-items');
      for (let i=0; i < incomeItems.length; i++ ){
        let incomeName = incomeItems[i].querySelector('.income-title').value;
        let incomeMoney = incomeItems[i].querySelector('.income-amount').value;
        appData.income[incomeName] = incomeMoney;
        appData.alwaysIncome += Number(incomeMoney); 
      }
      return appData.alwaysIncome;
    };

    AppData.prototype.timeIncome = function() { // получение значений с поля возможный доход и вывод
      let additionalIncomeItem = document.querySelectorAll('.additional_income-item'); // получаем ibput с возмож. доходами
      let additionalIncomeValue = document.querySelector('.additional_income-value'); // поле вывода
      if (additionalIncomeItem[0].value !== '' || additionalIncomeItem[0].value !== '') { // проверка заполнения полей
      additionalIncomeValue.placeholder = additionalIncomeItem[0].value.trim() + ' , ' + additionalIncomeItem[1].value.trim();
      };
    };

    AppData.prototype.expensesAdd = function() { // при нажатии на кнопку добавления обяз расходов
      let element = document.querySelector('.expenses-items'); // получили элемент
      let clone = element.cloneNode(true); // сделали его копию
      let parent = document.querySelector('.expenses'); // получили родителя
      parent.insertBefore(clone, expensesAdd); // вставляем перед кнопкой добавить
      let expensesItems = document.querySelectorAll('.expenses-items'); // получаем все втавленные элементы
      if (expensesItems.length > 2) { // если их больше двух
        expensesAdd.style.display = 'none'; // скрываем кнопку добавления
      }
    };

    AppData.prototype.expenses = function() { // получение и работа с обязат. расходами 
      let expenses = document.querySelectorAll('.expenses-items');
      for (i=0; i < expenses.length; i++ ) {
        let expensesMoney = expenses[i].querySelector('.expenses-amount').value;
        appData.alwaysExpenses += Number(expensesMoney);
      };
    };

    AppData.prototype.expensesTime = function() { // получение возможных расходов и вывод их
      let expenses = document.querySelector('.additional_expenses-item').value;
      let resultAdditionalExpenses = document.querySelector('.additional_expenses-value');
      if (expenses !== '' && expenses !== ' ') { // проверка на пустое поле
      resultAdditionalExpenses.placeholder = expenses;
      }
    };


    AppData.prototype.deposit = function() { // получение периода 
      document.querySelector('.period-select').addEventListener('input', function(){
        document.querySelector('.period-amount').innerHTML = document.querySelector('.period-select').value;
      });
    }; 

// при нажатии на кнопку расчитать запускаем ф-цию 
    let start = document.querySelector('#start'); // получили кнопку рассчитать 
    start.addEventListener('click', function(){ // слушатель на кнопку рассчитать
      appData.__proto__.additionalIncome();
      appData.__proto__.timeIncome();
      appData.__proto__.expenses();
      appData.__proto__.expensesTime();
      appData.__proto__.budget();
      
    });



// при нажатии на кнопку добавления новых дополнительных доходов    
let incomeAdd = document.querySelector('.income_add'); // кнопка добавления новых дополнительных доходов
incomeAdd.addEventListener('click',function(){ // cлушатель на кнопку добавления
  appData.__proto__.newIncomeItems();
});

// при нажатии на кнопку добавления обязательных расходов 
let expensesAdd = document.querySelector('.expenses_add');
expensesAdd.addEventListener('click', function(){
  appData.__proto__.expensesAdd();
});

appData.__proto__.deposit(); // вывод желаемого периода


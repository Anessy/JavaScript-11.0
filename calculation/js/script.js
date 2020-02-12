'use strict'; 

// Кнопку "Рассчитать" через id
let start = document.getElementById('start'); 


// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

// Чекбокс "есть ли депозит"
let depositCheck = document.querySelector('#deposit-check'); 

//месячный доход 
let salaryAmount = document.querySelector('.salary-amount');

// поля для ввода названия "дополнительный доход"
let incomeTitle = document.querySelector('.income-title');

// Поля для ввода возможных доходов 
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'); 

//поля ввода имени "обязательные расходы"
let expensesTitle = document.querySelector('.expenses-title');

// поле ввода возможных расходов
let additionalExpensesItem = document.querySelector('.additional_expenses-item');

// поле для ввода "цель сумма"
let targetAmount = document.querySelector('.target-amount');

// бегунок период рассчета
let periodSelect = document.querySelectorAll('.period-select'); 
// значение бегунка период расчета
let periodAmount = document.querySelectorAll('.period-amount');

// вывод "доход за месяц"
let budgetMonthValue = document.querySelector('.budget_month-value');

// вывод "дневной бюджет"
let budgetDayValue = document.querySelector('.budget_day-value');

// вывод "расход за месяц"
let expensesMonthValue = document.querySelector('.expenses_month-value');

// вывод "возможные доходы"
let additionalIncomeValue = document.querySelector('.additional_income-value');

// вывод "возможные расходы"
let additionalExpensesValue = document.querySelector('.additional_expenses-value');

// вывод "накопления за период"
let incomePeriodValue = document.querySelector('.income_period-value');

// строк достижения цели в месяцах
let targetMonthValue = document.querySelector('.target_month-value');



// родитель "обязательные расходы"
let expensesItems = document.querySelectorAll('.expenses-items'); 

// родитель "дополнительный доход"
let incomeItems = document.querySelectorAll('.income-items');



let appData = {
    budget: 0, 
    budgtDay: 0, 
    budgetMonth: 0, 
    incomes: {}, 
    incomeMonth: 0,
    addIncome: [], 
    expenses: {}, 
    addExpenses: [], 
    expensesMonth: 0, 
    deposit: false, 
    percentDeposit: 0,
    moneyDeposit: 0, 
    start : function () {
        
        if (salaryAmount.value === '') {
            alert('Ошибка! Поле "Месячный доход" должно быть заполнено');
            return;
        }

        appData.budget = +salaryAmount.value;
        

        appData.getExpenses();
        appData.getIncome();
        
        appData.getExpensesMonth();
        
        appData.getAddExpenses();
        appData.getAddIncome();
        
        appData.getBudget();
        

        appData.showResult();
        
    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgtDay; 
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');

        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock : function(){
         
        console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items'); 
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        
        let i = document.querySelectorAll('.income-items'); 
        console.log('imcomeItems: ', i);
        if (i.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItems.forEach(function(item){

            let itemIncomes = item.querySelector('.income-title').value;
            let cashIncomes = item.querySelector('.income-amount').value;

            if(itemIncomes !== '' && cashIncomes !== ''){
                appData.incomes[itemIncomes] = cashIncomes;
            }
        });
       
            for (let key in appData.income){
                appData.incomeMonth += +appData.income[key];
            }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){

            item = item.trim(); // убирает пробелы в начале и в конце

            if (item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemVAlue = item.value.trim();
            if (itemVAlue !== ''){
                appData.addIncome.push(itemVAlue);
            }

        });
    },

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgtDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
    },
    getPeriodValue: function(){

        let period = function(event) {
            document.querySelector('.period-amount').innerHTML = event.target.value;
        };
        
        document.querySelector('.period-select').addEventListener('change', period);
        
         
    },
    getStatusIncome: function () {
        if (appData.budgtDay > 800) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgtDay > 300) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgtDay > 0) {
            return ('У вас низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            } 
            while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null); 
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } 
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
        }
    },
    calcPeriod:function(){
        
        return appData.budgetMonth * document.querySelector('.period-select').value;
        
        
    }
};

// привязать ф-цию start к кнопке рассчитать
start.addEventListener('click', appData.start);
appData.getPeriodValue();

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);










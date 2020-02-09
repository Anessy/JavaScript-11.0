'use strict'; 

// Кнопку "Рассчитать" через id
let start = document.getElementById('start'); 


// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector
let checkboxDeposit = document.querySelector('#deposit-check'); 

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'); 


// Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
let budgetDayValue = document.querySelector('.budget_day-value');
let budgetMonthValue = document.querySelector('.budget_month-value');
let expensesMonthValue = document.querySelector('.expenses_month-value');
let additionalIncomeValue = document.querySelector('.additional_income-value');
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
let incomePeriodValue = document.querySelector('.income_period-value');
let targetMonthValue = document.querySelector('.target_month-value');

// Оставшиеся поля через querySelector каждый в отдельную переменную:
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title'); 
let expensesItems = document.querySelectorAll('.expenses-items'); 
//let additionalExpenses = document.querySelector('.additional_expenses-item'); 
let targetAmount = document.querySelector('.target-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let incomeItems = document.querySelectorAll('.income-items');
let periodSelect = document.querySelectorAll('.period-select').value; 
let periodAmount = document.querySelectorAll('.period-amount');

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
        console.log('salaryAmount.value: ', salaryAmount.value);

        

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

        return appData.budgetMonth * periodSelect.value;
        
    }
};

// привязать ф-цию start к кнопке рассчитать
start.addEventListener('click', appData.start);
appData.getPeriodValue();

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


// if (appData.getTargetMonth() > 0) {
//     console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + 'месяца');   
// } else {
//     console.log('Цель не будет достигнута');
// };



//for (let key in appData) {
 //   console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
//}








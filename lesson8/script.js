'use strict'; 
let money, 
start = function () {
    do {
        money = prompt('Ваш месячный доход?', 50000); 
    }
    while (isNaN(money) || money === '' || money === null)
};

start(); 

let appData = {
    budget: money, 
    budgtDay: 0, 
    budgetMonth: 0, 
    income: {}, 
    addIncome: [], 
    expenses: {}, 
    addExpenses: [], 
    expensesMonth: 0, 
    deposit: false, 
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000, 
    period: 3, 
    asking: function () {

        if(confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome;
            do { 
            itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } 
            while (itemIncome === '' || itemIncome === null || !isNaN(itemIncome));
            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            } 
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую?');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        
       
        let str='';
        let element;
        addExpenses.forEach(function(item, index, array) {
            item = String(item); 
            str += item;
            console.log(str); 
          });

          let string = 'I am  the code';

console.log(
str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', ')
);


        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.getInfoDeposit();

        for (let i=0; i < 2; i++) {

            let itemExpensess; 
            do {
                itemExpensess = prompt('Введите обязательную статью расходов?', 'Хозяйственные нужды');
            }
            while (itemExpensess === '' || itemExpensess === null || !isNaN(itemExpensess));
            let cashExpenses;
            do {
                cashExpenses = prompt('Во сколько это обойдется?', 2500);
            }
            while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
        
            appData.expenses[itemExpensess] = cashExpenses;

        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgtDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;
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
    calcSavedMoney:function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + 'месяца');   
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}


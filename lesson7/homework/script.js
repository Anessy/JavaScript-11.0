'use strict';

// если входящее n - число, ф-ция возвращ. true иначе - false
// isFinite - если число конечное - возвращ true
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let appData = { 
    income : {},
    addIncome: [], 
    expenses: {}, 
    addExpenses: [], 
    deposit: false, 
    mission: 5000,  
//==================================
    budget: function(){
        let money;
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money));
        
        console.log('Ваш месячный доход = ' + money);
        return money;
    },   
//==================================
asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы через запятую:','Internet, Taxi, Cafe'); // обязательные расходы по умолчанию
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm ('Есть ли у вас депозит в банке?');

//===================================

   function getExpensesMonth() {
        let sum = 0; 
        let number = 0;
        let key;
            for (let i=0; i<2; i++) {
                key = prompt('Введите обязательную статью расходов');
                number = +prompt('Во сколько это обойдется?');
                while (!isNumber(number)) {
                    number = +prompt('Вы ввели неккоректные данные. Во сколько это обойдется?');
                };
                appData.expenses[key] = number;
                sum +=number; 
            }
             
        console.log(' Расходы за месяц = ' + sum);
        console.log(appData.expenses);
        return sum;
    }
    let expenses = getExpensesMonth();
   return expenses;
},
//==================================
    budgetMonth: function getBudget () {
        let money = appData.budget();
        let expensess = appData.asking();
        let budgetMonth = money - expensess;
        console.log('Бюджет на месяц: ' + budgetMonth );
        return budgetMonth;
    }, 
//==================================
    budgetDay: function getStatusIncome () {
        let budgetDay = appData.budgetMonth()/30;
        console.log('Дневной бюджет: ', budgetDay);
        
        if (budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        } else if ((budgetDay > 600) && (budgetDay <= 1200)) {
            console.log('У вас средний уровень дохода');
        } else if (((budgetDay <= 600) && (budgetDay > 0))) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
            console.log('Что то пошло не так');
        };
        return budgetDay;
    },
//==================================
    period: function getTargetMonth() {
        let budgetOfDay = appData.budgetDay();
        let period = Math.floor(appData.mission/budgetOfDay);
        console.log('Вы накопите необходимую сумму в ' + appData.mission + ' за период в ' + period + ' месяцев');
        return period;  
    },
//==================================
//==================================
};

appData.period();
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log('Ключ: ' + key + ' Занчение: ' + appData[key]);
}

// let bm = appData.budgetMonth();


//   if (bm > 0) {
//         appData.period = Math.floor(appData.mission/bm);
//         console.log(`Вы сможете накопить ` + appData.mission + ` за период в ` + appData.period + ` месяцев` );
//   }else {
//       console.log('Вы в долгах! Накопить не получится!');
//   };

// let needPeriod = appData.tergetMonth();

// if (needPeriod > 0) {
//     console.log('needPeriod =' + needPeriod);
// } else if (needPeriod === 0) {
//     console.log('У вас уже есть нужная сумма. Период = 0');
// } else {
//     console.log('Цель не будет достигнута.');
// };

//  console.log(appData.getStatusIncome());
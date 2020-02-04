'use strict'; 

// получить каждый элемент в отдельную переменную:






// Кнопку "Рассчитать" через id
let buttonCalculate = document.getElementById('start'); 


// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let buttonPlusIncome = document.getElementsByTagName('button')[0];
let buttonPlusExpenses = document.getElementsByTagName('button')[1];

// Чекбокс по id через querySelector
let checkboxDeposit = document.querySelector('#deposit-check'); 

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let inputAdditionalIncome = document.querySelectorAll('.additional_income-item'); 
console.log('inputAdditionalIncome: ', inputAdditionalIncome);

// Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
let budgetDay = document.querySelector('.budget_day-value');
let expensesMonth = document.querySelector('.expenses_month-value');
let additionalIncome = document.querySelector('.additional_income-value');
let additionalExpenses = document.querySelector('.additional_expenses-value');
let incomePeriod = document.querySelector('.income_period-value');
let targetMonth = document.querySelector('.target_month-value');

// Оставшиеся поля через querySelector каждый в отдельную переменную:
let monthlyIncome = document.querySelector('.salary-amount');
let noMainIncomeTitle = document.querySelector('.income-title');
let noMainIncomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title'); 
let expensesAmount = document.querySelector('.expenses-amount'); 
let additionalExpenses = document.querySelector(.'additional_expenses-item'); 
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select'); 










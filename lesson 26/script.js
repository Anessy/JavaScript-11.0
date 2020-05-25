'use strict'

const firstNumber = document.querySelector('#a');
const secondNumber = document.querySelector('#b');
const sum = document.querySelector('#sum');
const mult = document.querySelector('#mult');
const res = document.querySelector('#res');
const degree = document.querySelector('#degree');
let resultIsNumber, resultSum, resultMult, resultDegree;

function isNumber (a) {
  if (a === '' || typeof(+a) !== 'number') {
    alert ('Вы ввели некоректные данные!');
    resultIsNumber = false;
  } else {
    resultIsNumber = true;
  } 
};

sum.addEventListener('click', function(){
  isNumber(firstNumber.value);
  isNumber(secondNumber.value);
  if (resultIsNumber === true) {
    resultSum = Number(firstNumber.value) + Number(secondNumber.value);
    res.value = resultSum;
  }
});

mult.addEventListener('click', function(){
  isNumber(firstNumber.value);
  isNumber(secondNumber.value);
  if (resultIsNumber === true) {
    resultMult = Number(firstNumber.value) * Number(secondNumber.value);
    res.value = resultMult;
  }
});

degree.addEventListener('click',function(){
  isNumber(firstNumber.value);
  isNumber(secondNumber.value);
  if (resultIsNumber === true) {
    resultDegree = Math.pow(Number(firstNumber.value), Number(secondNumber.value));
    res.value = resultDegree;
  };
});


'use strict';

let car = {
    model: 'mazda', 
    year: 2006,
}; 

let obj = new Object(); 

car.turbocharding = true; 
console.log(car); 
console.log(car.model); // mazda

console.log( car.style === obj); // true
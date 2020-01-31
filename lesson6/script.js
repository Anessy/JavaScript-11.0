'use strict'; 

let y = 10; 

function one() {
    let y = 4;
    function two() {
        let y = 2;
        console.log('function two ' + y); 
    }
    two();
    console.log('function one ' + y);
}; 

one();
console.log('global ' + y);
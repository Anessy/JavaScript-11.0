// outputMessage();

// function outputMessage(name, age){
//     console.log('Hello' + name);
//     console.log('Me age: ' + age);
// };

// outputMessage('Max', 30);

// //====================
// const = consoleMessage = function() {
//     console.log('Hello friend');
// };

// consoleMessage();

// //======================

// const = alertMessage = new Function('alert("Hi")');
// alertMessage();


// //====================== 

const sum = function(a, b) {
    if (!a) {
        a = 0;
    }
    if (!b) {
        b = 0;
    }
    return  a + b; 
}; 

let res = sum(3); 
console.log(res);

//=======================

function sum (a, b) {
    return a + b;
}

const sum2 = new Function('a', 'b', 'return a + b');

//=====================

(function() {
    console.log('Hello');
}());

//====================

const doNum = function(a, b, callback) {
    if (typeof a === 'number' && typeof b === 'number') {
        callback(a, b);
    }
};

doNum(5, 10, function(a, b){
    console.log(a + b);
});

function mult (a, b) {
    console.log(a * b);
}

doNum(3, 5, mult);
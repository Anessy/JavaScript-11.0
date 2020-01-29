// Создайте функцию, которая принимает 1 аргумент (название произвольное)
//— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается 
// и вместо них появляются три точки (...)

function str(a) {
    if (typeof a != 'string') {
        console.log('Это не строка');
    } else {
        a = a.trim();
    };
    if (a.length >= 30) {
        a[30] = '...';
        let b = a.length;
        let i = 31;
        for (i; i<=b; i++ ) {
            a[i] = undefined;
        };
    };
    return a; 
};

let strin = prompt ('Введите строку', '   Любая   строка  любая   длинная   '); 
console.log(strin);
console.log(strin.length);

let result = str(strin);
console.log(result);
console.log(result.length);

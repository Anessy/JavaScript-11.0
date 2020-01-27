console.log(true + false); // 1
console.log(typeof (true + false)); // number



// 12 / "6"
console.log('12 / "6": ', 12 / "6"); // 2 
console.log(typeof ( 12 / "6")); // number
// "number" + 15 + 3
console.log('"number" + 15 + 3: ', "number" + 15 + 3); //  number153
console.log(typeof ("number" + 15 + 3)); // string
// 15 + 3 + "number"
console.log('15 + 3 + "number": ', 15 + 3 + "number"); // 18number
console.log(typeof (15 + 3 + "number")); // string
// [1] > null
console.log('[1] > null: ', [1] > null); // true
console.log(typeof ([1] > null)); // boolean
// "foo" + + "bar"
console.log('"foo" + + "bar": ', "foo" + + "bar"); //fooNaN
console.log(typeof ("foo" + + "bar")); //string
// 'true' == true
console.log("'true' == true: ", 'true' == true); // false
console.log(typeof ('true' == true)); // boolean

true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true 
[] + null + 1            // 'null1'
0 || "0" && {}           // {}
[1,2,3] == [1,2,3]       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'

function ToPrimitive(input, preferredType){
  
    switch (preferredType){
      case Number:
        return toNumber(input);
        break;
      case String:
        return toString(input);
        break
      default:
        return toNumber(input);  
    }
    
    function isPrimitive(value){
      return value !== Object(value);
    }
  
    function toString(){
      if (isPrimitive(input.toString())) return input.toString();
      if (isPrimitive(input.valueOf())) return input.valueOf();
      throw new TypeError();
    }
  
    function toNumber(){
      if (isPrimitive(input.valueOf())) return input.valueOf();
      if (isPrimitive(input.toString())) return input.toString();
      throw new TypeError();
    }
  }

  let d = new Date();

// получение строкового представления
let str = d.toString();  // 'Wed Jan 17 2018 16:15:42'

// получение числового представления, то есть - числа миллисекунд с начала эпохи Unix
let num = d.valueOf();   // 1516198542525

// сравнение со строковым представлением
// получаем true так как d конвертируется в ту же строку
console.log(d == str);   // true

// сравнение с числовым представлением
// получаем false, так как d не преобразуется в число с помощью valueOf()
console.log(d == num);   // false

// Результат 'Wed Jan 17 2018 16:15:42Wed Jan 17 2018 16:15:42'
// '+', так же, как и '==', вызывает режим преобразования по умолчанию
console.log(d + d);

// Результат 0, так как оператор '-' явно вызывает преобразование в число, а не преобразование по умолчанию
console.log(d - d);
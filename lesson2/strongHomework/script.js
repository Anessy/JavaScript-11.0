let num = '33229'; 
let arr = []; 
let i = num.length; 
num = +num; 

let res = 1;
while (i>=1) {
    res*=num%10; 
    num = (num - (num%10))/10;
    i--;
      
}

console.log(res);

res = res ** 3;
console.log('res: ', res);

res = res.toString(); 
console.log (typeof res);
console.log('res: ', res);

console.log (res.substring(0,2));






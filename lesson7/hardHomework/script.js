'use strict'; 

//Метод date.getDay() возвращает номер дня недели, начиная с воскресенья.
function getWeekDay(date) {
    let days = ['monday','tuesday','wensday','tharsday','friday','sutaday','sunday'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 2); // 3 января 2014 года
  alert('our date is: ' + getWeekDay(date) ); // friday


let week = ['monday','tuesday','wensday','tharsday','friday','sutaday','sunday'];
for (let item of week){
    if (item == 'sutaday' || item == 'sunday'){
        document.write('<i>'+item+'</i>'+'<br \/>');
    } else if (item == getWeekDay(date)) {
        document.write('<b>'+item+'</b>'+'<br \/>');
    } else {
        document.write(item+'<br \/>'); 
    };
};
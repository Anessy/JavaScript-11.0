let addExpenses = prompt('Перечислите возможные расходы через запятую?');
        addExpenses = addExpenses.toLowerCase().split(',');
        console.log('addExpenses: ', addExpenses);

        let str='';
        let element;
        addExpenses.forEach(function(item, index, array) {
            item = String(item); 
            str += item;
            console.log(str); 
          });

          let string = 'I am  the code';

console.log(
str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', ')
);
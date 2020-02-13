// создание "кнопка удаления задания" 
var myNodelist = document.getElementsByTagName('LI'); 
var i;
for (i=0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// при нажатии на крестик, задание удаляется

var close = document.getElementsByClassName("close");
var i;
for (i=0; i<close.length; i++) {
    close[i].onclick = function(){
        let div = this.parentElement; 
        div.style.display = "none";
    }
}
// при клике на задание оно перечеркивается 

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked'); 
    }
},false); 

// при нажатии на кнопку add добавляем новое задание 

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value; 
    var t = document.createTextNode(inputValue); 
    li.appendChild(t);
    if (inputValue === '') {
        alert ("Поле не может быть пустым!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


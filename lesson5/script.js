'use ctrict'; 

function changeTires(snowTires){
    snowTires--;
    console.log(snowTires);
        if(snowTires > 0) {
            changeTires(changeTires);
        }
}; 

let n = 0; 

for (let i=0; i<=5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i); // 0 1 2 4 5
}
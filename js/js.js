'use strict';

//let num = 20;
//function showFirstMassage(text) {
    //alert(text);
    
    //console.log(num);
//}

//showFirstMassage("Hello world");
//console.log(num);


/*let calc = function(a,b) {
    return (a + b);
}
*/
let calc = (a,b) => a+b

console.log(calc(5,6));

console.log(calc(2,8));

function retVar() {
    let num = 50;
    return num;

}
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = 12.2;

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));



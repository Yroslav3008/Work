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
/*let calc = (a,b) => a+b

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
console.log(parseFloat(twelve));*/

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};
console.log(Object.keys(options).length);

let arr = ["first", 2, 3, "fourth", 5];

/*arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1");

for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}*/

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});

console.log(arr);
//global vs block scope
//let const->block scope

var x = 300;
if(true){
    x = 1000;
    let a = 10;
    const b = 20;
}

// console.log(a); //a is not defined bc it followes block scope
// console.log(b); //b is not defined bc it followes block scope

console.log(x)
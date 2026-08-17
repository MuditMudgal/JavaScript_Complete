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

// console.log(x)



//main thing is like example bigger person and smaller person , smaller person take icecream from bigger person but bigger person does not take icecream from smaller person 
//exaclty like this outer func() doesnot uses inner ❌ but inner take access to outer func()
function one(){
    const username = "Mudit"

    function two(){
        const website = "google"
        console.log(username)
    }

    // console.log(website)

    // two()
}

// one()

//find the error
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(username + website);
}
// console.log(username)


//+++++++++++++ interesting +++++++++++++++++

// there is two type of function writing
console.log(addone(5));

function addone(num){
    return num+1
}



const addtwo = function(num){
    return num+2
}

addtwo(5)
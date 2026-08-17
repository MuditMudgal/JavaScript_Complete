
function saymyname(){
    console.log("M");
    console.log("U");
    console.log("D");
    console.log("I");
    console.log("T");
}

saymyname();

// function add(num1, num2){
//     console.log(num1+num2)
// }
// const result = add(3, 4);
// console.log("Result : ",result)  //result = undefined
// add(3,4) //7
// add(3,"4") //34
// add(3,"hello") //3hello


function add(num1, num2) {
    return (num1+num2);
}
const result = add(3,4)
// console.log(result)
// console.log(typeof result);

function UserLoggedIn(username = "sam"){  //sam is taken as default value if there is no value from arguments 
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} user is logged in now`;
}

const user1 = UserLoggedIn("Ramesh")
const user2 = UserLoggedIn("Sanjay");
console.log(user1)
console.log(user2);
console.log(UserLoggedIn())
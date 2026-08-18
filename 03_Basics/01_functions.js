// function greet(name) {
    // name = parameter
// }

// greet("Mudit");
// "Mudit" = argument

// function saymyname(){
//     console.log("M");
//     console.log("U");
//     console.log("D");
//     console.log("I");
//     console.log("T");
// }

// saymyname();

// function add(num1, num2){
//     console.log(num1+num2)
// }
// const result = add(3, 4);
// console.log("Result : ",result)  //result = undefined
// add(3,4) //7
// add(3,"4") //34
// add(3,"hello") //3hello

function add(num1, num2) {
    return num1 + num2;
}
// const result = add(3,4)
// console.log(result)
// console.log(typeof result);

function UserLoggedIn(username = "sam") {
    //sam is taken as default value if there is no value from arguments
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} user is logged in now`;
}

// const user1 = UserLoggedIn("Ramesh")
// const user2 = UserLoggedIn("Sanjay");
// console.log(user1)
// console.log(user2);
// console.log(UserLoggedIn())

// ---------------------------FUNCTIONS 2-------------------------

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600))
const result = calculateCartPrice(200, 300, 400, 500, 600);
// console.log(...result)

//passing objects to function

const user = {
    username: "Mudit",
    userid: 124551,
    price: 5000,
};

function handleObject(anyuser) {
    console.log(
        `${anyuser.username} is the username and price is ${anyuser.price}`,
    );
}

// handleObject(user)

// handleObject({
//     username : "Hitesh",
//     price : 1000
// })

//passing arr to functions
const myArr = [10, 20, 30, 40];

function printArr(newarr) {
    console.log(`${newarr[0]} is first elemnt and last is ${newarr[3]}`);
}

// printArr(myArr)
printArr([200, 500, 400, 1000]);

//singleton
//via constructor

//literals->objects
const mySym = Symbol("key1"); //creating a symbol

const JsUser = {
    name: "Mudit",
    age: 18,
    [mySym]: "My_Unit_key1",
    location: "Rohtak",
    email: "mudit@google.com",
    fullname: "Mudit Mudgal",
    isloggedin: true,
    logginDays: ["mon", "sat", "wed"],
};

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["isloggedin"]);
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);

//create symbol, addto objects as key, ascess it via objects

JsUser.email = "muditchatgpt@google.com";
// console.log(JsUser["email"])
//freezing user
// Object.freeze(JsUser)
JsUser.email = "muditmicrosoft@microsoft.com";
// console.log(JsUser["email"])

// console.log(JsUser)

// function greeting() {
//     console.log("hello Js User");
// }

// greeting();

JsUser.greeting = function() {
    console.log("hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user my name is ${this.name}`)
}

JsUser.greeting();
JsUser.greetingTwo();
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} is the name of user`);
        console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

function chai() {
    let username = "Mudit";
    console.log(username);
    console.log(this.username);
}
// chai()

// function add(a, b){
//     return a+b;
// }

// add(14,16)

//writing arrow function
// () => {}
// const add = (a,b) => {
//     return a+b
// };

// const ans = add(30,15)
// console.log(ans);



// const addthree = (n1, n2, n3) => {
//     return n1 + n2 + n3;
// };
// console.log(addthree(3, 3, 3));



//explicit arrow function
const addthree = (n1, n2, n3) => n1 + n2 + n3;

console.log(addthree(3, 3, 6));


//writing objects to arrow function
const add = (n1,n2) => ({username: "hitesh"})
console.log(add(1,1))  
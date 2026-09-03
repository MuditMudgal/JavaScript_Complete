// // const promiseFour = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         let error = false
// //         if(!error){
// //             resolve({username: "Mudit", password: 123})
// //         }
// //         else{
// //             reject("Error: Try again later 404")
// //         }
// //     }, 1000)
// // })

// // promiseFour.then((user)=>{
// //     console.log(user)
// // })

// // promiseFour.then((user) => {
// //     return user.username;
// // }).then((username)=>{
// //     console.log(username);
// // }).catch((error)=>{
// //     console.log(error)
// // })
// //------------------------------------------------------------

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Javascript", password: 123 });
//         } else {
//             reject("Error: Js got wrong 404");
//         }
//     }, 1000);
// });

// async function getuser(){
//     try{
//         const user = await promiseFive
//         console.log(user);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getuser()

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Mudit");
//         }, 2000);
//     });
// }

// async function main() {
//     console.log("1");

//     const user = await getUser();

//     console.log("2");
//     console.log(user);
// }

// main();

// console.log("3");







// async function getAllGitdata(){
//     try{
//         const response = await fetch("https://api.github.com/users/muditmudgal");
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getAllGitdata()


fetch("https://api.github.com/users/muditmudgal")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

console.log("Hello Mudit Ji")
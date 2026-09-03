// const promiseOne = new Promise(function(resolve, reject){
//     //Do async works - DB calls, cryptography, networkCalls
//     setTimeout(() => {
//         console.log("Hello world")
//         resolve()
//     }, 1000);
// }) 

// promiseOne.then(function(){
//     console.log("promise completed");
// })



// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({
//             username: "Mudit",
//             email: "mudgalmudit@xyz.com"
//         })
//     }, 1000);
// }).then(function(user){
//     console.log(user);
// })


const promiseFourth = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                username: "Mudit Mudgal",
                password: "1234"
            })
        }
        else{
            reject('Error something went wrong')
        }
    }, 1000);
})

promiseFourth.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally either resolved or rejected")
}) 


function login(username, password ){
    console.log(`${username},${password} logged in successfully`);
}

// login(`John`);

function uppercase(str){
    return str.toUpperCase();
}

const ans = uppercase('javascript');
// console.log(ans);



// function hello(str){
    //     let ans = str.toUpperCase()
    //     return ans;
    // }
    // hello("japanese");
    // console.log(ans);


//Default parameter
// function area(length, breadth = 10){
//     return length*breadth;
// } 
// const result = area(4, 3);
// console.log(result);
// const result = area(5);
// console.log(result);
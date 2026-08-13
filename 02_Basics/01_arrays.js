// const myarr = [0,1,2,3,4,5]
// console.log(myarr)

// const arr2 = new Array(1,2,3,4,5,6)
// console.log(arr2)

//Array Method

//push
// myarr.push(6)
// console.log(myarr)
// myarr.push(7);
// console.log(myarr);
// myarr.pop()

//Unshift --adding element to first 
myarr.unshift(9) //9 0 1 2 3 4 5 
//shift  --remove element from first 
myarr.shift() //0 1 2 3 4 5
myarr.shift() // 1 2 3 4 5



//join
// const arr = [0,1,2,3,4,5,6]
// console.log(arr)
// const newarr = arr.join();
// console.log(newarr)

//slice splice
const myarr = [0,1,2,3,4,5]
//in slice- original arr is not manipulated
console.log("A ",myarr)  //print arr
console.log(myarr.slice(1,3))  //print slice
console.log("B ", myarr); //print arr
console.log(myarr.splice(1,3)) //print splice
console.log("C ", myarr);  //print arr
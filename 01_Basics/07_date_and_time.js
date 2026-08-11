// const now = new Date()
// console.log(now)

//creating specific date and time 
// const now = new Date(2026, 11, 8);
// console.log(now);

//getDate || getDay || getFullYear || getMonth
const now = new Date(2026, 11, 8); //Y M(0-11) D
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getMonth())
console.log(now.getFullYear());

const d1 = new Date(2026, 11, 8)
const d2 = new Date(2026, 7, 27);
console.log(d1<d2); //false



//finding exact now time
const date = new Date()
console.log(date.toLocaleTimeString()) 

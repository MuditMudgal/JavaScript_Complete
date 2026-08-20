// const coding = ["js", "cpp", "python","ruby", "java"]

// const ans = coding.forEach( (items) => {
//     console.log(items);
//     return items;
// } )

// console.log(ans);






//filter
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ans = myNum.filter((num) => num > 4);
// console.log(ans);


//using filter using arrow function

// const ans = myNum.filter( (num) => {
//     return num > 4
// });
// console.log(ans);


//returning values using for each
// const newArr = []

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNum.forEach((num) => {
    if(num>4){
        // newArr.push(num)
    }
})

// console.log(newArr);


//filter excercise 
const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//find books whose genre is equal to history
const ans = books.filter( (bk) => {
    return (bk.genre === 'History')
} )
// console.log(ans)

//find books who are published after 2000
const year = books.filter( (bk) => bk.publish>=2000 )
console.log(year)

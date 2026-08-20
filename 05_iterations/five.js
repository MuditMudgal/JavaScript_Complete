
const coding = ["javascript", "cpp", "python", "java", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (value) => {
//     console.log(value);
// } )





function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)




coding.forEach( function (item, index, arr) {
    // console.log(item, index, arr);
})



// [{} {} {}]   *******VVVV.Imp

const mycoding = [
    {
        //languages 1
        languageName: "Python",
        languageFileName: "py",
    },
    {
        //languages 2
        languageName: "ruby",
        languageFileName: "rb",
    },
    {
        //languages 3
        languageName: "Javascript",
        languageFileName: "JS",
    },
];

mycoding.forEach((item) => {
    console.log(item.languageName);
})
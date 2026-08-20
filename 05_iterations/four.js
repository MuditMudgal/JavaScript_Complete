//printing objects through loops ->for in
//for in loop gives keys(index)

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
};

for (const key in myObject) {
    // console.log(key);
}
for (const key in myObject) {
    // console.log(myObject[key]);
}


const myarr = ["js", "cpp", "rb"]

for (const key in myarr) {
    console.log(key); //indexes
    console.log(myarr[key]); //values
}
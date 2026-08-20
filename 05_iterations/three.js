//for of loop 

const arr = [1,2,3,4,5]

for(const ele of arr){
    // console.log(ele);
}

const str = "Hello World"

for(const ele of str){
    // console.log(ele);
}



//Map
const map1 = new Map()
map1.set('a',1)
map1.set('d',1)
map1.set('b',2)
map1.set('c',3)

// console.log(map1.get('a'))
// console.log(map1.get('d'));
// console.log(map1.get('e'));



const map2 = new Map();
map2.set("IN", "INDIA")
map2.set("US", "UNITED STATES")
map2.set("CN", "CANADA")
map2.set("UK", "UNITED KINGDOM")
// console.log(map2);

// for(const index of map2){
//     console.log(index);
// }
for (const [key, value] of map2) {
    // console.log(key); //printing keys only
    console.log(value);  //printing value only
}



///obj are not iterable 
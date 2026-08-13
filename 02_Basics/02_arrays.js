const marvel_heroes = ['thor', 'Ironman', 'spiderman']
const dc_heroes = ["superman", "batman", "flash"];

// console.log(marvel_heroes)

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][2])

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

//spread
const allheroesSpread = [...marvel_heroes, ...dc_heroes]
// console.log(allheroesSpread)

//flattening arr to simple form
const another_arr = [1,2,3,4,[5,6],7,8,[9,[6,7]]]
const ans = another_arr.flat(Infinity) //flat(depth)
// console.log(ans)


//is array/from
// console.log(Array.isArray(["hitesh","mudit"]))
// console.log(Array.from("Hitesh"))

// of
let score1 = 100
let score2 = 200
let score3 = 300;
console.log(Array.of(score1,score2,score3))
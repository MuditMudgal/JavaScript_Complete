// const myarr = [1,2,3,4,5]
const myarr = [4, 4, 4, 4, 4];

const initialvalue = 0;

const sumofarr = myarr.reduce(
    (accumulator,currentvalue) => accumulator+currentvalue, initialvalue
)
console.log(sumofarr)



const myShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const finalPrice = myShoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(finalPrice)
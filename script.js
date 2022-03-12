const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200},
    { name: 'Album',  price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25 } 
]
   
const filteredItems = items.filter((item)=>{
    return item.price <=100
})

const itemNames = items.map((item)=>{
    return item.name
})

console.log(filteredItems)
console.log(itemNames)
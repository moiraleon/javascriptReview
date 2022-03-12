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

const foundItem = items.find((item)=>{
    return item.name === 'Book'
})

items.forEach((item)=>{
    console.log(item.price)
})

items.forEach((item)=>{
    console.log(item)
})

const hasInexpensiveCost = items.some((item)=>{
    return item.price <= 30
})

const hasFreeItems = items.some((item)=>{
    return item.price <= 0
})

const hasSamePrice = items.every((item)=>{
    return item.price === 100
})

console.log(filteredItems)
console.log(itemNames)
console.log(foundItem)
console.log(hasInexpensiveCost)
console.log(hasFreeItems)
console.log(hasSamePrice)
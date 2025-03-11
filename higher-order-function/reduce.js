var orders = [
    {amount : 250},
    {amount : 400},
    {amount : 100},
    {amount : 325}
]



//whithout reduce
var totalAmount = 0
for (var i =0; i < orders.length; i++){
    totalAmount += orders[i].amount
}

console.log(totalAmount)


//with reduce

var totalAmount = orders.reduce(function(sum,order) {
    return sum + order.amount
},0)
console.log(totalAmount)


//newer 

const initialValue = 0
const sumWithInitial = orders.reduce(
    (accumulator, currentObject) => accumulator + currentObject.amount,
    initialValue,
)

console.log(sumWithInitial)
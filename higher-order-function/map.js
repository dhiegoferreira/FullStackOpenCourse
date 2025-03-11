var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Carlton', species: 'dog'},
    {name: 'Sagan', species: 'dog'},
    {name: 'Ursula', species: 'fish'},
    {name: 'Jimmy', species: 'cat'},
    {name: 'HArold', species: 'fish'},
]

//problem: get name of all animals

//without map 
var names = []
for (var i =0; i < animals.length; i++){
    names.push(animals[i].name)
}
console.log(names)

var names = animals.map(function(animal){
    return animal.name
})

console.log(names)

//create new structure to return
var names = animals.map(function(animal){
    return animal.name + 'is a ' + animal.species
})

console.log(names)


//Since ECMAScript 6 we can use arrow function
var names = animals.map((animal) => animal.name)
console.log(names)
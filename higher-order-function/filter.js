var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Carlton', species: 'dog'},
    {name: 'Sagan', species: 'dog'},
    {name: 'Ursula', species: 'fish'},
    {name: 'Jimmy', species: 'cat'},
    {name: 'HArold', species: 'fish'},
]



//static filter
var dogs = []

for (var i = 0; i < animals.length; i++){
    if(animals[i].species === 'dog')
        dogs.push(animals[i])

}



var dogs = animals.filter(function(animal){
    return animal.species === 'dog'
})

//we can split the valdiation in another function and pass as a predicate


var isDog = function(animal){
    return animal.species === 'dogs'
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)


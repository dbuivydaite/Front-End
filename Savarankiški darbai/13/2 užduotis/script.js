"use strict"

var countries = [
    { name: "Lietuva", area: 5300, populaton: 2801000 },
    { name: "Poland", area: 322575, population: 7750000 },
    { name: "Latvia", area: 64589, population: 4000 },
    { name: "Estonia", area: 45228, population: 331000 },
    { name: "France", area: 551695, population: 7750000 }
]

// 1 variantas

// for (var i = 0; i < countries.length; i++) {
//     var population = countries[i].population / 1000000
//     var areaPerPerson = countries[i].area / population


//     console.log("Šalis:" + countries[i].name + ", joje gyvena " + population.toFixed(2) + " mln. gyventojų. ")
//     console.log("Valstybės plotas: " + countries[i].area + " km², plotas tenkantis vienam gyventojui: " + areaPerPerson.toFixed(2) + " m².")
//     console.log("=========")
// }

// 2 variantas

// for (var x of countries) {
//     var population = x.populacion / 1000000
//     var areaPerPerson = x.area / populacion


//     console.log("Šalis:" + x.name + ", joje gyvena " + population.toFixed(2) + " mln. gyventojų. ")
//     console.log("Valstybės plotas: " + x.area + " km², plotas tenkantis vienam gyventojui: " + areaPerPerson.toFixed(2) + " m².")
//     console.log("=========")
// }

// 3 variantas

function print(name, area, population) {
    var population = x.population / 1000000
    var areaPerPerson = x.area / population


    console.log("Šalis:" + x.name + ", joje gyvena " + population.toFixed(2) + " mln. gyventojų. ")
    console.log("Valstybės plotas: " + x.area + " km², plotas tenkantis vienam gyventojui: " + areaPerPerson.toFixed(2) + " m².")
    console.log("=========")
}

for(var x of countries) {
    print(x.name, x.area, x.population)
}


"use strict"

const pristatymoKaina = 3

do {
    var prekesKaina = Number(prompt("Įveskite prekės kainą"))
} while (isNaN(prekesKaina));

let reikiaPristayti = confirm("Ar reikalingas pristatymas į namus? (taip/ne)")

if (reikiaPristayti) {
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
}

if (reikiaPristayti) {
    console.log("Prekės kaina: " + prekesKaina.toFixed(2) + " €")
    console.log("Pristatymas: " + pristatymoKaina.toFixed(2) + " €")
    console.log("Iš viso: " + (prekesKaina + pristatymoKaina).toFixed(2) + " €")
    console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.")
} else {
    console.log("Prekės kaina: " + prekesKaina.toFixed(2) + " €")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}
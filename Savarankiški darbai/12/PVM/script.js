"use strict"
const PVM = 1.21

do {
    var prekesKainaSuPVM = Number(prompt("Kokia prekės kaina su PVM?"))
} while(isNaN(prekesKainaSuPVM))

let prekesKainaBePVM = prekesKainaSuPVM / PVM
let PVMdalis = prekesKainaSuPVM - prekesKainaBePVM

console.log("Prekės kaina su PVM: " + prekesKainaSuPVM.toFixed(2) + "€")
console.log("PVM: " + PVMdalis.toFixed(2) + "€")
console.log("Prekės kaina be PVM: " + prekesKainaBePVM.toFixed(2) + "€")
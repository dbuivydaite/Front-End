"use strict"
const inputName = document.getElementById("inputName")
const inputSurname = document.getElementById("inputSurname")
const inputAge = document.getElementById("inputAge")
const add = document.getElementById("add")
const deleteFirst = document.getElementById("deleteFirst")
const deleteLast = document.getElementById("deleteLast")
const tbody = document.getElementById("tbody")

add.addEventListener("click", function () {
    if (inputName.value && inputSurname.value && inputAge.value > 0) {
        let row = tbody.insertRow(-1)
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        cell1.innerText = inputName.value
        cell2.innerText = inputSurname.value
        cell3.innerText = inputAge.value
        inputName.value = ""
        inputSurname.value = ""
        inputAge.value = ""
    } else {
        alert("Ne visi laukai užpildyti")
    }
})
function deleteRowAtIndex(index) {
    if (tbody.rows.length) {
        tbody.deleteRow(index)
    } else {
        alert("Nebėra ką trinti :)")
    }
}
deleteFirst.addEventListener("click", () => deleteRowAtIndex(0))
deleteLast.addEventListener("click",  () => deleteRowAtIndex(-1))
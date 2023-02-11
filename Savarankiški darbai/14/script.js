"use strict"
var inputName = document.getElementById("inputName")
var inputSurname = document.getElementById("inputSurname")
var inputAge = document.getElementById("inputAge")
var add = document.getElementById("add")
var deleteFirst = document.getElementById("deleteFirst")
var deleteLast = document.getElementById("deleteLast")
var tbody = document.getElementById("tbody")

add.addEventListener("click", function () {
    if (inputName.value && inputSurname.value && inputAge.value > 0) {
        var row = tbody.insertRow(-1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
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
deleteFirst.addEventListener("click", () => {deleteRowAtIndex(0)})
deleteLast.addEventListener("click",  () => {deleteRowAtIndex(-1)})
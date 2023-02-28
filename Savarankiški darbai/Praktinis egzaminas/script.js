"use strict"
// tabų mygtukai
const fp1tabButtons = document.getElementsByName("features1Tabs")
// tabai
const fp1tabs = document.getElementsByClassName("tab")

// rodyti tabą pasirinktame indekse [0..index]
function showTabAt(index) {
    for (const tab of fp1tabs) {
        tab.style.display = "none"
    }
    // Apsauga - jei tabų mygtukų daygiau nei pačių tabų, nebandyk rodyti neegzistuojančio tabo.
    if (index < fp1tabs.length) {
        fp1tabs[index].style.display = "grid"
    }
}

//Susieja mygtukų ir tabų rodymą pagal indeksą masyve (Pvz. nulinis mygtukas rodo nulinį tabą)
for (let index = 0; index < fp1tabButtons.length; index++) {
    fp1tabButtons[index].addEventListener("click", () => showTabAt(index))
}

//pradžia - paspaudžiamas mygtukas nulinis.
fp1tabButtons[0].click()
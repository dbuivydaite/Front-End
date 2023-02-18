"use strict"
let tabs = document.getElementsByClassName("tab")

function showTab(tabName) {
    for (const tab of tabs) {
        tab.style.display = "none"
    }
    document.getElementById(tabName).style.display = "flex"
}

showTab("content1")
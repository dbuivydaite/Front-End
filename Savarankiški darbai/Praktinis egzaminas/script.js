"use strict"
//---Navigacija - burgeris---------------------------------------
const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const navigationHeght = document.querySelector("nav").clientHeight

burger.addEventListener("click", function () {
    this.classList.toggle("rotate")
    links.classList.toggle("open")
})

const anchors = links.querySelectorAll("a")
const sections = document.querySelectorAll("section")

window.addEventListener("scroll", function () {
    let currentSection
    for (const section of sections) {
        if (window.scrollY >= section.offsetTop - navigationHeght) {
            currentSection = section.getAttribute("id")
        }
    }
    for (const anchor of anchors) {
        anchor.classList.remove("selected")
        if (anchor.getAttribute("href") === "#" + currentSection) {
            anchor.classList.add("selected")
        }
    }
})
// Close mobile menu when link clicked
for (const anchor of anchors) {
    anchor.addEventListener("click", function () {
        burger.classList.remove("rotate")
        links.classList.remove("open")
    })
}
// Close mobile menu when resized
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        burger.classList.remove("rotate")
        links.classList.remove("open")
    }
})

//---Tabų mygtukai-------------------------------------------
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

//---Swiper - reviews-------------------------------------------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        680: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        980: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});
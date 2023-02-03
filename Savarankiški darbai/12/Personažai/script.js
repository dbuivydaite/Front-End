let personazai = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]
console.log("Pirmas personažas: " + personazai[0])
console.log("Paskutinis personažas: " + personazai.at(-1))

do {
    var personazoNr = Number(prompt("Įveskite skaičių nuo 1 iki 6"))
} while(isNaN(personazoNr) || personazoNr < 1 || personazoNr > 6)

console.log("Personažas, kurio Nr. " + personazoNr + " yra " + personazai[personazoNr - 1])
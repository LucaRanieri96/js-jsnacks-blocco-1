// Snack 4 (sia con for che con while):
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// array con gli invitati
const invitedPeople = [
    "paolo",
    "francesca",
    "giovanni",
    "ferdinando",
    "claudia",
    "alessandro"
]

// chiedo all'utente il suo nome
const userName = prompt("Qual è il tuo nome?");

// ciclo for

let invited = false;

for (let i = 0; i < invitedPeople.length; i++) {

    if (invitedPeople[i] === userName) {
    invited = true;
}

// variante while

let invited = false;
let j = 0;

while (j < invitedPeople.length) {

    if (invitedPeople[j] === userName) {
    invited = true;
    }

    j++
}

// dico all'utente se è invitato o meno

if (invited) {
alert("Benvenuto alla festa del grande Gatsby!");
} else {
    alert("Mi dispiace, non sei stato invitato alla festa del grande Gatsby.")
}


// Il software deve chiedere per 10 volte all’utente di inserire un numero.
const Sum = document.getElementById("somma");

let numberSum = 0 

for (let i = 0; i < 10; i++) {
    const number = Number(prompt("inserisci un numero(ti verrà chiesto 10 volte)"));
    numberSum = numberSum + number;
}

// Il programma stampa la somma di tutti i numeri inseriti.
console.log("la somma dei numeri: " + numberSum)

Sum.innerHTML = "la somma dei numeri = " + numberSum;

// WHILE:LOOP

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
const Somma = document.getElementById("somma");

let sommaDeiNumeri = 0 

let j = 0;

while ( j < 10) {

    const numero = Number(prompt("inserisci un numero(ti verrà chiesto 10 volte)"));
    sommaDeiNumeri = sommaDeiNumeri + numero;

    j++
}

// Il programma stampa la somma di tutti i numeri inseriti.
console.log("la somma dei numeri: " + sommaDeiNumeri)

Sum.innerHTML = "la somma dei numeri = " + sommaDeiNumeri;

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
let numberSum = 0 

for (let i = 0; i < 10; i++) {
    const number = Number(prompt("inserisci un numero(ti verrà chiesto 10 volte)"));
    numberSum = numberSum + number;
}

// Il programma stampa la somma di tutti i numeri inseriti.
console.log("la somma dei numeri: " +numberSum)

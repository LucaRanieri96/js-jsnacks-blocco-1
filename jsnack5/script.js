// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Crea un array vuoto.

const oddNumbers = []

// Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6; i++) {

  let number = prompt("Inserisci un numero:");
  // se è dispari inseriscilo nell’array.
  if (number % 2 !== 0) {
      oddNumbers.push(number); 
  }
}

console.log(oddNumbers);

// alternativa while

// Chiedi per 6 volte all’utente di inserire un numero,

let j = 0;
while ( j < 6) {

  let number = prompt("Inserisci un numero:");
  // se è dispari inseriscilo nell’array.
  if (number % 2 !== 0) {
      oddNumbers.push(number); 
  }

  j++
}

console.log(oddNumbers);

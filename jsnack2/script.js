const firstWord = prompt ("inserisci una parola");
console.log(firstWord)

const secondWord = prompt ("inserisci un'altra parola");
console.log(secondWord)

if (firstWord.length < secondWord.length) {
    console.log (firstWord + secondWord)
} else {
    console.log (secondWord + firstWord)
}
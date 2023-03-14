const firstWord = prompt ("inserisci una parola");
console.log(firstWord)

const secondWord = prompt ("inserisci un'altra parola");
console.log(secondWord)

if (firstWord.length > secondWord.length) {
    console.log (firstWord + secondWord)
} else if(secondWord.length > firstWord.length) {
    console.log (secondWord + firstWord)
} else {
    console.log (firstWord + secondWord)
}
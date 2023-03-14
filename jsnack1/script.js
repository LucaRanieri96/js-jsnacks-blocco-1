const number1 = Number(prompt ("inserisci un numero"));
console.log(number1)

const number2 = Number(prompt ("inserisci un secondo numero"));
console.log(number2)

const result = document.getElementById("result");

if (number1 > number2) {
    console.log (number1)
    result.innerHTML = ("risultato = " + number1)
 } else {
    console.log (number2)
    result.innerHTML = ("risultato = " + number2)
}

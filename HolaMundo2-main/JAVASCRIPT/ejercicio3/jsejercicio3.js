
// Solicitar dos numero y la operacion de sumar o restar al usuario.
let numero1 = parseFloat(prompt("Introduce el primer numero"));
let numero2 = parseFloat(prompt("Introduce el segundo numero"));
let calculo = prompt("Introduce operacion ('sumar' o 'restar')");
let total;

// Se realiza el calculo segun la elección del usuario.
if (calculo == "sumar") {
    total = numero1 + numero2
} else {
    total = numero1 - numero2
}

//Mostrar los resultados si la operacion es valida o error y pedir al usuario que introduzca los datos
if (calculo == 'sumar' || calculo == 'restar') {
    alert("El resultado de la operacion es: " + total)
} else {
    alert("La operacion no es valida. Plis escribe 'sumar' o 'restar'")
}














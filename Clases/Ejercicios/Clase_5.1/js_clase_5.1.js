// Una función que devuelva el número de cifras de un entero solicitado al usuario.
let numeroEntero = parseInt(prompt("Introduce un numero"))
function nrCifras (numeroEntero) {
    let texto = numeroEntero.toString();
    return texto.length

}
let cifras = nrCifras(numeroEntero)
alert("El número " + numeroEntero + " tiene " + cifras + " cifras.")
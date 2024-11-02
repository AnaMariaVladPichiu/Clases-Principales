// Una función que devuelva el número de cifras de un entero solicitado al usuario.

let numeroEntero = parseInt(prompt("Introduce un numero"))
function nrCifras (numeroEntero) {
    let texto = numeroEntero.toString(); //toString transforma el array en cadena(string)
    return texto.length   //se devuelve el numero de elementos de la cadena, la longitud.

}
let cifras = nrCifras(numeroEntero)  //se declara una variable que almacena el valor de la funcion llamada(nrCifras(numeroEntero)), que recibe con el return.

alert("El número " + numeroEntero + " tiene " + cifras + " cifras.")

//Una función que muestre al usuario una secuencia de _ (se debe construir la cadena de uno en uno), la cantidad de _ será solicitada al usuario

function mostrarSecuencia() {
    let cantidad_guillones_ = parseInt(prompt("Cuantos guillones quieres en la secuencia"));
    let secuencia = "" ; //se crea una variable para almacenar el numero de guillones, inicializar la cadena vacia.
    for(let i= 0; i< cantidad_guillones_; i++) {
        secuencia+= "_";  //se agrega un guillon bajo _ a la cadena
        alert(secuencia);
    }
}
mostrarSecuencia()
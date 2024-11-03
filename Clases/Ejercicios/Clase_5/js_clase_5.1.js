// Una función que devuelva el número de cifras de un entero solicitado al usuario.

let numeroEntero = parseInt(prompt("Introduce un numero"))
function nrCifras(numeroEntero) {
    let texto = numeroEntero.toString(); //toString transforma el array en cadena(string)
    return texto.length   //se devuelve el numero de elementos de la cadena, la longitud.

}
let cifras = nrCifras(numeroEntero)  //se declara una variable que almacena el valor de la funcion llamada(nrCifras(numeroEntero)), que recibe con el return.

alert("El número " + numeroEntero + " tiene " + nrCifras(numeroEntero) + " cifras.")

//Una función que muestre al usuario una secuencia de _ (se debe construir la cadena de uno en uno), la cantidad de _ será solicitada al usuario

function mostrarSecuencia() {       //Función declarada

    let cantidad_guillones_ = parseInt(prompt("Cuantos guillones quieres en la secuencia"));
    let secuencia = ""; //se crea una variable para almacenar el numero de guillones, inicializar la cadena vacia.
    for (let i = 0; i < cantidad_guillones_; i++) {
        secuencia += "_";  //se agrega un guillon bajo _ a la cadena
        alert(secuencia);
    }
}
mostrarSecuencia()  //se llama a la funcion para mostrar el codigo. !!!si no, no aparece nada!!!!

//Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):  *+_*+_*+_*+_

const secuence = (a) => {           //Función flecha, anonima

    let serie = "";
    for (let i = 0; i < a; i++) {
        switch (i % 3) {
            case 0:
                serie += '*';
                break;
            case 1:
                serie += '+';
                break;
            case 2:
                serie += '_';
                break;

        }
    }
    alert(serie);
    console.log(serie);
}
secuence(4);

/* // Una función que permita mostrar un triángulo como el siguiente:
*
**
***
****
*****
 */

const triangulo = function triang(a) {          //Función expresion. 

    let estrellas = "";
    for (let i = 0; i < a; i++) {
        estrellas += "*";
        console.log(estrellas);
        alert(estrellas)
    }

}
triangulo(5);

//Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)

const diferenciDias = (function (fecha1, fecha2) {                         //Se emplea IIFE, función flecha y función expresión...
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //este array contiene el nr de dias de cada mes
    const diasDesdeElInicioDelAno = (dia, mes) => {
        let totalDias = dia;            //inicialización, empieza con el dia del mes actual(dia)
        for (let i = 0; i < mes; i++)  //Recorre los meses anteriores al mes actual (mes - 1), sumando los días de esos meses a totalDias.
            totalDias += diasPorMes[i];
        return totalDias;              //  La función devuelve el número total de días desde el inicio del año hasta la fecha dada.
    };
    const diasFecha1 = diasDesdeElInicioDelAno(fecha1.dia, fecha1.mes);
    const diasFecha2 = diasDesdeElInicioDelAno(fecha2.dia, fecha2.mes);
    return Math.abs(diasFecha2 - diasFecha1);   //Math.abs calcula el valor absoluto de la resta.


})({ dia: 15, mes: 5 }, { dia: 25, mes: 5 });  //la función se llama imediatamente con los objetos{dia:15....}{dia;25....}
alert(diferenciDias)
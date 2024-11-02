//Ejercicio 1:Solicita al usuario tres números enteros e indícale cuál es el menor.

let n1 = parseInt(prompt("Introduzca el 1ºnumero"), 10);
let n2 = parseInt(prompt("Introduzca el 2ºnumero"), 10);
let n3 = parseInt(prompt("Introduzca el 3ºnumero"), 10);
/* ejercicio resuelto utilizando la estructura if
let menor = n1

if(n2<n1){
    menor=n2
}
if(n2<n3){
    menor=n3
}
console.log ("El numero menor es " + menor);
alert("El numero menor es  "+ menor);
*/
//ejercicio resuelto utilizando la estructura swich

let menor;
switch (true) {
    case (n1 < n2 && n1 < n3): menor = n1;
        break;
    case (n2 < n1 && n2 < n3): menor = n2;
        break;
    case (n3 < n1 && n3 < n2): menor = n3;
        break

    default:
        break;
}
console.log("El numero menor es " + menor);
alert("El numero menor es  " + menor);

//Ejercicio 2: Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

let frase = String(prompt("Introduzca una frase"));
let letra = String(prompt("Introduzca una letra"));
let cuantas_veces = 0

for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) == letra) {
        cuantas_veces++;

    }

}
console.log("La letra " + letra + " aparece " + cuantas_veces + " Veces")
alert("La letra " + letra + " aparece " + cuantas_veces + " veces")

//Ejercicio 3:Suma o resta (según elija el usuario) dos números reales

let nr1 = parseFloat(prompt("Introduce un numero"))
let nr2 = parseFloat(prompt("Introduce otro numero"))

if (!isNaN(nr1) && !isNaN(nr2)) {
    let sumar = nr1 + nr2
    alert("El resultado es " + sumar)
} else {
    alert("Uno de los numeros, o los dos, no son validos")
}

//Ejercicio resuelto para caso en el cual queremos comprobar si son numeros reales cada uno de los numeros.:

let nr3 = parseFloat(prompt("Introduce un numero"))
let nr4 = parseFloat(prompt("Introduce otro numero"))

if (isNaN(nr3) && isNaN(nr4)) {
    alert("Ambos valores nos son numeros validos")
} else if (isNaN(nr3)) {
    alert("El numero introducido no es valido")
} else if (isNaN(nr4)) {
    alert("El segundo numero introducido no es valido")
} else {
    let sumar = nr3 + nr4
    alert("La suma de los numeros es: " + sumar)
}
//Ejercicio 4: Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)

/* Hecho con for. no es buena practica. HAY QUE HACERLO CON DO WHILE!!!

let usuario = "UsusarioCorrecto"
let contraseña = "ContraseñaCorrecta"

let intentos = 3

for (let i = 0; i < intentos; i++) {
    let user = prompt("Introduce el usuario")
    let password = prompt("Introduce la contraseña")
    if (user == usuario && contraseña == password) {
        alert("Acceso concedido")
        break;
    } else {
        alert("Usuario o contraseña incorrectas. Te quedan ${intentos-i-1} intentos.")

    }
    if (i == intentos - 1) {
        alert("Has agotado todos los intentos")
    }

} */



/* let usuario = "UsusarioCorrecto";          //  Hecho con do...while y declarando una variable de validacion que inicialmente tiene valor false porque es antes de que el usuario introduzca nada, osea que no ha introducido los credeciales correctas.
let contraseña = "ContraseñaCorrecta";

let intentos = 3;
let valido= false;

do {
    let user = prompt("Introduce el usuario");
    let password = prompt("Introduce la contraseña");
    
    if (user === usuario && password === contraseña) {
        alert("Esta bien");
        valido = true; // Marcar como autenticado
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Usuario o contraseña incorrectas. Te quedan ${intentos} intentos.`);
        }
    }
} while (!valido && intentos > 0);

if (!valido) {
    alert("¡Has agotado los intentos!");
} */


let usuario = "UsusarioCorrecto";               //Hecho con do...while.
let contraseña = "ContraseñaCorrecta";

let intentos = 3;
let user, password;

do {
    user = prompt("Introduce el usuario");
    password = prompt("Introduce la contraseña");

    if (user === usuario && password === contraseña) {
        alert("Esta bien");
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Usuario o contraseña incorrectas. Te quedan ${intentos} intentos.`);
        }
    }
} while ((user !== usuario || password !== contraseña) && intentos > 0);

if (intentos === 0) {
    alert("¡Has agotado los intentos!");
}

//Elercicio 5:  Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

let caracter = prompt("Introduce una letra").toLowerCase()

switch (caracter) {
    case "a": alert(7)
        break;
    case "b": alert(9)
        break;
    case ("c"): alert(101)
        break;

    default: alert("Te has equivocado de letra")
        break;
}

// Ejercicio 6;  Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja


function burbuja(lista) {
    let n = lista.length;
    let intercambio;
    do {
        intercambio = false
        for (let i = 0; i < n - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                let temporal = lista[i] // se crea una variable temporal para almacenar la posición i de la lista
                lista[i] = lista[i + 1]  //intercambio de la posición i con la posicion i+1
                lista[i + 1] = temporal  // intercambio de la posición i+1 con lo que tiene almacenado la variable temporal, que es la posición i.
                intercambio = true
            }

        }
        n--; // resta la ultima posicion del array lista cada vez que recore la lista y hace un intercambio, ya que el ultimo elemento está en su lugar correcto.
    } while (intercambio); // Repite la ejecución del bloque mientras swapped sea true, es decir, mientras se realicen intercambios.
    return lista;
}

let palabras = ["banana", "ana", "despues", "come", "feliz", "es"];
let palabrasOrdenadas = burbuja(palabras);
alert(palabrasOrdenadas);

// ejercicio resuelto sin utilizar el algoritmo de la burbuja:

let parole = ["banana", "ana", "despues", "come", "feliz", "es"];
parole.sort()
alert(parole)
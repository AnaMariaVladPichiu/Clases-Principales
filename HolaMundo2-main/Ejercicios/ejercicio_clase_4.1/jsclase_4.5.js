//Ejercicio 1

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

//Ejercicio 2

let frase = String(prompt("Introduzca una frase"));
let letra = String(prompt("Introduzca una letra"));
let cuantas_veces=0

for (let i = 0; i < frase.length; i++) {
    if (frase. charAt[i]== letra) { cuantas_veces++
        
    }
    
}
console.log("La letra " + letra + " aparece " + cuantas_veces + " Veces" )
alert("La letra " + letra + " aparece " + cuantas_veces + " veces")

//Ejercicio 3

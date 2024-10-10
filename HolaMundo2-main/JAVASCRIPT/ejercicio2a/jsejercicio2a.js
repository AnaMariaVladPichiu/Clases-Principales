let frase = prompt("Introiducir una frase");
let letra = prompt("Introducir una letra");//o
let contador = 0
//Hola     i=0 ->H, i=1->o
for (let i = 0; i < frase.length; i++) {
    if (frase[i] == letra) {
        contador++
    }
}
alert("La letra " + letra + " aparece " + contador + " veces en la frase.");
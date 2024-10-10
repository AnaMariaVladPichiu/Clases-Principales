const correctuser = "asiestabien";
const correctpassword = "tambienasiestabien";

let intentos = 3;
let user;
let password;
do {
    user = prompt("Introducir usuario");
    password = prompt("Introducir contraseña");
    intentos--;
    if (user != correctuser || password != correctpassword) {
        alert("Lo que has liado pollitooo! . Acceso denegado");
    }


} while ((user != correctuser || password != correctpassword) && intentos > 0);




if (user == correctuser && password == correctpassword) {
    alert("!Lo has conseguido!");
}  
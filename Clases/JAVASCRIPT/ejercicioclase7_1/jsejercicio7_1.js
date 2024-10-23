var enlaces = document.getElementsByTagName("a")
alert(enlaces.length)

var penultimo_enlace = enlaces[enlaces.length-2]
alert(penultimo_enlace)

var direccion_de_enlace = penultimo_enlace.href
alert(direccion_de_enlace)

let cont =0;
for(let i=0; i<enlaces.length;i++){
    if(enlaces[i].href =="http://prueba/"){
        cont++;
    }
}alert("Numero de enlaces " + cont)

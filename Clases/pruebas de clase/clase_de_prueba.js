//El parámetro indica la cantidad de caracteres de la secuencia
/* function ejercicio_2_3(tamSecuencia){ 
    var mostrar = "";
    for (let i = 0; i < tamSecuencia; i++) {
        switch(i%3){
            case 0:
                mostrar = mostrar + '*';
                break;
            case 1:
                mostrar = mostrar + '+';
                break;
            case 2:
                mostrar = mostrar + '_';
                break;
        }
    }
    alert(mostrar);
} */

    
    var promise = new Promise(function(resolve) {
    
        function sayHello() {
            resolve('Hello World!');
        }
    
        setTimeout(sayHello, 10000);
    
    })

    console.log(promise);
    
    promise.then(function(message) {
        console.log(message) 
    })


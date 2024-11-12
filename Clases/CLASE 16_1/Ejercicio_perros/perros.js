/* function crearPerro(url) {
    let img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
}


function perro() {


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {

            console.log(json.message);
            crearPerro(json.message);


        }

        );


}

perro();
 */
//
(function () {
    localStorage.clear();
})();

const crearImg = (perro) =>{
    let img = document.querySelector("#principal");
    if(img){
        pasarARegilla( img.src);
        img.src = perro.message;    
    }else{
        img = document.createElement("img");
        img.id = "principal";
        img.src = perro.message;
        img.height = 150;
        img.width = 150;
        let div = document.querySelector("#perro");
        div.appendChild(img);
        document.body.appendChild(div);
    }

    if(localStorage.nImagenes){
        localStorage.nImagenes=parseInt(localStorage.nImagenes)+1;
    }else{
        localStorage.nImagenes = 0;
    }
    //localStorage.nImagenes ? localStorage.nImagenes=parseInt(localStorage.nImagenes)+1: localStorage.nImagenes = 0;
}
const random = function (){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(datos => datos.json())
    .then(perro => crearImg(perro))
}
//<div class="casilla" id="raza"><img src="imagen1.jpg" 
//alt="Imagen 1"></div>
function pasarARegilla(url){
    if(localStorage.nImagenes && localStorage.nImagenes=="20"){
        alert("Has terminado. Mira tu gráfica de razas");
        crearGrafica();
    }else{
        let divImg = document.createElement("div");
        divImg.id = obtenerRaza(url);
        divImg.setAttribute("class", "casilla");
        let img = document.createElement("img");
        img.src = url;
        img.height = 150;
        img.width = 150;
        divImg.appendChild(img);
        let divRegilla = document.getElementById("rejilla");
        divRegilla.appendChild(divImg);
    }
}

function obtenerRaza(url){
    return url.split("/")[4];
}

function crearGrafica() {
    // Contar las razas
    let razas = {};  //contador, cuantos perros de cada raza hay en la rejilla
    document.querySelectorAll('#rejilla .casilla').forEach(casilla => {
        let raza = casilla.id;
        razas[raza] = (razas[raza] || 0) + 1;
    });

    // Preparar datos para la gráfica
    let labels = Object.keys(razas);
    let data = Object.values(razas);
alert(labels) //muestra las razas
alert(data)  //muestra el nr de veces que aparece cada raza
    // Obtener el contenedor de la gráfica
    let contenedorGrafica = document.getElementById('contenedor-grafica');

    // Crear un canvas para la gráfica
    let canvas = document.createElement('canvas');
    canvas.id = 'grafica-razas';
    contenedorGrafica.appendChild(canvas);

    // Crear la gráfica
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Número de perros por raza',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de razas de perros'
                }
            }
        }
    });
}
function crearPerro(url) {
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

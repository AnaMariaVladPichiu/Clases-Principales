(function () {
    localStorage.clear();
})();

  

const obtenerPreguntas = function (){
    fetch("https://opentdb.com/api.php?amount=10&category=23")
    .then(response => response.json()) //convierte la respuesta de la API(que esta en JSON) a un objeto JavaScript
    .then(data => mostrarPreguntas(data.results))  //la
}
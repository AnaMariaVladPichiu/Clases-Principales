function crearDT(texto {
    let nodoText = document.createTextNode(texto);
    let nodoTd = document.createElement("td");
    nodoTd.appendChild(nodoText);
    return nodoTd;
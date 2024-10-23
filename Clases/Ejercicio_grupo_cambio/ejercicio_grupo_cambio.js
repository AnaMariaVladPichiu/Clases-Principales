/* / Disponemos en la caja del siguiente dinero distribuido de la siguiente manera: 234,27 € (información que se debe cargar en un array)// - Billetes de 500€: 0 */
// - Billetes de 200€: 0
// - Billetes de 100€: 0
// - Billetes de 50€: 1 
// - Billetes de 20€: 4
// - Billetes de 10€: 8
// - Billetes de 5€: 2
// - Monedas de 2€: 5
// - Monedas de 1€: 4
// - Monedas de 0.50€: 0
// - Monedas de 0.20€: 0
// - Monedas de 0.10€: 1
// - Monedas de 0.05€: 2
// - Monedas de 0.02€: 3
// - Monedas de 0.01€: 1
// El programa obtiene un precio de artículo y un importe pagado desglosado (se deben conocer las cantidades entregadas de todos los billetes y monedas) y responderá si no hay cambio, 
/* si está justo o si se devuelve cambio, de nuevo con el desglose que debe ser lo más óptimo (es decir, si puedo devolver un billete de 20, no devuelvo 2 de 10, por ejemplo). */

// Debemos mostrar al final el desglose del cambio y el nuevo estado de la caja.

let caja = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
[0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1]];

let pago = [[500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let importe = 45;

/* function total(efectivo) {
	let resultado = 0
	for (let i = 0; i < efectivo[0].length; i++) {
		resultado += efectivo[0][i] * efectivo[1][i]
	}
	let redondeo = Math.round(resultado * 100) / 100
	efectivo[0].push(resultado);
	alert(redondeo);

	return efectivo;

} */
function buscar(caja, importe) {
	let pos = -1;
	while (caja[0][pos] >= importe) {
		pos++;
	}
	//let restacambio;
	let nbilletes = Math.trunc((importe / caja[0][pos]));
	/* nBilletes = Math.trunc((cambio / efectivo[0][pos])) */
	//if (importe - numerobilletes * pos[0][i]) {
	if (nbilletes <= caja[1][pos]) {
		importe -= caja[0][pos] * nbilletes;
		while (caja[0][pos] >= importe) {
			pos++;
		}
		nbilletes = Math.trunc((importe / caja[0][pos]));
		if (nbilletes <= caja[1][pos]) {
			importe -= caja[0][pos] * nbilletes;
		}
		else
			alert(importe + "es cero");
	}
}


// alert(buscar(caja, 25));

/* pago = total(pago);
caja = total(caja);
// alert(pago[0][pago[0].length - 1]);
if (importe - pago[0][pago[0].length - 1] == 0) {
	alert("importe justo");
} else {
	
	if (pago[0][pago[0].length - 1] - importe > caja[0][caja[0].length - 1]) {// No hay cash
		alert("No hay cambio disponible");
	} else { //no paga suficiente cash
	if (pago[0][pago[0].length - 1] < importe){ 
		alert("falta cash")
		}else{
			let cambio = pago[0][pago[0].length - 1] -importe;
-		}
		}
	}
		 
//alert("iporte no justo");


 */

function carrito() {
    let cantidadRevistas = prompt("¿Cuantas revistas desea?");
    let cantidadLibros = prompt("¿Cuantos libros desea?");
    alert("Usted a pedido la cantidad de " + cantidadRevistas + " revistas y de libros " + cantidadLibros + " a su pedido");
}
carrito();

function sumaTotal() {
    let valorTotal = revistas + libros ;
    return valorTotal;
}

let revistas = 50 ;
let libros = 200 ;
let compra = sumaTotal (revistas + libros);

console.log("el valor total de la compra realizada es de $" + compra)
console.log ("Muchas Gracias, por realizar la compra, espero que le guste.");



function carritoRevistas() {
    let cantidadRevistas = prompt("¿Cuantas revistas desea?");
    
    alert("Usted a pedido la cantidad de " + cantidadRevistas + " revistas");


}
carritoRevistas();

function carritoLibros(){
    let cantidadLibros = prompt("¿Cuantos libros desea?");

    alert("Usted a pedido la cantidad de " + cantidadLibros + " libros");

}
carritoLibros   ();

function sumaRevistas() {
    let precioRevistas = 50 ;
    let valorRevistas = precioRevistas * carritoRevistas ;
    return valorRevistas;
}
sumaRevistas()
function sumaLibros() {    
    let precioLibros = 200 ;

    let valorLibros = precioLibros * carritoLibros ;
    return valorLibros;
}
sumaLibros()

function sumaTotal(){
    let valorTotal = sumaLibros +sumaRevistas ;
    return valorTotal
}



let compra = sumaTotal (sumaLibros + sumaRevistas);

console.log("el valor total de la compra realizada es de $" + compra)
console.log ("Muchas Gracias, por realizar la compra, espero que le guste.");



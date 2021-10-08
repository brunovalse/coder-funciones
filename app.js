let precioRevistas = 50
let precioLibros = 200


function suma(){
    let a = prompt("Ingresar la cantidad de revistas que usted quiera")

    let b = prompt("Ingresar la cantidad de revistas que usted quiera")
        alert ("Usted solcita la cantidad de  " + a +" revistas y de " + b +" libros" );

    let cantidadRevistas = precioRevistas * a;
    console.log ("el pago debe ser de $ " + cantidadRevistas + " revistas"  );

    let cantidadLibros = precioLibros * b ;
    console.log("el pago debe ser de $ " + cantidadLibros + " libros");

    let sumaTotal = cantidadRevistas + cantidadLibros;
    alert("El monto total de pagar es de $ " + sumaTotal)

}
suma()

alert("Muchas gracias por realizar su pedido")



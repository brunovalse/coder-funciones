let precioRevistas = 50
let precioLibros = 200

const revistasStock = [' Olé', ' El grafico', ' Gente', ' Billboard', ' Forbes']

alert('las revistas que poseemos son:' + revistasStock + ' todas al mismo valor')
 
console.log('las revistas que poseemos son:' + revistasStock + ' todas al mismo valor')


console.log('<--------------------->')


const librosStock = [' El Señor De Los Anillos', ' Harri Potter', ' Instinto', ' La Ciencia de la Matematica', ' Akasha']

alert('los libros que poseemos son:' + librosStock + ' todos al mismo valor')
 
console.log('los libros que poseemos son:' + librosStock + ' todos al mismo valor')


console.log('<--------------------->')




function suma(){
    let a = prompt("Ingresar la cantidad de revistas que usted quiera")

    let b = prompt("Ingresar la cantidad de libros que usted quiera")
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



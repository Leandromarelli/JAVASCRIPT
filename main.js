// 1° TRABAJO COMPLEMENTARIO //

// let nota = Number(prompt('ingrese su nota obtenida:'));

// if (nota >= 7) {
//     alert('Promociona la materia');
// } else if (nota<=6){
//     alert('No promociona la materia');
// } else {
//     alert ('ingrese un dato válido');
// }


// 1° ENTREGA - SIMULADOR INTERACTIVO //

let producto ="";
let precio = 0;
let seguirComprando = false;
let cantidad = 0;
let total = 0;

function calcularPrecio(a,b){
   return total= a * b;
}
do{
    producto = prompt('Qué querés de comer?','Ej: Tallarines, Nocci, Cintas').toUpperCase();
    cantidad = parseInt(prompt("Cuantas porciones querés comprar? (1 porción = 500gr)",'Ej: 1, 2, 3'));

    switch(producto){
        case "TALLARINES" :
            precio = 600;
            break;
        
        case "NOCCI" :
            precio = 550;
            break;
        
        case "CINTAS":
            precio = 600;
            break;
        default :
            alert("Por favor elija una opción válida para procesar su compra");
            precio = 0;
            cantidad = 0;

    }
   
    calcularPrecio(precio,cantidad);

    seguirComprando = confirm("¿Querés Seguir Comprando?");
        
}while(seguirComprando);

alert("El total es de: " + total);

let FinCompra = confirm("¿Desea Finalizar Su Compra?");

if(FinCompra) alert("Su compra fue realizada con exito");























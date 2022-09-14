
const productos = [
    { nombre: 'Sorrentinos', precio: 480, porcion: '(8 unid)', },
    { nombre: 'Ravioles', precio: 480, porcion: '(12 unid)' },
    { nombre: 'Capelletti', precio: 480, porcion: '(12 unid)' },
    { nombre: 'Tallarines', precio: 300, porcion: '(300gr)' },
    { nombre: 'Cintas', precio: 300, porcion: '(300gr)' },
    { nombre: 'Nocci', precio: 300, porcion: '(300gr)' },
]
console.log(productos);

let carrito = [];
let producto = "";
let precio = 0;
let seguirComprando = false;
let cantidad = 0;
let total = 0;

do {
    producto = prompt('Qué querés de comer?', 'Ej: Tallarines, Nocci, Cintas').toLowerCase();
    cantidad = parseInt(prompt("Cuantas porciones querés comprar? (1 porción = 500gr)", 'Ej: 1, 2, 3'));

    switch (producto) {
        case "tallarines":
            precio = 600;
            break;

        case "nocci":
            precio = 550;
            break;

        case "cintas":
            precio = 600;
            break;
        default:
            alert("Por favor elija una opción válida para procesar su compra");
            precio = 0;
            cantidad = 0;

    }

    seguirComprando = confirm("¿Querés Seguir Comprando?");
    carrito.push({ producto, cantidad, precio });


} while (seguirComprando);

    let verCompra = prompt("Querés ver el total de tu compra?")
    if (verCompra == "si") {
       
        carrito.forEach((totalCarrito) => {
    alert(`Compraste ${totalCarrito.cantidad} porciones de ${totalCarrito.producto} por un valor total de $${totalCarrito.cantidad * totalCarrito.precio}
    \n\nMuchas gracias por tu compra!!`)
})
} else {
    alert('Gracias por tu compra')
}







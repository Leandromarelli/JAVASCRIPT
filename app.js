// const productos = [
//     { "id":1, "nombre": 'Sorrentinos', "precio": 480, "porcion": '(8 unid)', "img": "assets/Sorrentinos1.jpg" },
//     { "id":2, "nombre": 'Ravioles', "precio": 480, "porcion": '(12 unid)', "img": "assets/ravioles.png" },
//     { "id":3, "nombre": 'Capelletti', "precio": 480, "porcion": '(12 unid)', "img": "assets/capelletti.png" },
//     { "id":4, "nombre": 'Tallarines', "precio": 300, "porcion": '(300gr)', "img": "assets/tallarines.png" },
//     { "id":5, "nombre": 'Cintas', "precio": 300, "porcion": '(300gr)', "img": "assets/cintas.jpg" },
//     { "id":6, "nombre": 'Nocci', "precio": 300, "porcion": '(300gr)', "img": "assets/noquis.png" },
// ]

// const carrito = [];

// // Crear f() para renderizar los productos (verlos en el html)
// function renderizarProductos (){
// // En el index.html creo un contenedor con un id: "tienda". En Js lo capturo.
//      const tienda = document.getElementById("tienda")
//      console.log(tienda);
// // tengo que recorrer el array de productos. Cuando creo (p) significa que ya tengo la key para ingresar a cada producto, pero no a cada atributo todavia.
//     productos.forEach((p) => {
// // creo un div con las clases que le voy a meter, en este caso class = "editElement"
//         let producto = document.createElement("div");
//         producto.classList.add("editElement");

// // Siempre tengo que crear un div en JS, es decir un nodo, para poder aplicarle lo que desee.
// // entonces, hago las comillas invertidas y dentro puedo usar ${} que me permite vincular info de JS en el HTML. 
// // ENTONCES:
//         producto.innerHTML =`
//         <div class="editElement">
//         <img src="${p.img}" alt="product image">
//         <div>
//             <h2>${p.nombre}</h2>
//             <p>Precio $${p.precio}</p>
//             <button id="${p.id}"> Añadir al carrito</button>
//         </div>
//         </div>
//         `

// // luego de producto.innerHTML = `<h1>${p}</h1>` crear el hijo del <div id="tienda">
//         tienda.appendChild(producto);

// // vincular cada boton con el id del producto correspondiente.
// // Es decir vincular el evento del click con lo que se desea como respuesta por ese click.
// // "let producto" es un HTML Collector. Dentro de ese div se encuentran los button. Se arma el AddEventListener y se le pasan dos parámetros
// // el "click" 1° parámetro y una arrow function como 2° parámetro.
//         producto.querySelector("button").addEventListener("click", ()=>{
//            agregarProductosAlCarrito(p.id);
//         })        
//     });

// }

// renderizarProductos();


// // Despues del querySelector creo una function vinculada a agregarProductosAlCarrito(p.id)
// // Tengo que pasarle el parámetro "id" para que solamente al tocar el button asociado al "id" me devuelva el dato de la f()
// function agregarProductosAlCarrito(id){

// // Busco con un find solamente los objetos del array producto que tengan atributos " === id"
//     let producto = productos.find(producto => producto.id === id)
// // La consola mostrará el objeto del array vinculado al button donde hice click. console.log(producto);

// // Si quiere 2 porciones de 1 producto, cuando haga click en "agregar al carrito" que solamente aumente el atributo "porciones"
// // Creo un find para que me devuelva todos los productos.id del array producto
// // pero tengo que darle las condiciones "if else" para saber si hay que buscarlo o pushear.
//     let productoEnCarrito = carrito.find(producto => producto.id === id);
//     if(productoEnCarrito){
//         productoEnCarrito.porcion++
//     }else {
//         producto.porcion = 1;
//         carrito.push(producto)
//     }
// // Luego de crear mas abajo la siguiente function la tengo que invocar acá para que muestre la seleccion de productos del usuario cada vez que haga click
// // teniendo en cuenta el concepto de "interacción entre funciones"
//     renderizarCarrito();
// // invoco la function del final acá para que tenga en cuenta cada vez que se agrega un producto
//     calcularTotal();
// }

// // Una vez que el usuario ya quiere efectuar la compra (carrito lleno) hay que renderizarlo y mostrarlo en el DOM
// // Usa un modal de BS para el button carrito. Hay un <div> con id="carrito"
// function renderizarCarrito(){
//     const d = document;
//     let carritoHTML = d.querySelector("#carrito");

// // Si el usuario elije 2 porciones del mismo producto, aparecerá en 2 lineas distintas en su carrito. 
// // La idea es que aparezca en 1 linea y que la cantidad sea 2, por eso con cada "click" debe "limpiarse" 
// // la linea adicional y cargarse en la unica linea, aumentando la cantidad

// carritoHTML.innerHTML = "";

//     carrito.forEach((p, index)=>{
// // Copio y pego lo del anterior forEach, porque es la misma estructura
//     let producto = document.createElement("div");
//     producto.classList.add("editElement");

//     producto.innerHTML =`
//         <div class="editElement">
//         <img src="${p.img}" alt="product image">
//         <div>
//             <h2>${p.nombre}</h2>
//             <p>Precio $${p.precio}</p>
//             <button id="${p.id}"> Añadir al carrito</button>
//         </div>
//         </div>
//         `
//         producto.querySelector("button").addEventListener("click", ()=>{
// // Tengo que invocar la function eliminarProductosDelCarrito para que haga efecto cuando elimine los productos
//             eliminarProductosDelCarrito(index);

//         })  

//         carritoHTML.appendChild(producto);


//     });
// }
// // Accede al index del array carrito [] (se puede poner index o indice porque es un parametro, lo llamo como quiera)
// function eliminarProductosDelCarrito(index){
//     carrito[index].porcion --;
//     if(carrito[index].porcion === 0){
// // Cuando el usuario va borrando las porciones y llega a 1, si borra de nuevo, la elimina
//         carrito.splice(index,1);
//     }
// // invocar la siguiente function para que haga todo el trabajo de limpiar cada vez que elimina y demás
//     renderizarCarrito();
// // invoco la function del final acá para que tenga en cuenta cada vez que se elimina un producto
//     calcularTotal();    
// }


// // Crear la funcion par sumar el total con el concepto de acumulador.
// function calcularTotal(){
//     let total = 0;
//     carrito.forEach((p)=> {
//         total += p.precio*p.porcion;
//     })

// // Dentro del carrito hay un <div id="total">
//     document.getElementById("total");
//     t.innerHTML = `<h4>El total es de $ ${total}</h4>`
// }
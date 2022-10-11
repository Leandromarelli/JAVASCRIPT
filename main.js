
import { homeControler } from "./home/homeController";




document.addEventListener('DOMContentLoaded', async () => {
    const productos = await homeControler();
    renderizarProductos(productos);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        renderizarCarrito(carrito);
        calcularTotal(carrito);
    }
})

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function renderizarProductos() {

    const tienda = document.getElementById('tienda')


    productos.forEach((({ id, nombre, precio, img }) => {

        let producto = document.createElement('div');
        producto.classList.add('editElement');

        producto.innerHTML = `
            <div class="card px-5 py-3 m-3 row justify-content-center bd-highlight container-fluid mx-0 p-4 border-bottom mb-4" style="background-color: #ffffff;"">
                <div class="card-body d-column-flex ml-2 border-bottom" >
                    <div>
                        <img class="editImg" src="${img}" alt="product image">
                        <div class="editFlex">
                        <h2>${nombre}</h2>
                        <p>Precio $${precio}</p>  
                        </div>
                    </div>
                    <button class="editarBoton" id="${id}">Agregar al carrito</button>
                </div>
                
            </div>
            `

        tienda.appendChild(producto);

        producto.querySelector('button').addEventListener('click', () => {
            agregarProductosAlCarrito(id);
        })
    }));

}


renderizarProductos();


function agregarProductosAlCarrito(id) {

    let producto = productos.find(producto => producto.id == id);
    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if (productoEnCarrito) {
        productoEnCarrito.porcion++;

        // swal("Agregaste una porcion al carrito");
        Toastify({
            text: "Agregaste una porción al Carrito",
            gravity: "bottom",
            backgroundColor: "linear-gradient(to right, #000, #aaaaaa)",
            duration: 3000,
        }).showToast();
    } else {
        
        Toastify({
            text: "Agregaste una porción al Carrito",
            gravity: "bottom",
            backgroundColor:"linear-gradient(to right, #000, #aaaaaa)",
            duration: 3000,
        }).showToast();

        carrito.push({
            ...producto,
            porcion: 1,
        });


    }

    // (productoEnCarrito === true)?(productoEnCarrito.porcion++):(carrito.push({...producto,porcion: 1}));

    renderizarCarrito();
    calcularTotal();


}

function renderizarCarrito() {
    let carritoHTML = document.querySelector("#carrito");

    carritoHTML.innerHTML = "";

    carrito.forEach((p, index) => {

        let producto = document.createElement("div");
        producto.classList.add("editElement");

        producto.innerHTML = `
                    <div class="editElement">
                         <h5>${p.nombre}</h5>
                    <div class="editElementCarrito">
                        <p>Precio $${p.precio} -</p>
                        <p>Porcion/es ${p.porcion}</p>
                        <button id="${p.id}" class="buttonCarrito">-</button>
                        <button id="${p.id}" class="buttonCarrito sumarProducto" value="${p.id}">+</button>
                    </div>
                        
                    </div>
                    `
        producto.querySelector("button").addEventListener("click", () => {
            eliminarProductosDelCarrito(index);
        })


        producto.querySelector(".sumarProducto").addEventListener("click", () => {
            carrito[index].porcion++;
            renderizarCarrito();
            calcularTotal();
          });


        carritoHTML.appendChild(producto);


    });
}


function eliminarProductosDelCarrito(index) {
    carrito[index].porcion--;
    if (carrito[index].porcion === 0) {
        carrito.splice(index, 1);
        Toastify({
            text: "Eliminaste el producto del Carrito",
            gravity: "top",
            position: "right",
            backgroundColor:"linear-gradient(to right, #aaaaaa, #000)",
            duration: 3000,
        }).showToast();
    }
    renderizarCarrito();

    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((p) => {
        total += p.precio * p.porcion;
    });

    const t = document.getElementById('total');
    t.innerHTML = `${total}`

    localStorage.setItem('carrito', JSON.stringify(carrito));

}



const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};



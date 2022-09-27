
const productos = [
    { "id": 1, "nombre": 'Sorrentinos', "precio": 480, "porcion": '(8 unid)', "img": "assets/Sorrentinos1.jpg" },
    { "id": 2, "nombre": 'Ravioles', "precio": 480, "porcion": '(12 unid)', "img": "assets/ravioles.png" },
    { "id": 3, "nombre": 'Capelletti', "precio": 480, "porcion": '(12 unid)', "img": "assets/capelletti.png" },
    { "id": 4, "nombre": 'Tallarines', "precio": 300, "porcion": '(300gr)', "img": "assets/tallarines.png" },
    { "id": 5, "nombre": 'Cintas', "precio": 300, "porcion": '(300gr)', "img": "assets/cintas.jpg" },
    { "id": 6, "nombre": 'Nocci', "precio": 300, "porcion": '(300gr)', "img": "assets/noquis.png" },
]

document.addEventListener('DOMContentLoaded', () => {
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


    productos.forEach((p) => {

        let producto = document.createElement('div');
        producto.classList.add('editElement');

        producto.innerHTML = `
            <div class="card px-5 py-3 m-3 row justify-content-center bd-highlight container-fluid mx-0 p-4 border-bottom mb-4" style="background-color: #ffffff;"">
                <div class="card-body d-column-flex ml-2 border-bottom" >
                    <div>
                        <img class="editImg" src="${p.img}" alt="product image">
                        <div class="editFlex">
                        <h2>${p.nombre}</h2>
                        <p>Precio $${p.precio}</p>  
                        </div>
                    </div>
                    <button class="editarBoton" id="${p.id}">Agregar al carrito</button>
                </div>
                
            </div>
            `

        tienda.appendChild(producto);

        producto.querySelector('button').addEventListener('click', () => {
            agregarProductosAlCarrito(p.id);
            // alert('agregaste una porción de '+p.nombre+' al carrito');
        })
    });

}


renderizarProductos();

function agregarProductosAlCarrito(id) {
    
    let producto = productos.find(producto => producto.id === id);

    let productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.porcion++;
    } else {
        producto.porcion = 1;
        carrito.push(producto);

        console.log(carrito);
    }
    

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
                        <button id="${p.id}" class="buttonCarrito">+</button>
                    </div>
                        
                    </div>
                    `
        producto.querySelector("button").addEventListener("click", () => {
            eliminarProductosDelCarrito(index);
        })

        carritoHTML.appendChild(producto);
        
      
    });
}

function eliminarProductosDelCarrito(index) {
    carrito[index].porcion--;
    if (carrito[index].porcion === 0) {
        carrito.splice(index, 1);
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
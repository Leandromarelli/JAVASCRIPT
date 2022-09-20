const productos = [
    { "id":1, "nombre": 'Sorrentinos', "precio": 480, "porcion": '(8 unid)', "img": "assets/Sorrentinos1.jpg" },
    { "id":2, "nombre": 'Ravioles', "precio": 480, "porcion": '(12 unid)', "img": "assets/ravioles.png" },
    { "id":3, "nombre": 'Capelletti', "precio": 480, "porcion": '(12 unid)', "img": "assets/capelletti.png" },
    { "id":4, "nombre": 'Tallarines', "precio": 300, "porcion": '(300gr)', "img": "assets/tallarines.png" },
    { "id":5, "nombre": 'Cintas', "precio": 300, "porcion": '(300gr)', "img": "assets/cintas.jpg" },
    { "id":6, "nombre": 'Nocci', "precio": 300, "porcion": '(300gr)', "img": "assets/noquis.png" },
]


const carrito = [];

function renderizarProductos (){

         const tienda = document.getElementById("tienda")
         console.log(tienda);

        productos.forEach((p) => {

            let producto = document.createElement("div");
            producto.classList.add("editElement");
    
            producto.innerHTML =`
            <div class="editElement">
            <img src="${p.img}" alt="product image">
            <div>
                <h2>${p.nombre}</h2>
                <p>Precio $${p.precio}</p>
                <button id="${p.id}"> Añadir al carrito</button>
            </div>
            </div>
            `

            tienda.appendChild(producto);

        });

    }
    
    renderizarProductos();
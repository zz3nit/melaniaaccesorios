let carritoDeCompras = [];

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById ('carrito-contenedor');

console.log (productos)

mostrarProductos(productos);

function mostrarProductos (productos) {
    contenedorProductos.innerHTML = ''
    productos.forEach(items => {
    
    let div = document.createElement ('div')
    div.className = 'producto'
    
    div.innerHTML =`<div class="card producto" style="width: 18rem;">
                        <img src="${items.img}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${items.nombre}</h5>
                            <p class="card-text">${items.descripcion}</p>
                            <span><p class="card-precio"> $${items.precio} </p></span>
                            <a id="botonCompra ${items.id}"
                            class="btn"><i class="fas fa-shopping-cart"></i></a>
                    `
    contenedorProductos.appendChild(div);

    let agregarProducto = document.getElementById(`botonCompra ${items.id}`)
    agregarProducto.addEventListener('click', () => {
        agregarCarrito(items.id)
        
    })

    });

}

function agregarCarrito (id) {
    let agregarItem = productos.find(items => items.id == id)
    carritoDeCompras.push(agregarItem);
    mostrarCarrito(agregarItem);

}




function mostrarCarrito (agregarItem) {
    let div = document.createElement ('div')
    div.className = 'productoCarrito'
    div.innerHTML = `<p>${agregarItem.nombre}</p>
                    <p> $${agregarItem.precio} </p>
                    <button class="boton-eliminar">
                    <i class="fas fa-trash-alt"></i>
                    </button>`
contenedorCarrito.appendChild(div)


}


function eliminar () {


}

function actualizarCarrito () {

}













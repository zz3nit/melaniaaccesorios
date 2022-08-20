let carritoDeCompras = [];

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById ('carrito-contenedor');

const contadorCarrito = document.getElementById ('contador-items');
const precioFinal = document.getElementById ('precio-total');

/*funcion global para guardar info*/
const guardarDatos = (clave, valor) => localStorage.setItem (clave, valor);

mostrarProductos(productos);

/*funcion para crear las cards de productos*/
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
/*funcion para q se agreguen los productos en el carrito*/
function agregarCarrito (id) {
    let existencia = carritoDeCompras.find(produc => produc.id == id)
    if (existencia){
        existencia.cantidad = existencia.cantidad + 1;
        document.getElementById(`cant${existencia.id}`).innerHTML = `<p id="cant${existencia.id}">cantidad: ${existencia.cantidad}</p>`
        actualizarCarrito()
    }else {
        let agregarItem = productos.find(items => items.id == id)
        agregarItem.cantidad = 1
        carritoDeCompras.push(agregarItem);
        mostrarCarrito(agregarItem);
        actualizarCarrito();
        
    }
    guardarDatos ("listaCompra", JSON.stringify(carritoDeCompras));/*funcion de guardar datos en el local*/

}

/*funcion para q aparezcan los productos en el carrito*/
function mostrarCarrito (agregarItem) {
    let div = document.createElement ('div')
    div.className = 'productoCarrito'
    div.innerHTML = `<p>${agregarItem.nombre}</p>
                    <p>$${agregarItem.precio}</p>
                    <p id="cant${agregarItem.id}">cantidad: ${agregarItem.cantidad}</p>
                    <button class="boton-eliminar" id="eliminar ${agregarItem.id}">
                    <i class="fas fa-trash-alt"></i>
                    </button>`
contenedorCarrito.appendChild(div)

let btnEliminar = document.getElementById(`eliminar ${agregarItem.id}`);
btnEliminar.addEventListener ('click', () => {
    if (agregarItem.cantidad == 1){
        carritoDeCompras = carritoDeCompras.filter(items => items.id !== agregarItem.id)
btnEliminar.parentElement.remove()
actualizarCarrito();
    }else {
        agregarItem.cantidad = agregarItem.cantidad - 1;
        document.getElementById(`cant${agregarItem.id}`).innerHTML = `<p id="cant${agregarItem.id}">cantidad: ${agregarItem.cantidad}</p>`
        actualizarCarrito()
    }
    guardarDatos ("listaCompra", JSON.stringify(carritoDeCompras));/*la llamo nuevamente para q se actualice el carrito si eliminan y refreszcan*/
})

}



function actualizarCarrito () {
    contadorCarrito.innerText = carritoDeCompras.reduce ((acc, el) => acc + el.cantidad, 0);
    precioFinal.innerText = carritoDeCompras.reduce ((acc, el) => acc + (el.precio * el.cantidad), 0);
    
}

function recuperarDatos () { /*funcion q permite traer los objetos del localStorage*/
    let productoRecuperado = JSON.parse (localStorage.getItem("listaCompra"))
    productoRecuperado.forEach (produc=> {
        mostrarCarrito(produc)
        carritoDeCompras.push(produc)
        actualizarCarrito();
    })
    
}

recuperarDatos(); 













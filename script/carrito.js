let carritoDeCompras = [];

const contenedorCarrito = document.getElementById ('carrito-contenedor');

const contadorCarrito = document.getElementById ('contador-items');

const precioFinal = document.getElementById ('precio-total');






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
    if (carritoDeCompras.length > 0){
        document.getElementById ('btnRealizarCompra').style.display ="block"
    } 
    else 
    {
        document.getElementById ('btnRealizarCompra').style.display ="none"
    }
    contadorCarrito.innerText = carritoDeCompras.reduce ((acc, el) => acc + el.cantidad, 0);
    precioFinal.innerText = carritoDeCompras.reduce ((acc, el) => acc + (el.precio * el.cantidad), 0);
   
}

function realizarCompra () {
    location.href = "http://127.0.0.1:5500/pages/carrito.html"
}

function recuperarDatos () { /*funcion q permite traer los objetos del localStorage*/
    let productoRecuperado = JSON.parse (localStorage.getItem("listaCompra"))
    if (productoRecuperado) {
        productoRecuperado.forEach (produc=> {
            mostrarCarrito(produc)
            carritoDeCompras.push(produc)
            actualizarCarrito();
    })
    }
    
}

recuperarDatos(); 
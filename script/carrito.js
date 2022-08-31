let carritoDeCompras = [];

const contenedorCarrito = document.getElementById ('carrito-contenedor');

const contadorCarrito = document.getElementById ('contador-items');

const precioFinal = document.getElementById ('precio-total');

const botonVaciarCarro = document.querySelector ('#btnVaciarCarrito');




/*funcion para q se agreguen los productos en el carrito*/
function agregarCarrito (id) {
    let existencia = carritoDeCompras.find(produc => produc.id == id)
    if (existencia){
        existencia.cantidad ++;
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

let btnEliminar = document.getElementById(`eliminar ${agregarItem.id}`); //boton q elimina producto uno x uno
btnEliminar.addEventListener ('click', () => {
    if (agregarItem.cantidad == 1){
        carritoDeCompras = carritoDeCompras.filter(items => items.id !== agregarItem.id)
btnEliminar.parentElement.remove();
actualizarCarrito();
    }else {
        agregarItem.cantidad = agregarItem.cantidad - 1;
        document.getElementById(`cant${agregarItem.id}`).innerHTML = `<p id="cant${agregarItem.id}">cantidad: ${agregarItem.cantidad}</p>`
        
        actualizarCarrito();
    
    }
    guardarDatos ("listaCompra", JSON.stringify(carritoDeCompras));/*la llamo nuevamente para q se actualice el carrito si eliminan y refreszcan*/
})

}


function actualizarCarrito () { //funcion para actualizar carrito
    carritoDeCompras.length > 0 ? document.getElementById ('btnRealizarCompra').style.display = "block" : document.getElementById('btnRealizarCompra').style.display = "none";//ternario
    carritoDeCompras.length > 0 ? document.getElementById ('btnVaciarCarrito').style.display = "block" : document.getElementById('btnVaciarCarrito').style.display = "none";//ternario
    contadorCarrito.innerText = carritoDeCompras.reduce ((acc, el) => acc + el.cantidad, 0);
    precioFinal.innerText = carritoDeCompras.reduce ((acc, el) => acc + (el.precio * el.cantidad), 0);
}

function realizarCompra () { //boton q redirige a la pagina para finalizar compra o checkout
    location.href = "./carrito.html"

}

function vaciarCarrito () { //funcion para vaciar carrito con un solo boton
    document.getElementById('carrito-contenedor').innerHTML = ""
    carritoDeCompras = [];
    actualizarCarrito();
    guardarDatos ("listaCompra", JSON.stringify(carritoDeCompras));
}


botonVaciarCarro.addEventListener('click', vaciarCarrito);



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


const contenedorProductos = document.getElementById('contenedor-productos');


const btnComprar = document.getElementById ('btnRealizarCompra')
btnComprar.addEventListener('click', realizarCompra)



const guardarDatos = (clave, valor) => localStorage.setItem (clave, valor);/*variable para agregar en el storage*/

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














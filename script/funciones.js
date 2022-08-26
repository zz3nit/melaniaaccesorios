

const contenedorProductos = document.getElementById('contenedor-productos');


const btnComprar = document.getElementById ('btnRealizarCompra')
btnComprar.addEventListener('click', realizarCompra);




const guardarDatos = (clave, valor) => localStorage.setItem (clave, valor);/*variable para agregar en el storage*/

mostrarProductos(productos);


/*funcion para crear las cards de productos*/
function mostrarProductos (productos) {
    contenedorProductos.innerHTML = ''
    productos.forEach(items => {
        const {img, nombre, descripcion, precio, id} = items //desestructuracion de objetos
    
    let div = document.createElement ('div')
    div.className = 'producto'
    
    div.innerHTML =`<div class="card producto" style="width: 18rem;">
                        <img src="${img}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">${descripcion}</p>
                            <span><p class="card-precio"> $${precio} </p></span>
                            <a id="botonCompra ${id}"
                            class="btn"><i class="fas fa-shopping-cart"></i></a>
                    `
    contenedorProductos.appendChild(div);

    let agregarProducto = document.getElementById(`botonCompra ${id}`)
    agregarProducto.addEventListener('click', () => {

        Toastify({
            text: "Producto adherido",
            className: "info",
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            border: "10px",
            }
        }).showToast(btnComprar);
        agregarCarrito(id)
    
    })
    
   
});

}













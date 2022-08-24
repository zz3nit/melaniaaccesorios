let listaObj = JSON.parse (localStorage.getItem("listaCompra"));
console.log(listaObj)

let tarjetaBody = document.getElementById ('tarjeta-body')
console.log(tarjetaBody);


listaObj.forEach(itemCarrito => {
    console.log(itemCarrito)
    let div = document.createElement ('div')
    div.className = 'compraTarjeta'

    div.innerHTML = `<div class="row item">
                        <div class="col-4 align-self-center"><img class="img-fluid" src=" ${itemCarrito.img} "></div>
                        <div class="col-8">
                        <div class="row"><b>$${itemCarrito.precio}</b></div>
                        <div class="row text-muted">${itemCarrito.nombre}</div>
                        <div class="row">Cant: ${itemCarrito.cantidad}</div>
                        <button class="boton-eliminar" id="eliminar ${itemCarrito.id}">
                        <i class="fas fa-trash-alt"></i>
                        </div>
                        <hr>` 
    tarjetaBody.appendChild(div);

    
});

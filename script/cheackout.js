let listaObj = JSON.parse (localStorage.getItem("listaCompra")) || [];
console.log(listaObj)

let tarjetaBody = document.getElementById ('tarjeta-body')

const precioTotal = document.querySelector('#precio-final')



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
                        <hr>` 
    tarjetaBody.appendChild(div);

    sumaTotal();

    
});


function sumaTotal() {
    precioTotal.innerText = listaObj.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)

}

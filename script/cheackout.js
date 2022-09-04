let listaObj = JSON.parse (localStorage.getItem("listaCompra")) || [];
console.log(listaObj)

let tarjetaBody = document.getElementById ('tarjeta-body');

const precioTotal = document.querySelector('#precio-final');

const listaItems = document.querySelector('#listaItems');





listaObj.forEach(itemCarrito => {
    console.log(itemCarrito)
    let div = document.createElement ('div')
    div.className = 'compraTarjeta'

    div.innerHTML = `<div  class="row item">
                        <div class="col-4 align-self-center"><img class="img-fluid" src=" ${itemCarrito.img} "></div>
                        <div class="col-8">
                        <div class="row"><b>$${itemCarrito.precio}</b></div>
                        <div class="row text-muted">${itemCarrito.nombre}</div>
                        <div class="row">Cant: ${itemCarrito.cantidad}</div>
                        <hr>` 
    tarjetaBody.appendChild(div);

    actualizarListaDeCompra ();

});



function actualizarListaDeCompra () {
    precioTotal.innerText = listaObj.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)

}

let inputs = document.querySelectorAll('.inputs');
let checkbox = document.querySelectorAll('#save_card');
let pagarConEfectivo = document.querySelector('#realizarCompra');

checkbox.forEach(check => {
    check.addEventListener('change', ()=>{
        console.log(check.checked);
        if(check.value == 'tarjeta' && check.checked){
            inputs.forEach(input => {
                input.style.opacity = 1
                input.disabled = false
            })
        }else if (check.value == 'efectivo' && check.checked){
            pagarConEfectivo.disabled = false;
        } else {
            pagarConEfectivo.disabled = true
            inputs.forEach(input => {
                input.style.opacity = 0.5
                input.disabled = true
            })
        }
    })
})




document.querySelector("#cancelarCompra").onclick = () => {
    Swal.fire({
        title: 'Quieres cancelar tu compra',
        text: "No podras revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancelar compra!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'CANCELADA!',
            'Tu compra ha sido cancelada.',
            'success')
            vaciarlistaDeCompra ()
            setTimeout(()=>{
                location.href = "./productos.html";
            }, 3000);
        }  
    })
}

document.querySelector("#realizarCompra").onclick = () => {
  
    Swal.fire({
        title: 'Quieres realizar tu compra',
        text: "No podras revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Realizar Compra!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            '',
            'Gracias por comprar en MelaniaAccesorios',
            'success')
            vaciarlistaDeCompra ()

            setTimeout(()=>{
                location.href = "./productos.html";
            }, 3000);
        
        }
    })   
    
}   


function vaciarlistaDeCompra (){
    document.querySelector('#tarjeta-body').innerHTML = ""
    listaObj = [];
    actualizarListaDeCompra();
    localStorage.clear ();

}

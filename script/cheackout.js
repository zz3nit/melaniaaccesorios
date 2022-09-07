/*JSON parceando los objetos desde el localStorage de carrito*/

let listaObj = JSON.parse (localStorage.getItem("listaCompra")) || [];
console.log(listaObj)


let tarjetaBody = document.getElementById ('tarjeta-body');
const precioTotal = document.querySelector('#precio-final');
const listaItems = document.querySelector('#listaItems');
const inputNombre = document.querySelector('#inputNombre');
const numeroTarjeta = document.querySelector('#inputNumeroTarjeta');
const numeroSeguridad = document.querySelector('#cvv');


/*Creacion HTMl de productos a comprar*/
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


/*funcion q actualiza los precios finales de la compra total*/
function actualizarListaDeCompra () {
    precioTotal.innerText = listaObj.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)

}

let inputs = document.querySelectorAll('.inputs');
let checkbox = document.querySelectorAll('#save_card');
let pagarConEfectivo = document.querySelector('#realizarCompra');

/*Validacion de las formas de pago*/
checkbox.forEach(check => {
    check.addEventListener('change', ()=>{
        console.log(check.checked);
        if(check.value == 'tarjeta' && check.checked){
            inputs.forEach(input => {
                input.style.opacity = 1
                input.disabled = false
                pagarConEfectivo.disabled = false
            })
                } else if (check.value == 'efectivo' && check.checked){
                    pagarConEfectivo.disabled = false
                }else {
                pagarConEfectivo.disabled = true
                inputs.forEach(input => {
                input.style.opacity = 0.5
                input.disabled = true 
            })
        }
    })
})

//Relleno de select de mes 
for (let i =1; i <=12; i++) {
    let seleccionMes = document.createElement('option');
    seleccionMes.value = i;
    seleccionMes.innerText = i;
    mesSeleccionado.appendChild(seleccionMes);
}

//Relleno de select de Año
const añoActual = new Date().getFullYear();
for (let i = añoActual; i <=añoActual + 8; i++ ){
    let seleccionAño = document.createElement('option');
    seleccionAño.value = i;
    seleccionAño.innerText = i;
    añoSeleccionado.appendChild(seleccionAño);
}

//Input validacion nombre de usuario de la tarjeta
inputNombre.addEventListener('keydown', (e) => {
    let valorNombre = e.target.value;
    inputNombre.value = valorNombre.replace(/[0-9]/g, '');
})


//Input validacion numero de tarjeta 
numeroTarjeta.addEventListener('keydown', (e)=>{
    let valorInput = e.target.value;
    numeroTarjeta.value = valorInput.replace(/\s/g,'').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        
})

//Input validacion de codigo de seguridad
numeroSeguridad.addEventListener('keydown', (e)=>{
    let valorInput = e.target.value;
    numeroSeguridad.value = valorInput.replace(/\s/g,'').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
})


/*librerias sweetalert para funcion de boton de comprar*/
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

/*funcion para cancelar compra*/
function vaciarlistaDeCompra (){
    document.querySelector('#tarjeta-body').innerHTML = ""
    listaObj = [];
    actualizarListaDeCompra();
    localStorage.clear ();

}


//  setTimeout(()=>{
//      `<img width ="100%" src="../public/img/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" onload="loadImage()" `
//  }, 3000)
// // loadImage();

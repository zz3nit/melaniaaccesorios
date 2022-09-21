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
let select = document.querySelectorAll('.seleccionVencimiento');


/*Validacion de las formas de pago*/

checkbox.forEach(check => {
    check.addEventListener('change', ()=>{
        console.log(check.checked);
        if(check.value == 'tarjeta' && check.checked){
            inputs.forEach(input => {
                input.disabled = false
                select.disabled = false
                input.addEventListener('input', () =>{
                    input.style.opacity = 1
                    select.forEach(sel => sel.style.opacity = 1)
                    
                    if (input.value !== ""){
                        pagarConEfectivo.disabled = false
                        pagarConEfectivo.style.opacity = 1
                    }else {
                        pagarConEfectivo.disabled = true
                        pagarConEfectivo.style.opacity = 0.5
                        input.disabled = true
                        select.forEach(sel => sel.style.opacity = 0.3)
                        select.disabled = true
                        }
                    }) 
                })
            }if(check.value == 'efectivo' && check.checked){
                pagarConEfectivo.disabled = false
                pagarConEfectivo.style.opacity = 1
            }else {
                pagarConEfectivo.disabled = true
                pagarConEfectivo.style.opacity = 0.5 
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
            }, 2500);
            
        }  
    })
}



    document.querySelector("#realizarCompra").onclick = () => {
        Swal.fire({
            title: 'Quieres realizar tu compra',
            text: "No podras revertir esta accion!",
            imageUrl: 'https://media2.giphy.com/media/72EjRhsNqkzDiwE6TC/giphy.gif?cid=ecf05e477gw15j07un1tow4ria3a0gen9myqm1x1t6u4ptp4&rid=giphy.gif&ct=g',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: '',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Realizar Compra!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Su pedido esta siendo preparado',
                'Gracias por comprar en MelaniaAccesorios',
                'success')
                vaciarlistaDeCompra ()
                setTimeout(()=>{
                    location.href = "https://zz3nit.github.io/melaniaaccesorios/pages/carrito.html";
                }, 2500);          
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



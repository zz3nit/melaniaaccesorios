let listaObj = JSON.parse (localStorage.getItem("listaCompra"));
console.log(listaObj)

let tarjetaBody = document.getElementById ('tarjeta-body')
console.log(tarjetaBody);


listaObj.forEach(itemCarrito => {
    console.log(itemCarrito)
    let div = document.createElement ('div')
    div.className = 'compraTarjeta'

    div.innerHTML = `<div class="itemsEnTarjeta"</div>
                    <p>${itemCarrito.nombre}</p>
                    <p>$${itemCarrito.precio}</p>
                    <p id="cant${itemCarrito.id}">cantidad: ${itemCarrito.cantidad}</p>
                    <button class="boton-eliminar" id="eliminar ${itemCarrito.id}">
                    <i class="fas fa-trash-alt"></i>
                    </button></div>` 
    tarjetaBody.appendChild(div);

    
});


// let tr = document.createElement ('tr')
//     // tr.className = 'producto'

//     tr.innerHTML = `<th scope="row">${itemCarrito.id}</th>
//                     <td>${itemCarrito.nombre}</td>
//                     <td>${itemCarrito.descripcion}</td>
//                     <td>$${itemCarrito.precio}</td>
//                     `

//     tableBody.appendChild(tr);
    
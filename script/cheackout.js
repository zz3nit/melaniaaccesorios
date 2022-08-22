let listaObj = JSON.parse (localStorage.getItem("listaCompra"));
console.log(listaObj)

let tableBody = document.getElementById ('table-body')
console.log(tableBody);


listaObj.forEach(itemCarrito => {
    console.log(itemCarrito)
    let tr = document.createElement ('tr')
    // tr.className = 'producto'

    tr.innerHTML = `<th scope="row">${itemCarrito.id}</th>
                    <td>${itemCarrito.nombre}</td>
                    <td>${itemCarrito.descripcion}</td>
                    <td>$${itemCarrito.precio}</td>
                    `

    tableBody.appendChild(tr);
    
});



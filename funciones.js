/* desafio de funciones, condicionales, operadores, ciclos y variables
voy a intentar hacer q un usuario se loguee e intente comprar algun producto
de 3 q va a haber y cuando termine la compra se lo salude!!*/

function probarCodigo (){

function usuario () {
    let user = prompt ("ingrese su nombre de usuario")
    console.log (user);  
    return user;
    
}
function contraseña () {
    let password = parseInt(prompt("ingrese su contraseña en numeros esta vez hasta q aprenda como combinar con letras"));
        while (isNaN(password)) 
            {
            password = parseInt( prompt( "reingrese contraseña"));
        }
        console.log (password);
        return password;
        }
let persona = usuario ();
contraseña ();
alert ("bienvenido querido "  + (persona) + " LE RECORDAMOS PONER LOS NOMBRES CON SUS MAYUSCULAS CORRESPONDIENTES GRACIAS.");

class Producto {
    constructor (nombre, precio, categoria, descripcion) {
        this.nombre = nombre,
        this.precio = parseFloat (precio),
        this.categoria = categoria,
        this.descripcion = descripcion;
    
    }
    sumarIva () {
        this.precio = this.precio * 1.21;
    }

}

const productos = [];
productos.push (new Producto ("Bandolera Milan", 2500, "Bandoleras", "Bandolera con correa ajustable, forrada por dentro" ));
productos.push (new Producto ("Mochila California", 3500, "Mochilas", "Mochila de cuero, color negro, con doble cierre" ));
productos.push (new Producto ("Cinto Melania", 1999, "Cintos", "Cinto de cuero, color negro, con detalles metalicos" ));
productos.push (new Producto ("Tobillera", 1500, "Accesorios", "Tobillera beige, para disfrutar este verano!!" ));

for (const producto of productos) {
    producto.sumarIva();
}

    
    let realizarCompra = prompt ("Que producto le gustaria comprar \n 1-Bandolera Milan \n-2 Mochila California \n-3 Cinto Melania \n-4 Tobillera");
    let indice;
    for (let producto of productos) {
        if (producto.nombre == realizarCompra){
            indice = productos.indexOf(producto);
            console.log (indice);
            alert( "Elegiste "+ productos[indice].descripcion + ": " + productos[indice].nombre + " su precio es $ " + productos[indice].precio);
        } 

}
alert ("Gracias por comprar en MelaniaAccesorios");

}
















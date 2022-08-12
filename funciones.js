/* desafio de funciones, condicionales, operadores, ciclos, variables y funciones de orden superior
voy a intentar hacer q un usuario se loguee e intente comprar algun producto
de 4 q va a haber y cuando termine la compra se lo salude!!*/


/*cree mi clase para los objetos a agregar en el array
y agregue un metodo para sumar el IVA a los productos
*/
class Producto {
    constructor (id,nombre, precio, stock, descripcion) {
        this.id = id,
        this.nombre = nombre,
        this.precio = parseFloat (precio),
        this.stock = stock,
        this.descripcion = descripcion;
    
    }
    sumarIva () {
        this.precio = this.precio * 1.21;
    }

}

const producto1 = new Producto (1,"Bandolera Milan", 2500, 10, "Bandolera con correa ajustable, forrada por dentro" );
const producto2 = new Producto (2,"Mochila California", 3500, 10, "Mochila de cuero, color negro, con doble cierre");
const producto3= new Producto (3, "Cinto Melania", 1999, 10, "Cinto de cuero, color negro, con detalles metalicos");
const producto4 = new Producto (4,"Tobillera", 1500, 10, "Tobillera beige, para disfrutar este verano!!" );

const productos = [producto1, producto2, producto3, producto4];

for (const producto of productos) {
    producto.sumarIva();
}


let carrito = [];

agregarAlCarrito()

function agregarAlCarrito () {
    let elijeProducto = parseInt(prompt("ingrese el id del producto Bandolera-1, Mochila-2, Cinto-3, Tobillera-4"));
    let productoAgregar = productos.find((el)=> el.id == elijeProducto)
    carrito.push(productoAgregar)
    console.log(carrito);
    alert ("Compraste " + productoAgregar.nombre + " " +  productoAgregar.descripcion); //forma correcta de devolver el nombre del producto comprado!

    actualizarCarrito ();

}

function actualizarCarrito() {
    console.log ("cantidad de productos agregados " + carrito.length)
    let suma = carrito.reduce ((acc, el)=> acc + el.precio, 0) // aqui quise aplicar el mapa pero no me funciono!
    console.log ("La suma de su carrito es $ " + suma);
    alert("La suma de su carrito es $ " + suma);

}

alert ("Gracias por comprar en MelaniaAccesorios");

// }

/*1er entrega del proyecto final*/


















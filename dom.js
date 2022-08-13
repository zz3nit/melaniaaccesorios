let ingreseUsuario;
let botonIngresoCompra = document.getElementById('botonCompra').style.visibility="hidden";
let botonVerificar = document.getElementById('boton-verificar');

let funcionIngresar = addEventListener('keypress', teclaEnter); 
botonVerificar.addEventListener('click', verificar);


function teclaEnter (e){
    console.log(e.key);
    if (e.key == 'Enter') {
        console.log('ok')
        verificar();
    }
}

function verificar() 
{
    ingreseUsuario = document.getElementById('ingresenombre').value;
    claveingresada = document.getElementById('claveUsuario').value;  
    let mensaje;
    
    let listadoDeUsuarios = traerUsuariosDeLabase();
    let usuarioRetornado = listadoDeUsuarios.find((usuario)=>usuario.nombre == ingreseUsuario);
    if (usuarioRetornado)
    {
        if (usuarioRetornado.clave==claveingresada) 
        {
            let tituloUsuario =document.getElementsByClassName('tituloUsuario');
            for(elementoTitulo of tituloUsuario) {
                elementoTitulo.innerText =`Bienvenido ${ingreseUsuario}`;
                document.getElementById('botonCompra').style.visibility="visible";
            }
            mensaje = "Inicio de sesion exitoso";
        }
        else
        {
        mensaje= "reingrese su clave";
        }
    }
    else 
    {
        mensaje= "Este usuario no existe"    
    }
    document.getElementById('mensaje').innerText=mensaje;
}

function traerUsuariosDeLabase () {
    let usuarios = [];
    usuarios.push (new Usuario("Gaston","5555"));
    usuarios.push (new Usuario("Cande","1111"));
    usuarios.push (new Usuario("Nico","6666"));
    usuarios.push (new Usuario("Mati","4444"));
    return usuarios;


}

class Usuario {
    constructor (nombre,clave) {
        this.nombre = nombre;
        this.clave = clave;

    }
}











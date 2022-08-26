let ingreseUsuario;
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
            let tituloUsuario = document.getElementsByClassName('tituloUsuario');
            for(elementoTitulo of tituloUsuario) {
                elementoTitulo.innerText =`Bienvenido ${ingreseUsuario}`;
            }
            mensaje = "Inicio de sesion exitoso";
            location.href = 'http://127.0.0.1:5500/pages/productos.html'
            
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
    // document.getElementById('mensaje').innerText=mensaje;
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











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
            let loading = document.querySelector('#loading');
            loading.innerHTML = `<img width="250px" src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340">`
            setTimeout(()=>{
            location.href = '../pages/productos.html'
        },3000);
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











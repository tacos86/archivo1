/* MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL!!!!! 

HAY QUE HACER CLASE*/

//PRIMERO SE DECLARA LA ENTIDAD//
class Usuario {
    constructor(nombre, apellido, mail, telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.telefono=telefono;
    }
}

//DESPUES LAS VARIABLES

const Usuarios = [];


//DESPUES FUNCIONES

function iniciar() {
let nombre =prompt("Ingrese su nombre");
let apellido =prompt("Ingrese su apellido");
let mail =prompt("Ingrese su mail");
let telefono =prompt("Ingrese su telefono");


//declaramos el usuario
let usuario = new Usuario (nombre, apellido, mail, telefono);
let aJSon = JSON.stringify(Usuario); //ME DA ESTE ERROR NO SE POR QUE!

//guardarmos el usuario 

guardar("usuario", usuario);

}

//funcion guardar el usuario
function guardar (a,b){
    localStorage.setItem(a,b)
}

//funcion descargar
function descargar(a){
    let descarga = JSON.parse(localStorage.getItem(a));
    return descarga
}

//logica
iniciar();






/*localStorage.setItem (nombreusuario, nombre);
localStorage.setItem (apellidousuario, apellido);
localStorage.setItem (mailusuario, mail);
localStorage.setItem (telusuario, telefeno);*/

//Array de usuarios y clase de usuario
var listaUsuarios = [];

class Usuario {
    constructor(usuario, clave, nombre, apellido,telefono,permiso,pregunta1,pregunta2) {
        this.nombreUsuario = usuario;
        this.clave = clave;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.permiso = permiso;
        this.pregunta1 = pregunta1;
        this.pregunta2 = pregunta2;
        }
}


//Usuario Predetermindaos

var administradores = new Usuario ('admin','1234','Yavirac','Desarrollo de Software','0992563584','3','azul','BvS');
listaUsuarios.push(administradores);
var propietario = new Usuario ('Propietario','5678','Maria','Zapata','023046034','3','rojo','plan de escape');
listaUsuarios.push(propietario);
  







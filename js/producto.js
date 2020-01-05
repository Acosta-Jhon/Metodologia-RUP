var listaProductos = [];

class Producto {
    constructor(codigo, nombre, descripcion,cantidad, proveedor) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
    }
};

//Productos Predeterminados

var producto1 = new Producto ('1','Pilsener','cerveza',10,'Cerveceria Nacional');
listaProductos.push(producto1);
var producto2 = new Producto ('2','Esfero Bic','esferos color azul',9,'Bic');
listaProductos.push(producto2);
var producto3 = new Producto ('3','Esfero Bic','esferos color rojo',8,'Bic');
listaProductos.push(producto3);
var producto4 = new Producto ('4','Esfero Bic','esferos color negro',7,'Bic');
listaProductos.push(producto4);
var producto5 = new Producto ('5','Cuaderno Norma','Cuaderno a cuadros 100 hojas',6,'Norma');
listaProductos.push(producto5);
var producto6 = new Producto ('6','Cuaderno Norma','Cuaderno a cuadros 100 hojas',5,'Norma');
listaProductos.push(producto6);

var tablaDeProductos = document.getElementById('tbody');
    
        for (let i = 0; i < listaProductos.length ; i++) {
            // fila = tr
            // columna = td
            var tr = document.createElement('tr');//crea una etiq tr
            var tdCodigo = document.createElement('td');//crea una etiq td
            var tdNombre = document.createElement('td');
            var tdDescripcion = document.createElement('td');
            var tdCantidad = document.createElement('td');
            var tdProveedor = document.createElement('td');
            tdCodigo.appendChild(document.createTextNode(listaProductos[i].codigo));
            tdNombre.appendChild(document.createTextNode(listaProductos[i].nombre));
            tdDescripcion.appendChild(document.createTextNode(listaProductos[i].descripcion));
            tdCantidad.appendChild(document.createTextNode(listaProductos[i].cantidad))
            tdProveedor.appendChild(document.createTextNode(listaProductos[i].proveedor));
            tr.appendChild(tdCodigo);//columna pertencerar a fila
            tr.appendChild(tdNombre);
            tr.appendChild(tdDescripcion);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdProveedor);
            
            tablaDeProductos.appendChild(tr);
        }

        var tablaDeProductos = document.getElementById('tbody1');
    
        for (let i = 0; i < listaProductos.length ; i++) {
            // fila = tr
            // columna = td
            var tr = document.createElement('tr');//crea una etiq tr
            var tdCodigo = document.createElement('td');//crea una etiq td
            var tdNombre = document.createElement('td');
            var tdDescripcion = document.createElement('td');
            var tdCantidad = document.createElement('td');
            var tdProveedor = document.createElement('td');
            tdCodigo.appendChild(document.createTextNode(listaProductos[i].codigo));
            tdNombre.appendChild(document.createTextNode(listaProductos[i].nombre));
            tdDescripcion.appendChild(document.createTextNode(listaProductos[i].descripcion));
            tdCantidad.appendChild(document.createTextNode(listaProductos[i].cantidad))
            tdProveedor.appendChild(document.createTextNode(listaProductos[i].proveedor));
            tr.appendChild(tdCodigo);//columna pertencerar a fila
            tr.appendChild(tdNombre);
            tr.appendChild(tdDescripcion);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdProveedor);
            
            tablaDeProductos.appendChild(tr);
        }



        
        var productoFisico=[];

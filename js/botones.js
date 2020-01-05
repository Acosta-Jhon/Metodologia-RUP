//funcion para verififcar usuario y contraseña
document.getElementById("btnIngresar").addEventListener("click",function () {
    var logUsuario = document.getElementById("log_usuario").value;
    var logClave = document.getElementById("log_password").value; 
    
    var usuario = listaUsuarios.find(
        data => 
            data.nombreUsuario === logUsuario
            && data.clave === logClave
    );

    if(typeof usuario === "undefined"){
        pLogin.style.display = "block";
        pLogin.innerText=("⮾ Usuario o Contraseña Incorrectas");
    }else{
        divLogin.style.display = "none";
        divInicio.style.display = "block"; 
        divRegistro.style.display = "none";
        divOlvClave.style.display = "none";
        divStockActual.style.display = "none";
        divListaMasVendida.style.display = "none";
        divIngresoProducto.style.display = "none";
        divSalidaProducto.style.display = "none";
        divConteoFisico.style.display = "none";
        divCierreInven.style.display = "none";
        divBtnRegresarMenu.style.display = "none";
        divIngreso.style.display = 'none'
        pLogin.style.display = "none";
        pRegistro1.style.display="none";
        divIngreso.style.display="none";
        divTablaConteo.style.display="none";
        divTCF.style.display="none";
    }
});

//Función para registrar y conocer quye campos no estan llenados con verificacion de usuario repetido


document.getElementById('btnRegistrar').addEventListener('click',function(){
                 
            if(document.getElementById('reg_user').value === ""){
                pRegistro1.style.display="block";
                pRegistro1.innerText=("Ingrese un Usuario Correcto");
            }else{
            if(document.getElementById('reg_password').value === ""){
                pRegistro1.style.display="block";
                pRegistro1.innerText=("Ingrese una Clave Correcta");
            }else{  
            if(document.getElementById('reg_nombre').value === ""){
                pRegistro1.style.display="block";
                pRegistro1.innerText=("Ingrese su Nombre");
            }else{
            if(document.getElementById('reg_apellido').value === ""){
                pRegistro1.style.display="block";
                pRegistro1.innerText=("Ingrese su Apellido");
            }else{
            if(document.getElementById('reg_phone').value === ""){
                    pRegistro1.style.display="block";
                    pRegistro1.innerText=("Ingrese un Numero Telefonico Correcto");
            }else{
            if(document.getElementById('reg_pregunta1').value === ""){
                pRegistro1.style.display="block";
                pRegistro1.innerText=("Conteste la Primera Pregunta de Seguridad");
            }else{
            if(document.getElementById('reg_pregunta2').value === ""){
                pRegistro1.style.display="block";
                pRegistro1.innerText=("Conteste la Segunda Pregunta de Seguridad");
            }else{
                var nuevoUsuario = new Usuario(document.getElementById('reg_user').value,
                document.getElementById('reg_password').value,
                document.getElementById('reg_nombre').value,
                document.getElementById('reg_apellido').value,
                document.getElementById('reg_phone').value,                                                    
                document.getElementById('reg_pregunta1').value,
                document.getElementById('reg_pregunta2').value);

            var regisUser = document.getElementById('reg_user').value;

            var verificarUsuario = listaUsuarios.find(
                    data1 => 
                    data1.nombreUsuario === regisUser
                    );
            if(typeof verificarUsuario === "undefined"){
            //para limpiar los campos del registro
            document.getElementById('reg_user').value="";
            document.getElementById('reg_password').value="";
            document.getElementById('reg_nombre').value="";
            document.getElementById('reg_apellido').value="";
            document.getElementById('reg_phone').value="";                                        
            document.getElementById('reg_pregunta1').value="";
            document.getElementById('reg_pregunta2').value="";    
            listaUsuarios.push(nuevoUsuario);
            divRegistro.style.display = "none";
            divInicio.style.display = "block";
            
            }else{
            pRegistro1.style.display="block";
            pRegistro1.innerText=("El Usuario ya existe");
            }
                }
                    }
                        }
                            }  
                                }
                                    }
                                        };

        
        
    
    
            
});





//Funcion para navegar de inicio a stock actual

document.getElementById('btnStockActual').addEventListener('click',function () {
    if (divInicio.style.display = "block") {
        divInicio.style.display = "none";
        divStockActual.style.display = "block";
        divBtnRegresarMenu.style.display = "block";
    }
    var tablaDeProductos = document.getElementById('tbody');
    var n=listaProductos.length-1
    for (let i = n; i < listaProductos.length ; i++) {
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
    
});


document.getElementById('btnIngresoProd').addEventListener('click',function () {
        divIngresoProducto.style.display = "block";
        divBtnRegresarMenu.style.display = "block";
        divSalidaProducto.style.display = "none";
        divConteoFisico.style.display = "none";
        divCierreInven.style.display = "none";
        divIngreso.style.display = 'none'
        divTablaConteo.style.display="none";
        divTCF.style.display="none";
        divLogin.style.display = "none";
        divInicio.style.display = "none"; 
        divRegistro.style.display = "none";
        divStockActual.style.display = "none";




    var tablaDeProductos = document.getElementById('tbody1');
    var n=listaProductos.length-1
    for (let i = n; i < listaProductos.length ; i++) {
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
});

document.getElementById('btnSalidaProd').addEventListener('click',function () {
    if (divInicio.style.display = "block") {
        divInicio.style.display = "none";
        divSalidaProducto.style.display = "block";
        divBtnRegresarMenu.style.display = "block";
    }
       
});

document.getElementById('btnConteoFisico').addEventListener('click',function () {
    if (divInicio.style.display = "block") {
        divInicio.style.display = "none";
        divConteoFisico.style.display = "block";
        divBtnRegresarMenu.style.display = "block";
    }
       
});

document.getElementById('btnCierreInven').addEventListener('click',function () {
    if (divInicio.style.display = "block") {
        divInicio.style.display = "none";
        divStockActual.style.display = "block";
        divTCF.style.display="block";
        divCierreInven.style.display = "block";
        divBtnRegresarMenu.style.display = "block";
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
var tablaDeProductosFisicos = document.getElementById('tbody2');
    
        for (let i = 0; i < productoFisico.length ; i++) {
            // fila = tr
            // columna = td
            var tr = document.createElement('tr');//crea una etiq tr
            var tdCodigo = document.createElement('td');//crea una etiq td
            var tdNombre = document.createElement('td');
            var tdDescripcion = document.createElement('td');
            var tdCantidad = document.createElement('td');
            var tdProveedor = document.createElement('td');
            tdCodigo.appendChild(document.createTextNode(productoFisico[i].codigo));
            tdNombre.appendChild(document.createTextNode(productoFisico[i].nombre));
            tdDescripcion.appendChild(document.createTextNode(productoFisico[i].descripcion));
            tdCantidad.appendChild(document.createTextNode(productoFisico[i].cantidad))
            tdProveedor.appendChild(document.createTextNode(productoFisico[i].proveedor));
            tr.appendChild(tdCodigo);//columna pertencerar a fila
            tr.appendChild(tdNombre);
            tr.appendChild(tdDescripcion);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdProveedor);
            tablaDeProductosFisicos.appendChild(tr);
        }
});

//Funcion para mandar a registrar desde login

document.getElementById('btnCuentaNueva').addEventListener('click', function () {
    if (divInicio.style.display = "block") {
        divRegistro.style.display = "block";
        divBtnRegresarMenu.style.display = "block";
        divInicio.style.display = "none";
        divOlvClave.style.display = "none";
        divStockActual.style.display = "none";
        divListaMasVendida.style.display = "none";
        divIngresoProducto.style.display = "none";
        divSalidaProducto.style.display = "none";
        divConteoFisico.style.display = "none";
        divCierreInven.style.display = "none";
    }
      
});

//Funcion para salir de la sesion

document.getElementById('btnCerrarSesion').addEventListener('click',function () {
    if (divLogin.style.display = "none") {
        divLogin.style.display = "block";
        divInicio.style.display = "none"; 
        divRegistro.style.display = "none";
        divOlvClave.style.display = "none";
        divStockActual.style.display = "none";
        divListaMasVendida.style.display = "none";
        divIngresoProducto.style.display = "none";
        divSalidaProducto.style.display = "none";
        divConteoFisico.style.display = "none";
        divCierreInven.style.display = "none";
        document.getElementById("log_usuario").value="";
        document.getElementById("log_password").value="";
    }
       
});

//funcion para regresar al menu principal o inicio

document.getElementById('btnRegresarMenu').addEventListener('click',function () {
    
    divInicio.style.display = "block";
    divRegistro.style.display = "none";
    divStockActual.style.display = "none";
    divIngresoProducto.style.display = "none";
    divSalidaProducto.style.display = "none";
    divConteoFisico.style.display = "none";
    divCierreInven.style.display = "none";
    divBtnRegresarMenu.style.display = "none";
    divIngreso.style.display = 'none'
    pLogin.style.display = "none";
    pRegistro1.style.display="none";
    divIngreso.style.display="none";
    divTablaConteo.style.display="none";
    divTCF.style.display="none";
    
       
});
document.getElementById("btnAgregar").addEventListener("click",function(){
    divIngreso.style.display="block"
    divIngresoProducto.style.display="none"
    
})
document.getElementById("btnGuardarProd").addEventListener("click",function(){
    var nuevoProducto= new Producto(
        document.getElementById("codigoP").value,
        document.getElementById("nombreP").value,
        document.getElementById("descripcionP").value,
        document.getElementById("cantidadP").value,
        document.getElementById("proveedorP").value,
    )
    listaProductos.push(nuevoProducto);
    divIngreso.style.display="none"
    divIngresoProducto.style.display="block"
})
// conteo fisico de los productos




document.getElementById("btnGuardarProdF").addEventListener("click",function(){
    var nuevoProductoF= new Producto(
        document.getElementById("codigoPF").value,
        document.getElementById("nombrePF").value,
        document.getElementById("descripcionPF").value,
        document.getElementById("cantidadPF").value,
        document.getElementById("proveedorPF").value,
    )
    productoFisico.push(nuevoProductoF);
    document.getElementById("codigoPF").value="";
    document.getElementById("nombrePF").value="";
    document.getElementById("descripcionPF").value="";
    document.getElementById("cantidadPF").value="";
    document.getElementById("proveedorPF").value="";

})
//cierre de inventario

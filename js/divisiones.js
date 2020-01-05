//Definir visibilidad de elementos

var divRegistro = document.getElementById("registro");
var divLogin = document.getElementById("login"); 
var divInicio = document.getElementById("inicio");
var pLogin = document.getElementById('pLogin');
var divStockActual = document.getElementById("stockActual");
var divListaMasVendida = document.getElementById("listaMasVendida");
var divIngresoProducto = document.getElementById("ingresoProducto");
var divSalidaProducto = document.getElementById("salidaProducto");
var divConteoFisico = document.getElementById("conteoFisico");
var divCierreInven = document.getElementById("cierreInven");
var divBtnRegresarMenu = document.getElementById("btnRegresarMenu");
var divIngreso=document.getElementById("tablaIngreso");
var pRegistro1= document.getElementById('pRegistro1');
var divTablaConteo=document.getElementById('conteoFisico');
var divTCF=document.getElementById('conteoF');


//Disivilidad de las etiquetas div
//none = invisible y block se refiere a mostrar

divLogin.style.display = "block";
divInicio.style.display = "none"; 
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

//funcion fecha

var f = new Date();
    document.getElementById("fecha").innerHTML=("Fecha: "+f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

    
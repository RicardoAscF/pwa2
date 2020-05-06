
const cartelera=$('#cartelera');
const perfil=$('#perfil');
const historial=$('#historial');
const carteleraOpc=$('#cartelera-opc');
const perfilOpc=$('#perfil-opc');
const historialOpc=$('#historial-opc');

const cart = $('#cont-sel');
const datos = $('#msjdatosguardados');





$(carteleraOpc).on('click',function carteleraClicked(){
    
    perfil.hide();
    historial.hide();
    cartelera.show();
    cart.show();
    datos.hide();
   
} );

$(perfilOpc).on('click',function perfilClicked(){
    
    
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    
    historial.hide();
    cartelera.hide();
    cart.hide();
    perfil.show();
    datos.hide();
    
    document.getElementById('perfil').style.visibility='visible';
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var correo = document.getElementById('correo-usuario');
    correo.value=vars[1];
   
} );


$(historialOpc).on('click',function historialClicked(){
    
  
    cartelera.hide();
    cart.hide();
    perfil.hide();
    historial.show();
    datos.hide();
    document.getElementById('historial').style.visibility='visible';
    mosper();
} );


  






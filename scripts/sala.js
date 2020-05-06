
//Conexion Firebase
firebase.initializeApp({
        apiKey: 'AIzaSyBkSb_hW_WMUqk_eT3odeNl_to-Y0JOY0Q',
        authDomain: 'pwacines.firebaseapp.com',
        projectId: 'pwacines'
      });
      
        // Variable para acceder a firebase
var db = firebase.firestore();
     

//Poner en Rojo los asientos al avrir la pantalla


   
var query = window.location.search.substring(1);

var vars = query.split("=");
var vars2 = vars[1].split('&');

var id = document.getElementById('idFun');
var v = id.value=vars2[0];

var id2 = document.getElementById('idUsu');
var v2 = id2.value=vars2[1];

function asientoSeleccionado(objeto){
        var divLimiteAsientos = document
                                 .getElementById('msjasientoocupado');
         divLimiteAsientos.style.visibility='hidden';
         let elementStyle = window.getComputedStyle(objeto);
        let elementColor = elementStyle.getPropertyValue('color');
  
       switch( objeto.innerHTML ){
             case "A1":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A1",objeto);
              }
        break;
  
        case "A2":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A2",objeto);
              }
        break;
  
        case "A3":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A3",objeto);
              }
        break;
  
        case "A4":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A4",objeto);
              }
        break;
  
        case "A5":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A5",objeto);
              }
        break;
  
        case "A6":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A6",objeto);
              }
        break;
  
        case "A7":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A7",objeto);
              }
        break;
  
        case "A8":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A8",objeto);
              }
        break;
  
  
        case "B1":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B1",objeto);
              }
        break;
  
        case "B2":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B2",objeto);
              }
        break;
  
        case "B3":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B3",objeto);
              }
        break;
  
        case "B4":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B4",objeto);
              }
        break;
  
        case "B5":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B5",objeto);
              }
        break;
  
        case "B6":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B6",objeto);
              }
        break;
  
        case "B7":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B7",objethiddeno);
              }
        break;
  
        case "B8":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("B8",objeto);
              }
        break;
  
        case "C1":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C1",objeto);
              }
        break;
  
        case "C2":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C2",objeto);
              }
        break;
  
        case "C3":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C3",objeto);
              }
        break;
  
        case "C4":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C4",objeto);
              }
        break;
  
        case "C5":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C5",objeto);
              }
        break;
  
        case "C6":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C6",objeto);
              }
        break;
  
        case "C7":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C7",objeto);
              }
        break;
  
        case "C8":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("C8",objeto);
              }
        break;
  
        case "D1":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D1",objeto);
              }
        break;
  
        case "D2":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D2",objeto);
              }
        break;
  
        case "D3":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D3",objeto);
              }
        break;
  
        case "D4":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D4",objeto);
              }
        break;
  
        case "D5":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D5",objeto);
              }
        break;
  
        case "D6":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D6",objeto);
              }
        break;
  
        case "D7":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D7",objeto);
              }
        break;
  
        case "D8":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("D8",objeto);
              }
        break;
  
        case "E1":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E1",objeto);
              }
        break;
  
        case "E2":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E2",objeto);
              }
        break;
  
        case "E3":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E3",objeto);
              }
        break;
  
        case "AE":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("A4",objeto);
              }
        break;
  
        case "E5":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E5",objeto);
              }
        break;
  
        case "E6":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E6",objeto);
              }
        break;
  
        case "E7":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E7",objeto);
              }
        break;
  
        case "E8":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("E8",objeto);
              }
        break;
  
  
        case "F1":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F1",objeto);
              }
        break;
  
        case "F2":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F2",objeto);
              }
        break;
  
        case "F3":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F3",objeto);
              }
        break;
  
        case "F4":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F4",objeto);
              }
        break;
  
        case "F5":
              //let e = document.getElementById('a');
              
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F5",objeto);
              }
        break;
  
        case "F6":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F6",objeto);
              }
        break;
  
        case "F7":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F7",objeto);
              }
        break;
  
        case "F8":
              //let e = document.getElementById('a');
              elementStyle = window.getComputedStyle(objeto);
              elementColor = elementStyle.getPropertyValue('color');
              if(elementColor=="rgb(255, 0, 0)"){
                asientoOcupado();
              }else{
                agregarAsiento("F8",objeto);
              }
        break;
  
      }
  }


  function asientoOcupado(){
        var divLimiteAsientos = document
                                     .getElementById('msjasientoocupado');
             divLimiteAsientos.style.visibility='visible';
      }
      
      
      function agregarAsiento(asiento, objetoAsiento){
      
           divAsientos = document.getElementById('asientos-escogidos');
      
           if(divAsientos.value.length<15){
             divAsientos.value+=asiento +",";
             objetoAsiento.style.backgroundColor = "red";
             objetoAsiento.style.color = "red";
           }else{
             var divLimiteAsientos = document
                                     .getElementById('msjlimiteasientos');
             divLimiteAsientos.style.visibility='visible';
           }
      
           
         } //agregar asieto

         function comprarBoletos(){
            var asientosE = document.getElementById('asientos-escogidos').value;
            var idHidden = document.getElementById('idFun').value;
            
          
            //comprarB(arrayAsientos);
         
            
            //ejemplo(idHidden+a);
       
       
            //Obtener datos de la funcion
            db
                 .collection("funcion")
                 .where("id", "==", idHidden)
                 
                 .onSnapshot((querySnapshot) => 
                 { //Se llaman los datos
                     querySnapshot.forEach((doc) => {
                       var a = doc.data().nombre_pelicula;
                       var b = doc.data().fecha;
                      
                       var c = doc.data().nombre_cine;
                       var d = doc.data().nombre_sala;
                       var e = asientosE;
                      
                   
                      //Empiezoo
                      var idHiddenU = document.getElementById('idUsu').value; 
                      var docData = {
                        usuario: idHiddenU,
                        nombre_pelicula: a,
                        fecha: b,
                        nombre_cine: c,
                        nombre_sala: d,
                        asientos: e,
                        
                    };
                    db.collection("usuarios-boletos").doc().set(docData).then(function() {
                      regAsiento(idHidden,e);
                    });

       
                      //Fin
       
                     });
                 });
             
                
                 
         }// Fin Buscar
       
      function regAsiento(idHidden,a){
        db
        .collection("funcion")
        .where("id", "==", idHidden)
        
        .onSnapshot((querySnapshot) => 
        { //Se llaman los datos
            querySnapshot.forEach((doc) => {
              var asi = doc.data().asientos;
              var fech = doc.data().fecha;
              var h1 = doc.data().hi;
              var id = doc.data().id;
              var cin = doc.data().nombre_cine;
              var ciu = doc.data().nombre_ciudad;
              var imagen = doc.data().nombre_imagen;
              var pel = doc.data().nombre_pelicula
              var sal = doc.data().nombre_sala;
              
              
             //Empiezoo
            var regasiento = asi+a;
            
            
             var docData = {
              asientos:regasiento,
              fecha: fech,
              hi: h1,
              id:id,
              nombre_cine: cin,
              nombre_ciudad: ciu,
              nombre_imagen: imagen,
              nombre_pelicula: pel,
              nombre_sala: sal,
              
              
          };
          db.collection("funcion").doc(idHidden).set(docData).then(function() {
            var idHiddenU = document.getElementById('idUsu').value; 
            window.location.replace('inicio.html?email='+idHiddenU);
          });




             //Fin

            });
        });
    
      
      }


         var asientos;
         db
         .collection("funcion")
         .where("id", "==", v)
         .onSnapshot((querySnapshot) => { //Se llaman los datos
             querySnapshot.forEach((doc) => {
                
            
                 asientos = doc.data().asientos;
                 var a = asientos.split(",");
                 var i = 0;
                 for(i; i<a.length;  i++){
                     switch(a[i].trim()){
                         case "A1":
                            
                             a1 = document.getElementById("A1");
                             a1.style.color = "red";
                             a1.style.background = "red";
                             
                             
                 
                         break;
     
           case "A2":
                 
               
             a1 = document.getElementById("A2");
             a1.style.color = "red";
             a1.style.background = "red";
               
                   
               
                 
           break;
     
           case "A3":
                 
             a1 = document.getElementById("A2");
             a1.style.color = "red";
             a1.style.background = "red";
                 
               
                   
               
                 
                 
           break;
     
           case "A4":
                 
                 
             a1 = document.getElementById("A4");
             a1.style.color = "red";
             a1.style.background = "red";
               
                   
               
                   
                 
           break;
     
           case "A5":
                 
                 
             a1 = document.getElementById("A5");
             a1.style.color = "red";
             a1.style.background = "red";
                   
               
                   
                 
           break;
     
           case "A6":
                 
                 
                 
             a1 = document.getElementById("A6");
             a1.style.color = "red";
             a1.style.background = "red";
                 
           break;
     
           case "A7":
                 
                 
             a1 = document.getElementById("A7");
                             a1.style.color = "red";
                             a1.style.background = "red";
                 
           break;
     
           case "A8":
                 
                 
             a1 = document.getElementById("A8");
             a1.style.color = "red";
             a1.style.background = "red";
                 
           break;
     
     
           case "B1":
                 
            b1 = document.getElementById("B1");
            b1.style.color = "red";
            b1.style.background = "red";
               
                   
               
             
                 
           break;
     
           case "B2":
            b1 = document.getElementById("B2");
            b1.style.color = "red";
            b1.style.background = "red";
           break;
     
           case "B3":
                 
            b1 = document.getElementById("B3");
            b1.style.color = "red";
            b1.style.background = "red";
                 
               
                   
               
                   
                 
           break;
     
           case "B4":
            b1 = document.getElementById("B4");
            b1.style.color = "red";
            b1.style.background = "red";
                 
                 
               
                   
               
                  
                 
           break;
     
           case "B5":
                 
            b1 = document.getElementById("B5");
            b1.style.color = "red";
            b1.style.background = "red";
               
                   
              
                 
           break;
     
           case "B6":
                 
                 
                 
               
            b1 = document.getElementById("B6");
            b1.style.color = "red";
            b1.style.background = "red";
               
                 
                 
           break;
     
           case "B7":
                 
                 
                 
            b1 = document.getElementById("B7");
            b1.style.color = "red";
            b1.style.background = "red";
                   
               
                  
                 
           break;
     
           case "B8":
                 
                 
            b1 = document.getElementById("B8");
            b1.style.color = "red";
            b1.style.background = "red";
               
                   
               
                  
                 
           break;
     
           case "C1":
                 
                 
               
                   
                
           break;
     
           case "C2":
                 
                 
                 
               
                   
               
                  
           break;
     
           case "C3":
                 
                 
                 
               
                   
               
                 
           break;
     
           case "C4":
                 
                 
                 
               
                   
               
                  
                 
           break;
     
           case "C5":
                 
                 
               
                   
               
                   
                 
           break;
     
           case "C6":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "C7":
                 
                 
                 
               
                   
               
                  
                 
           break;
     
           case "C8":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "D1":
                 
                 
               
                   
               
                  
                 
           break;
     
           case "D2":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "D3":
                 
                 
                 
               
                   
               
                  
                 
           break;
     
           case "D4":
                 
                 
                 
               
                   
               
                 
                 
           break;
     
           case "D5":
                 
                 
               
                   
               
                  
           break;
     
           case "D6":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "D7":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "D8":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "E1":
                 
                 
               
                   
               
                   
                 
           break;
     
           case "E2":
                 
                 
                 
               
                   
               
                 
           break;
     
           case "E3":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "AE":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "E5":
                 
                 
               
                   
               
                  
                 
           break;
     
           case "E6":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "E7":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "E8":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
     
           case "F1":
                 
                 
               
                   
               
                   
                 
           break;
     
           case "F2":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "F3":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "F4":
                 
                 
                 
               
                    
                 
           break;
     
           case "F5":
                 
                 
               
                   
               
                   
                 
           break;
     
           case "F6":
                 
                 
                 
               
                   
               
                   
                 
           break;
     
           case "F7":
                 
                 
                 
               
                   
               
                  
                 
           break;
     
           case "F8":
                 
                
                 
               
                   
               
                   
                 
           break;
                     }
                 }
             
                     
         });
     });
           
     
     
       
        





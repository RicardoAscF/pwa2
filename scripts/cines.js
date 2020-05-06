




//Conexion Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBkSb_hW_WMUqk_eT3odeNl_to-Y0JOY0Q',
    authDomain: 'pwacines.firebaseapp.com',
    projectId: 'pwacines'
  });
  
    // Variable para acceder a firebase
    var db = firebase.firestore();
 
    alert('app abierta');
    var query = window.location.search.substring(1);
    var vars = query.split("=");
  
    document.getElementById('correodelusuario').value=vars[1];

    function enviarPerfil(correo,nombre,ap,am){
        alert('enviarperfil3' +correo+nombre+ap+am);
        db.collection("usuario")
        .doc(correo)
        .set({
            correo: correo,
            nombre: nombre,
            ap: ap,
            am: am
            
        })
        .then(function(docRef) {
            divDatosVacios = document
                            .getElementById('msjdatosguardados')
                            .style.visibility="visible";
    
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
      
      
      
      
      
          //Llenar Select Ciudades al cargar la pagina
          var selectCiudad = document.getElementById('lista-ciudad');//Se llama el selected
          selectCiudad.innerHTML = '';
          selectCiudad.innerHTML += `
              <option selected="true" disabled="disabled" value="">Selecione Su Ciudad</option> . 
                  ` //Agrego un option por default
      
          db
          .collection("ciudad")
      
          .onSnapshot((querySnapshot) => { //Se llaman los datos
                  querySnapshot.forEach((doc) => {
                  console.log(`${doc.id} => ${doc.data().nombre_ciudad}`);
                  selectCiudad.innerHTML += `
                  <option value="${doc.id}">${doc.data().nombre_ciudad}</option> . 
                  ` //Aquí agrego los options de acuerdo a la base de datos.
              });
          });
          
          //Fin
      
          
          //Se llama al dar click en select ciudades
          function ciudad(){
               
          var selectCiudad = document.getElementById('lista-ciudad');
          var ciudad = selectCiudad.options[selectCiudad.selectedIndex].innerText; //El texto de la opción seleccionada
        
          var selectCine = document.getElementById('lista-cine');//Se llama el selected
          selectCine.innerHTML = '';
              selectCine.innerHTML += `
                  <option selected="true" disabled="disabled" value="">Selecione Un Cine</option> . 
                      ` //Agrego un option por default
      
          db
          .collection("cine")
          .where("ciudad", "==", ciudad)
          .onSnapshot((querySnapshot) => 
          { //Se llaman los datos
              querySnapshot.forEach((doc) => {
              
              selectCine.innerHTML += `
              <option value="${doc.id}">
                  ${doc.data().nombre_cine}
              </option> . 
              ` //Aquí agrego los options de acuerdo a la base de datos.
              });
          });
      
      
      
          }//FIn Ciudad
      
      
         
          function buscar(){
          
            var carteleraInicio = document.getElementById('cartelera');
            carteleraInicio.innerHTML = ``;
        
            var selectCine = document.getElementById('lista-cine');
            var cine = selectCine.options[selectCine.selectedIndex].innerText; 
            
                
            var selectCiudad = document.getElementById('lista-ciudad');
            var ciudad = selectCiudad.options[selectCiudad.selectedIndex].innerText; 
           
        
            db
            .collection("funcion")
            .where("nombre_ciudad", "==", ciudad)
            .where("nombre_cine", "==", cine.trim())
            .onSnapshot((querySnapshot) => 
            { //Se llaman los datos
                querySnapshot.forEach((doc) => {
                
                carteleraInicio.innerHTML += `
                    
            <div class="contenedor-pelicula">
            <div class="img-pelicula">
                <img src="${doc.data().nombre_imagen}" alt="">   
            </div>
            <div class="titulo-pelicula quicksand">
                    ${doc.data().nombre_pelicula}
            </div>
            <div class="nombre-cine .quicksand">
                    ${doc.data().nombre_cine}
            </div>
            <div class="informacion-pelicula">
                <div class="sala">${doc.data().nombre_sala}</div>
                <div class="hora-inicio">${doc.data().hi}</div>
            </div>
            <input id="idFuncion"  class="btn-comprar parisiene" value="${doc.data().id}">
            
          
            <div class="btn-comprar parisiene" onclick="comprar()">
                Comprar Boleto
            </div>
        
        </div>
        
                ` //Aquí agrego los options de acuerdo a la base de datos.
                });
            });
        
           
           
          
          }// Fin Buscar

    function mosper(){
        alert('mosper');
        var carteleraInicio = document.getElementById('titulo-historial');
        carteleraInicio.innerHTML = ``;
    
        var correo = document.getElementById('correodelusuario').value;
        alert(correo); 
        
        
    
        db
        .collection("usuarios-boletos")
        .where("usuario","==",correo)
        .onSnapshot((querySnapshot) => 
        { //Se llaman los datos
            querySnapshot.forEach((doc) => {
            
            carteleraInicio.innerHTML += `
            <div class="hist">
            <div class="historial-titulo quicksand">${doc.data().nombre_pelicula}</div>
            <div class="historial-fecha">${doc.data().fecha}</div>
            <div class="historial-titulo quicksand">${doc.data().nombre_cine}</div>
            <div class="historial-fecha">${doc.data().nombre_sala}</div>
            <div class="historial-fecha">Asientos ${doc.data().asientos}</div>
            </div>

            ` //Aquí agrego los options de acuerdo a la base de datos.
            });
        });
    
       
       
    }      


    function ejemplo(idFun,asientos){
       alert("bien" +idFun +" " +asientos);
       //var asientosArray = asientos.split(',');
       var asientosString = "";
       for(i=0; i<50; i++){
           asientosString+=asientos[i]+",";
       }
       alert(asientosString);

    }
      
 
  
    
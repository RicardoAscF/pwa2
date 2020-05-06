
  var emailGlobal;
  //var entrada = false;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkSb_hW_WMUqk_eT3odeNl_to-Y0JOY0Q",
    authDomain: "pwacines.firebaseapp.com",
    databaseURL: "https://pwacines.firebaseio.com",
    projectId: "pwacines",
    storageBucket: "pwacines.appspot.com",
    messagingSenderId: "2523344487",
    appId: "1:2523344487:web:82fb8f53e946f13ace6ec2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth  = firebase.auth;
 

  //Para registrarse si ambas contraseñas son correctas
  //inoca a esta función
function registrarUsuario(email,password){
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      if(errorCode=='auth/invalid-email'){
        divFormato = document
                    .getElementById('msjformatocorreo')
                    .style.visibility="visible";
      }else if(errorCode="auth/email-already-in-use"){
        divFormato = document
                    .getElementById('msjcorreoexiste')
                    .style.visibility="visible";
      }
    



    });
    alert('Usuario Agregado');
    window.location.replace('index.html');
}//Fin Registrar


function ingresar(email,pass){
  firebase
  .auth()
  .signInWithEmailAndPassword(email, pass)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    divDatosVacios = document.getElementById('msjdatosincorrectos').style.visibility="visible";
    
  });
  verificar();
}

function verificar(){
  //if(!entrada){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         
        var displayName = user.displayName;
        const email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(displayName);
        console.log(email);
        console.log(emailVerified);
        console.log(photoURL);
        console.log(isAnonymous);
        console.log(uid);
        console.log(providerData);
        emailGlobal = email;
       
      
        window.location.replace('inicio.html?email='+email);
     
        const divCorreo = document.getElementById('perfil');
        divCorreo.innerHTML="h";
       

      
       
        // ...
      } else {
         
      }

    });
  //}
  
} //Fin Verificar


function validateForm(evt){
	/* Escribe tú código aquí */
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var lista= document.getElementsByClassName("form-control")[4].value;
    var correo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    
    
    if (name!=""||lastName!=""||inputEmail!=""||inputPassword!=""){
        
        if((/[0-9]/g).test(name)||(/[0-9]/g).test(lastName)){
            alert("Ingrese un Nombre Valido");
            evt.preventDefault();
        }
        
    if(!correo.test(inputEmail)){
            alert("Ingrese un correo Valido");
            evt.preventDefault();
        
        }
        
    if (inputPassword.length<6){
            alert("Ingrese una contrasena de 6 Digitos");
        }
    if (inputPassword=="123456"||inputPassword=="098754"||inputPassword=="password"){
            alert("Ingrese un Password Correcto");}
     if (lista == 0){
            alert("Selecciona un tipo de bicicleta");
                 }
    if (name.toLowerCase()){
        document.getElementById("name").value= name.charAt(0).toUpperCase() + name.slice(1);
    }
        
        if (lastName.toLowerCase()){
        document.getElementById("lastname").value= lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }   
    }
}
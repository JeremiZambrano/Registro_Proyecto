
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var tipoUsuario = document.getElementById("tipoUsuario").value;

   
    var nuevoUsuario = {
        username: username,
        email: email,
        password: password,
        tipoUsuario: tipoUsuario
    };
    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

   
    usuariosRegistrados();
});




document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

   
    var usuarioEncontrado = usuariosRegistrados.find(function(usuario){
        return usuario.username === loginUsername && usuario.password === loginPassword;
    });

    if(usuarioEncontrado){
       
        if(usuarioEncontrado.tipoUsuario === "estudiante") {
            document.getElementById("mensaje").innerHTML = "BIENVENIDO ESTUDIANTE.";
        } else if(usuarioEncontrado.tipoUsuario === "profesor") {
            document.getElementById("mensaje").innerHTML = "BIENVENIDO PROFESOR.";
        }
    } else {
   
        document.getElementById("mensaje").innerHTML = "Nombre de usuario o contraseña incorrectos.";
    }
});


document.getElementById("mostrarRegistro").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("registroForm").style.display = "block";
});

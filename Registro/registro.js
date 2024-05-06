// Cargar usuarios registrados desde el almacenamiento local al iniciar la aplicación
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores del formulario de registro
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var tipoUsuario = document.getElementById("tipoUsuario").value;

    // Guarda los datos del nuevo usuario en el almacenamiento local
    var nuevoUsuario = {
        username: username,
        email: email,
        password: password,
        tipoUsuario: tipoUsuario
    };
    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

    // Muestra todos los usuarios registrados
    usuariosRegistrados();
});

// Resto del código...


document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores del formulario de inicio de sesión
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Busca el usuario en la lista de usuarios registrados
    var usuarioEncontrado = usuariosRegistrados.find(function(usuario){
        return usuario.username === loginUsername && usuario.password === loginPassword;
    });

    if(usuarioEncontrado){
        // Usuario encontrado, redirige según el tipo de usuario
        if(usuarioEncontrado.tipoUsuario === "estudiante") {
            document.getElementById("mensaje").innerHTML = "BIENVENIDO ESTUDIANTE.";
        } else if(usuarioEncontrado.tipoUsuario === "profesor") {
            document.getElementById("mensaje").innerHTML = "BIENVENIDO PROFESOR.";
        }
    } else {
        // Usuario no encontrado, muestra un mensaje de error
        document.getElementById("mensaje").innerHTML = "Nombre de usuario o contraseña incorrectos.";
    }
});

// Mostrar el formulario de registro cuando se haga clic en el enlace
document.getElementById("mostrarRegistro").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("registroForm").style.display = "block";
});
document
  .getElementById("registro-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var artista = document.getElementById("artista").value;

    // Muestra los valores capturados (puedes hacer lo que quieras con esta información)
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Teléfono: " + telefono);
    console.log("Artista Preferido: " + artista);

    // Aquí podrías enviar los datos a un servidor, almacenarlos en una base de datos, etc.
    // Por ahora, simplemente los mostramos en la consola.
  });

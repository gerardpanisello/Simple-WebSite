function validarFormulario() {
  var formulario = document.getElementById("contact-form");

  if (formulario.checkValidity() === false) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  var telefono = formulario.telefono.value;
  var telefonoRegex = /^[0-9]+$/;
  if (!telefono.match(telefonoRegex)) {
    alert("Por favor, ingresa solo números en el campo de teléfono.");
    return false;
  }

  var nombre = formulario.nombre.value;
  var apellidos = formulario.apellidos.value;
  var mensaje = formulario.mensaje.value;

  alert("Nombre: " + nombre + "\nApellidos: " + apellidos + "\nTeléfono: " + telefono + "\nMensaje: " + mensaje);
}
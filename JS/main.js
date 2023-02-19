while (true) {
  // Paso 1: solicitar al usuario que ingrese un color
  let color = prompt("Ingresa un color (o escribe 'salir' para salir):");

  // Paso 2: convertir el color ingresado en minúsculas
  color = color.toLowerCase();

  // Paso 3: inicializar una variable "codigo_color" en null
  let codigo_color = null;

  // Paso 4: iniciar un ciclo while que se repetirá hasta que se ingrese un color válido o el usuario decida salir
  if (color === "salir") {
    break;
  } else {
    // Paso 5: utilizar una serie de declaraciones if/else if para comparar el color ingresado con los nombres de colores estándar y asignar el código de color correspondiente a la variable "codigo_color"
    if (color === "rojo") {
      codigo_color = "#FF0000";
    } else if (color === "verde") {
      codigo_color = "#00FF00";
    } else if (color === "azul") {
      codigo_color = "#0000FF";
    } else if (color === "amarillo") {
      codigo_color = "#FFFF00";
    } else if (color === "naranja") {
      codigo_color = "#FFA500";
    } else if (color === "violeta") {
      codigo_color = "#EE82EE";
    } else {
      alert("El color ingresado no es válido. Inténtalo de nuevo.");
    }
  }
  // Paso 6: si se encuentra un color válido, imprimir el código de color correspondiente y salir del ciclo
  if (codigo_color) {
    alert(`El código de color para ${color} es ${codigo_color}.`);
    break;
  }
}


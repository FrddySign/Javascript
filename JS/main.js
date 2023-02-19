while (true) {

  let color = prompt("Ingresa un color (o escribe 'salir' para salir):");


  color = color.toLowerCase();

 
  let codigo_color = null;

  if (color === "salir") {
    break;
  } else {
  
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
  
  if (codigo_color) {
    alert(`El código de color para ${color} es ${codigo_color}.`);
    break;
  }
}


var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
const URL = window.location.href;

async function init() {
  await getUser();
  setTimeout(() => {
    content2.style.display = "block";
  }, 7500);
}

init();
async function getUser() {

  // Definir la fecha objetivo (en el formato "YYYY-MM-DDTHH:MM:SS")
  const fechaObjetivo = new Date('December 17, 2023 16:30:00').getTime();

  // Actualizar la cuenta regresiva cada segundo
  var x = setInterval(function() {

    const fechaActual = new Date().getTime();
  
    // Calcular la diferencia entre la fecha objetivo y la fecha actual
    let diferencia = fechaObjetivo - fechaActual;
    
    // Si quedan más de 24 horas, mostrar solo los días restantes
    if (diferencia > 86400000) { // 24 horas en milisegundos
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var cuentaRegresivaFormateada = `${dias} días`
    } else {
      // Convertir el tiempo restante a horas, minutos y segundos
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
      
      var cuentaRegresivaFormateada = ('0' + horas).slice(-2) + ':' + ('0' + minutos).slice(-2) + ':' + ('0' + segundos).slice(-2);
    }

      // Formatear la cuenta regresiva en el formato hh:mm:ss
     

      // Mostrar la cuenta regresiva en el elemento con el ID "cuentaRegresiva"
      document.getElementById("cuentaRegresiva").innerHTML = cuentaRegresivaFormateada;

      // Si la cuenta regresiva llega a cero, detenerla
      if (diferencia < 0) {
          clearInterval(x);
          document.getElementById("cuentaRegresiva").innerHTML = "¡Tiempo Expirado!";
      }
  }, 1000);
}
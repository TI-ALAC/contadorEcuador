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
  var fechaObjetivo = new Date("2023-10-28T15:00:00").getTime();

  // Actualizar la cuenta regresiva cada segundo
  var x = setInterval(function() {

      // Obtener la fecha y hora actual
      var ahora = new Date().getTime();

      // Calcular la diferencia en milisegundos entre la fecha objetivo y la fecha actual
      var diferencia = fechaObjetivo - ahora;

      // Convertir los días restantes en horas
      var horas = Math.floor(diferencia / (1000 * 60 * 60));

      // Calcular minutos y segundos
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      // Formatear la cuenta regresiva en el formato hh:mm:ss
      var cuentaRegresivaFormateada = ('0' + horas).slice(-2) + ':' + ('0' + minutos).slice(-2) + ':' + ('0' + segundos).slice(-2);

      // Mostrar la cuenta regresiva en el elemento con el ID "cuentaRegresiva"
      document.getElementById("cuentaRegresiva").innerHTML = cuentaRegresivaFormateada;

      // Si la cuenta regresiva llega a cero, detenerla
      if (diferencia < 0) {
          clearInterval(x);
          document.getElementById("cuentaRegresiva").innerHTML = "¡Tiempo Expirado!";
      }
  }, 1000);
}
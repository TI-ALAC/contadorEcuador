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

  document.addEventListener('DOMContentLoaded', () => {

    //===
    // VARIABLES
    //===
    const DATE_TARGET = new Date('09/27/2023 5:00 PM');
    // DOM for render
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    //===
    // FUNCTIONS
    //===

    /**
    * Method that updates the countdown and the sample
    */
    function updateCountdown() {
      // Calcs
      const NOW = new Date()
      const DURATION = DATE_TARGET - NOW;
      const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
      const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
      const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
      // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

      // Render
      if (REMAINING_HOURS < 10) {
        SPAN_HOURS.textContent = "0" + REMAINING_HOURS;
      } else {
        SPAN_HOURS.textContent = REMAINING_HOURS;
      }
      if (REMAINING_MINUTES < 10) {
        SPAN_MINUTES.textContent = "0" + REMAINING_MINUTES;
      } else {
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
      }
      if (REMAINING_SECONDS < 10) {
        SPAN_SECONDS.textContent = "0" + REMAINING_SECONDS;
      } else {
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
      }
    }

    //===
    // INIT
    //===
    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
  });
}
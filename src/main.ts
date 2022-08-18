import "./styles.css";
export { };

const app = document.getElementById("app")!;

const updateClock = () => {
  //gets current time
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const sec = date.getSeconds();
  const mil = date.getMilliseconds();

  //Formating strings to avoid content shift when drawn on screen
  const hourFormated = hours >= 10 ? `${hours}` : `0${hours}`;
  const minsFormated = mins >= 10 ? `${mins}` : `0${mins}`;
  const secFormated = sec >= 10 ? `${sec}` : `0${sec}`;
  const milFormated =
    mil >= 100 ? `${mil}` : mil >= 10 ? `0${mil}` : `00${mil}`;

  //string is HTML safe hence using innerHTML to save textContent overhead
  app.innerHTML = `${hourFormated}:${minsFormated}:${secFormated}.${milFormated}`;
};

// loops update for each animation frame
const animateClock = () => {
  updateClock();
  requestAnimationFrame(animateClock);
};

animateClock();

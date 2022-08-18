import "./styles.css";
export {};

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

  const stylizedClock: string = [
    ...`${hourFormated}:${minsFormated}:${secFormated}.${milFormated}`,
  ]
    .map((el) => {
      if (el === ":" || el === ".") return `<div class="seperator">${el}</div>`;
      return `<div>${el}</div>`;
    })
    .join("");

  app.innerHTML = stylizedClock;
};

// loops update for each animation frame
const animateClock = () => {
  updateClock();
  requestAnimationFrame(animateClock);
};

animateClock();

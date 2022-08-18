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
  //formats to 10^(-2) s precision
  const centiFormated =
    mil < 100 ? `0${Math.floor(mil / 10)}` : `${Math.floor(mil / 10)}`;

  const stylizedClock: string = `<div>${hourFormated}</div>\
  <div class="seperator">:</div>\
  <div>${minsFormated}</div>\
  <div class="seperator">:</div>\
  <div>${secFormated}</div>\
  <div class="seperator">.</div>\
  <div class="milisec" data-mili="${milFormated}" data-centi="${centiFormated}"></div>`;

  app.innerHTML = stylizedClock;
};

// loops update for each animation frame
const animateClock = () => {
  updateClock();
  requestAnimationFrame(animateClock);
};

animateClock();

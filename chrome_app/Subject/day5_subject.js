import "./styles.css";
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("span");
const SEC_VALUE = 1000,
  MIN_VALUE = SEC_VALUE * 60,
  HOUR_VALUE = MIN_VALUE * 60,
  DATE_VALUE = HOUR_VALUE * 24;
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();

  let timeDiff = xmasDay - date;

  const dateDiff = Math.trunc(timeDiff / DATE_VALUE);
  timeDiff %= DATE_VALUE;
  const hourDiff = Math.trunc(timeDiff / HOUR_VALUE);
  timeDiff %= HOUR_VALUE;
  const minDiff = Math.trunc(timeDiff / MIN_VALUE);
  timeDiff %= MIN_VALUE;
  const secDiff = Math.trunc(timeDiff / SEC_VALUE);
  timeDiff %= SEC_VALUE;

  clockTitle.innerText = `
  ${dateDiff < 10 ? `0${dateDiff}` : dateDiff}d ${
    hourDiff < 10 ? `0${hourDiff}` : hourDiff
  }h ${minDiff < 10 ? `0${minDiff}` : minDiff}m ${
    secDiff < 10 ? `0${secDiff}` : secDiff
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

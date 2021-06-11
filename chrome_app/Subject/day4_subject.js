// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const OVER_700_CLASS = "sizeOver700";
const OVER_500_CLASS = "sizeOver500";
const title = document.querySelector("#title");

function responseWindowSize(event) {
  const widthSize = window.innerWidth;
  const currClassName = title.className;
  if (widthSize > 700 && currClassName !== OVER_700_CLASS) {
    title.className = OVER_700_CLASS;
  } else if (
    widthSize > 500 &&
    widthSize <= 700 &&
    currClassName !== OVER_500_CLASS
  ) {
    title.className = OVER_500_CLASS;
  } else if (widthSize <= 500 && currClassName !== "") {
    title.className = "";
  }
}

window.addEventListener("resize", responseWindowSize);

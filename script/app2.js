const span = document.querySelector("span");

let blink_speed = 500; // every 1000 == 1 second, adjust to suit
let t = setInterval(function () {
  span.style.visibility = span.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);

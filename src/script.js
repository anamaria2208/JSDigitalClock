import { format } from "date-fns";

const clock = document.querySelector(".clock");
setInterval(() => {
  const date = new Date();
  clock.innerHTML = `${format(date, "HH : mm : ss")}`;
}, 1000);

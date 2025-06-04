const time = document.querySelector(".time");
const date = document.querySelector(".date");

setInterval(function () {
  const TimeDate = new Date();
  time.innerText = TimeDate.toLocaleTimeString("en-GB", { hour12: true });
  date.innerText = TimeDate.toLocaleString("en-GB", {
    hour12: true,
    dateStyle: "full",
  });
}, 100);

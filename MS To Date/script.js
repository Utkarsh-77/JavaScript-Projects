const form = document.querySelector("form");
const input = document.querySelector("input");
const local = document.querySelector(".local span");
const utc = document.querySelector(".utc span");
const iso = document.querySelector(".iso span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const timestamp = Number(input.value);
  const myDate = new Date(timestamp);

  local.innerText = myDate.toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "full",
  });

  utc.innerText = myDate.toUTCString();
  iso.innerText = myDate.toISOString();
});

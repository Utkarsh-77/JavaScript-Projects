const resume = document.querySelector(".resume");
let score = JSON.parse(localStorage.getItem("Correct")) || 0;
resume.innerText = `${score}/25`;

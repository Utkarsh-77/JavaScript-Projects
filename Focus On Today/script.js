const checkboxes = document.querySelectorAll(".circle-div");
const inputBox = document.querySelectorAll(".input-task");
const errorTag = document.querySelector(".red-para-div");
const progressval = document.querySelector(".green-div");
const progressPara = document.querySelector(".progress-para");
const queotsPara = document.querySelector(".queots");
const lastStep = document.querySelector(".last-Step");

const goalsquate = [
  "Raise the bar by completing your goals!",
  "well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for chill :)",
];

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: {
    name: "",
    completed: false,
  },
  second: {
    name: "",
    completed: false,
  },
  third: {
    name: "",
    completed: false,
  },
};
let completeCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progressval.style.width = `${(completeCount / 3) * 100}%`;
progressPara.innerText = completeCount;
queotsPara.innerText = goalsquate[completeCount];
if (completeCount === 3) {
  lastStep.innerText = "Keep Going, You’re making great progress!";
}

inputBox.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name || "";

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }

  input.addEventListener("input", () => {
    input.addEventListener("focus", errorTag.classList.remove("error"));

    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }

    allGoals[input.id] = {
      name: input.value,
      completed: allGoals[input.id]?.completed || false,
    };
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});

checkboxes.forEach((element) => {
  element.addEventListener("click", (e) => {
    let inputFieldFilled = [...inputBox].every(
      (input) => input.value.trim() !== ""
    );

    if (inputFieldFilled) {
      element.parentElement.classList.toggle("completed");

      const inputField = element.nextElementSibling;
      if (inputField) {
        const inputId = inputField.id;

        allGoals[inputId].completed =
          element.parentElement.classList.contains("completed");
        completeCount = Object.values(allGoals).filter(
          (goal) => goal.completed
        ).length;

        progressval.style.width = `${(completeCount / 3) * 100}%`;
        progressPara.innerText = completeCount;
        queotsPara.innerText = goalsquate[completeCount];
        if (completeCount === 3) {
          lastStep.innerText = "Keep Going, You’re making great progress!";
        }
        localStorage.setItem("allGoals", JSON.stringify(allGoals));
      }
    } else {
      errorTag.classList.add("error");
    }
  });
});

const Allquestion = [
  {
    num: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Level",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    num: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<style>", "<link>"],
    answer: "<style>",
  },
  {
    num: 3,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    answer: "<br>",
  },
  {
    num: 4,
    question:
      "Which attribute is used to provide an image for display in the browser?",
    options: ["src", "alt", "href", "link"],
    answer: "src",
  },
  {
    num: 5,
    question: " Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: "<a>",
  },
  {
    num: 6,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    num: 7,
    question:
      "Which of the following is the correct syntax to change the background color in CSS?",
    options: [
      "background-color: red;",
      "color-background: red;",
      "bg-color = red;",
      "background = red;",
    ],
    answer: "background-color: red;",
  },
  {
    num: 8,
    question: "How do you select an element with id “demo” in CSS?",
    options: ["#demo", ".demo", "demo", "*demo"],
    answer: "#demo",
  },
  {
    num: 9,
    question:
      "How can you make a list appear horizontally instead of vertically in CSS?",
    options: [
      "list-type: horizontal;",
      "display: inline;",
      "list-style: none;",
      "float: left;",
    ],
    answer: "display: inline;",
  },
  {
    num: 10,
    question: "What is the default position of an HTML element in CSS?",
    options: ["relative", "absolute", "static", "fixed"],
    answer: "static",
  },
  {
    num: 11,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },
  {
    num: 12,
    question: "How do you apply a class to an element in HTML?",
    options: [
      "class='className'",
      "className='name'",
      "cls='className'",
      "id='className'",
    ],
    answer: "class='className'",
  },
  {
    num: 13,
    question: "What does the z-index property in CSS control?",
    options: [
      "The zoom level",
      "The visibility",
      "The stacking order",
      "The size of the element",
    ],
    answer: "The stacking order",
  },
  {
    num: 14,
    question: "Which CSS property makes text bold?",
    options: [
      "text-style: bold;",
      "font-weight: bold;",
      "font-style: bold;",
      "text-weight: bold;",
    ],
    answer: "font-weight: bold;",
  },
  {
    num: 15,
    question: "Which is used to include an external CSS file?",
    options: [
      "<css src='style.css'>",
      "<style src='style.css'>",
      "<link rel='stylesheet' href='style.css'>",
      "<style href='style.css'>",
    ],
    answer: "<link rel='stylesheet' href='style.css'>",
  },
  {
    num: 16,
    question: "What does JavaScript primarily run on?",
    options: ["Server", "Browser", "Compiler", "Terminal"],
    answer: "Browser",
  },
  {
    num: 17,
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunc() {}",
      "def myFunc() {}",
      "function myFunc() {}",
      "create function myFunc() {}",
    ],
    answer: "function myFunc() {}",
  },
  {
    num: 18,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "const", "let", " All of the above"],
    answer: " All of the above",
  },
  {
    num: 19,
    question: "What will typeof NaN return?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
  },
  {
    num: 20,
    question: "What does === mean in JavaScript?",
    options: [
      "Equal in value only",
      "Equal in value and type",
      "Assignment",
      "None of the above",
    ],
    answer: "Equal in value and type",
  },
  {
    num: 21,
    question:
      "Which method is used to convert JSON text to a JavaScript object?",
    options: [
      "JSON.toObject()",
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
    ],
    answer: "JSON.parse()",
  },
  {
    num: 22,
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Boolean", "Float", "String", "Undefined"],
    answer: "Float",
  },
  {
    num: 23,
    question:
      "Which event is used to detect when the user clicks on an HTML element?",
    options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
    answer: "onclick",
  },
  {
    num: 24,
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22",
  },
  {
    num: 25,
    question: "How do you write a comment in JavaScript?",
    options: [
      "<!-- This is a comment -->",
      "** This is a comment **",
      "// This is a comment",
      "## This is a comment",
    ],
    answer: "// This is a comment",
  },
];

const optionsContainer = document.querySelectorAll(".Option-btn");
const btnColor = document.querySelectorAll(".btn");
const Pquestion = document.querySelector(".question-p");
const questionNumber = document.querySelector(".question-number");
const nextQuestion = document.querySelector(".next-question");
const end = document.querySelector(".end-anchor");
const timerBox = document.querySelector(".timer-box p");
const iconRight = document.querySelectorAll(".img-icon");
const main = document.querySelector("main");
const colorTimer = document.querySelector(".timer-b");
const Choos = document.querySelectorAll(".choos");
const audio = document.querySelector("#bg-audio");
const SpeakerImage = document.querySelector(".speaker-img");

let QuestionPosition = JSON.parse(localStorage.getItem("QuestionNo")) || 0;
let currentQuestion = QuestionPosition;

let score = JSON.parse(localStorage.getItem("Correct")) || 0;
let storeAnswer = score;

let timeId;
let timer = 31;
let AudioTrue = 1; // 1 = On, 0 = Muted

SpeakerImage.addEventListener("click", () => {
  if (AudioTrue === 1) {
    AudioTrue = 0;
    SpeakerImage.src = "/Images/Volume Mute.svg";
    audio.pause();
  } else {
    AudioTrue = 1;
    SpeakerImage.src = "/Images/Volume Up.svg";
    audio.play();
  }
});

function loadQuestion() {
  clearInterval(timeId);
  resetOptions();

  localStorage.setItem("QuestionNo", JSON.stringify(currentQuestion));

  const q = Allquestion[currentQuestion];
  Pquestion.innerText = q.question;
  questionNumber.innerText = `${q.num}/25`;

  q.options.forEach((option, i) => {
    optionsContainer[i].innerText = option;
    optionsContainer[i].setAttribute("data-value", option);
  });

  if (AudioTrue === 1) {
    audio.src = "/Audio/kbc-question.mp3";
    audio.play();
  } else {
    audio.pause();
  }

  timer = 31;
  timeId = setInterval(() => {
    timer--;
    timerBox.innerText = `00:${timer < 10 ? "0" + timer : timer}`;
    if (timer <= 0) {
      clearInterval(timeId);
      optionsContainer.forEach((b) => (b.disabled = true));
    }
    if (timer === 15) {
      main.classList.add("color");
      nextQuestion.classList.add("yellowp");
      colorTimer.classList.add("timer");
    } else if (timer === 5) {
      main.classList.add("red-main");
      colorTimer.classList.add("red-timer");
      nextQuestion.classList.add("red-p");
    }
  }, 1000);
}

function resetOptions() {
  optionsContainer.forEach((btn, i) => {
    btnColor[i].classList.remove("btn-color", "wron");
    iconRight[i].src = "";
    Choos[i].innerText = "";
    btn.disabled = false;
  });

  main.classList.remove("red-main", "color");
  colorTimer.classList.remove("red-timer", "timer");
  nextQuestion.classList.remove("red-p", "yellowp");
}

optionsContainer.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-value");
    const correct = Allquestion[currentQuestion].answer;

    if (selected === correct) {
      if (AudioTrue === 1) {
        audio.src = "/Audio/correct.mp3";
        audio.play();
      }
      btnColor[i].classList.add("btn-color");
      iconRight[i].src = "Images/correct.svg";
      storeAnswer = storeAnswer + 1;
      localStorage.setItem("Correct", JSON.stringify(storeAnswer));
    } else {
      if (AudioTrue === 1) {
        audio.src = "/Audio/wrong.mp3";
        audio.play();
      }
      btnColor[i].classList.add("wron");
      Choos[i].innerText = "You chose";
      iconRight[i].src = `Images/wrong.svg`;
      Allquestion[currentQuestion].options.forEach((option, j) => {
        if (option === correct) {
          btnColor[j].classList.add("btn-color");
          iconRight[j].src = "Images/correct.svg";
        }
      });
    }

    optionsContainer.forEach((b) => (b.disabled = true));
    clearInterval(timeId);
  });
});

nextQuestion.addEventListener("click", () => {
  if (currentQuestion < Allquestion.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    end.href = "/complete.html";
  }
});

loadQuestion();

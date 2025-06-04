const form = document.querySelector("form");
const user1 = document.querySelector(".user1");
const user2 = document.querySelector(".user2");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const person1 = user1.value;
  const person2 = user2.value;

  // Check if both inputs are filled
  if (!person1 || !person2) {
    para.innerText = "Please enter valid dates for both users.";
    return;
  }

  const user1Date = new Date(person1);
  const user2Date = new Date(person2);

  // Check if entered values are valid dates
  if (isNaN(user1Date) || isNaN(user2Date)) {
    para.innerText = "Invalid date format. Please enter a valid date.";
    return;
  }

  const per1DOB = user1Date.getTime();
  const per2DOB = user2Date.getTime();

  // Calculate the difference in milliseconds
  let difference = Math.abs(per1DOB - per2DOB);
  console.log(difference);
  // Convert milliseconds to days, months, and years
  let days = Math.floor(difference / (1000 * 60 * 60 * 24)); // 1 day multipication in ms
  let years = Math.floor(days / 365);
  days %= 365; // Remaining days after extracting years
  let months = Math.floor(days / 30);
  days %= 30; // Remaining days after extracting months

  if (per1DOB < per2DOB) {
    para.innerText = `User 1 is older than User 2 by ${years} years, ${months} months, and ${days} days.`;
  } else if (per1DOB > per2DOB) {
    para.innerText = `User 2 is older than User 1 by ${years} years, ${months} months, and ${days} days.`;
  } else {
    para.innerText = "Both users are the same age.";
  }
});

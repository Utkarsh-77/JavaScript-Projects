const completed = document.querySelector(".completed");
const Persentage = document.querySelector(".completed span");
const score = document.querySelector(".center-text");
const retryDiv = document.querySelector(".retry-div");
const quotes = document.querySelector(".quotes");
const shareButton = document.querySelector(".share-button");

let scoreVal = JSON.parse(localStorage.getItem("Correct")) || 0;

score.innerText = `${scoreVal}/25`;
const val = (scoreVal * 100) / 25;
Persentage.innerText = `${val}%`;
completed.style.width = `${val}%`;

if (scoreVal <= 9) {
  quotes.innerText = "“Don't give up! Every expert was once a beginner.”";
} else if (scoreVal <= 14) {
  quotes.innerText =
    "“You're improving! Keep practicing and you'll get there.”";
} else if (scoreVal <= 19) {
  quotes.innerText = "“Work hard, you have a good score!”";
} else if (scoreVal <= 23) {
  quotes.innerText = "“Keep learning, you have a very good score!”";
} else {
  quotes.innerText = "“Excellent! You're mastering it like a pro!”";
}

retryDiv.addEventListener("click", () => {
  localStorage.clear();
});

shareButton.addEventListener("click", async () => {
  const container = document.querySelector(".container");

  try {
    const canvas = await html2canvas(container, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
    });

    const blob = await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });

    const file = new File([blob], "score.png", { type: "image/png" });

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {
      await navigator.share({
        files: [file],
        title: "My Quiz Score",
        text: `I scored ${scoreVal}/25 (${val}%)! ${quotes.innerText}`,
      });
    } else {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "score.png";
      link.click();
      URL.revokeObjectURL(url);
      alert("Sharing not supported. The score image has been downloaded.");
    }
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    alert("Failed to capture or share the score. Please try again.");
  }
});

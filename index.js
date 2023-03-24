let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.innerHTML = `${minutes} : ${sec}`;
  if (totalSeconds <= 59) {
    countdownDisplay.style.color = "rgb(204, 39, 2)";
  }

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.innerHTML = "Fin du compte à rebours";
    countdownDisplay.style.color = "brown";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Entrez un nombre avant que je me fache");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});

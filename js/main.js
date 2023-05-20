let intervalId;

function startClock() {
  clearInterval(intervalId);
  intervalId = setInterval(updateClock, 1000);
}

function stopClock() {
  clearInterval(intervalId);
}

function updateClock() {
  const date = new Date();
  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

// Start the clock immediately when the page loads
window.onload = function () {
  startClock();
};

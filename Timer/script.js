function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}
showTime();
let interval = setInterval(showTime, 1000);

const stopButton = document.getElementById("stop-btn");
stopButton.addEventListener("click", () => {
  clearTimeout(interval);
});

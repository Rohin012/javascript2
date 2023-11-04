const video = document.getElementById("myVideo");
const playPauseButton = document.getElementById("playPauseButton");
const timeSlider = document.getElementById("timeSlider");
const currentTime = document.getElementById("currentTime");
const totalDuration = document.getElementById("totalDuration");

playPauseButton.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateSlider);
timeSlider.addEventListener("input", seekVideo);

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = "Pause";
  } else {
    video.pause();
    playPauseButton.textContent = "Play";
  }
}

function updateSlider() {
  const current = video.currentTime;
  const duration = video.duration;
  timeSlider.value = current;
  currentTime.textContent = formatTime(current);
  totalDuration.textContent = formatTime(duration);
}

function seekVideo() {
  const seekTime = parseFloat(timeSlider.value);
  video.currentTime = seekTime;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

updateSlider();

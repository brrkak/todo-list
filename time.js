// Elements
const currentClock = document.getElementById(`currentClock`);
const currentDate = document.querySelector(`.currentDate`);
const yourName = document.querySelector(`.hello`);
const containerSection = document.querySelector(`.section-1`);

function getClock() {
  const now = new Date(); // 현재 날짜 및 시간

  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  currentClock.innerText = `${hour}: ${minutes}: ${seconds}`;
}

getClock();
setInterval(getClock, 1000);

function getDate() {
  const now = new Date(); // 현재 날짜 및 시간

  const day = now.getDay();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = now.getDate();
  const month = now.getMonth();
  const monthNames = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  const year = now.getFullYear();
  currentDate.innerText = `${dayNames[day]} ${date} ${monthNames[month]} ${year}`;
}
getDate();

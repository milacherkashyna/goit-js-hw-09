function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let timerId = null;

stopBtnRef.disabled = true;

startBtnRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtnRef.disabled = false;
  startBtnRef.disabled = true;
});

stopBtnRef.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
  stopBtnRef.disabled = true;
  startBtnRef.disabled = false;
});

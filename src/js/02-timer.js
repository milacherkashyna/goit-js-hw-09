import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const inputRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startBtnRef.addEventListener('click', onBtnStartClick);
startBtnRef.disabled = true;
let selectDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtnRef.disabled = false;
      selectDate = selectedDates[0];
    }
  },
};

let timerId = null;
function onBtnStartClick(event) {
  timerId = setInterval(() => {
    const differenceTime = selectDate - new Date();
    if (differenceTime <= 0) {
      clearInterval(timerId);
      Notiflix.Notify.success('Time is out');
      return;
    }
    const convertTime = convertMs(differenceTime);
    daysRef.textContent = addLeadingZero(convertTime.days);
    hoursRef.textContent = addLeadingZero(convertTime.hours);
    minutesRef.textContent = addLeadingZero(convertTime.minutes);
    secondsRef.textContent = addLeadingZero(convertTime.seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
flatpickr(inputRef, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

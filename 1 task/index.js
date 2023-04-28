const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const intervalId = setInterval(() => {
    let hours = Math.floor(seconds/3600);  // в одном часе 3600 минут
    let minutes = Math.floor((seconds % 3600) / 60); // минуты
    let secondsNew = seconds % 60;
    timerEl.textContent = (hours + " часов " + minutes + " минут(ы) " + secondsNew + " секунд")
 
    if (seconds === 0) {
      clearInterval(intervalId);
    } else {
      seconds--;

      if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 59;
      }
    }
  }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  const currentValue = event.target.value;
  const cleanedValue = currentValue.replace(/\D/g, '');
  event.target.value = cleanedValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});

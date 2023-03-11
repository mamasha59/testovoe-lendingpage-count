const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
 
  return (seconds) => {
   let hours = Math.floor(seconds/ 3600); // в одном часе 3600 минут

   let secondsLeft = seconds % 3600 // остаток секунд

   let minutes = Math.floor(secondsLeft / 60) // минуты

   let secondsNew = secondsLeft % 60

   timerEl.textContent = (hours + " часов " + minutes + " минут(ы) " + secondsNew + " секунд")
  };
};

const animateTimer = createTimerAnimator();

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

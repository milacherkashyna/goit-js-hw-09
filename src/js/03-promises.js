import Notiflix from 'notiflix';
const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.delay.value === '' ||
    event.target.elements.step.value === '' ||
    event.target.elements.amount.value === ''
  ) {
    Notiflix.Notify.failure('Please fill all fields');
    return;
  }
  const amount = +event.target.elements.amount.value;
  let delay = +event.target.elements.delay.value;
  const step = +event.target.elements.step.value;
  event.target.reset();
  for (let index = 1; index <= amount; index++) {
    createPromise(index, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

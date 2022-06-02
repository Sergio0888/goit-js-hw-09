'use strict'

import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

      if (shouldResolve) {
      return resolve({ position, delay })
      } else {
        return reject({ position, delay })
      }
        }, delay);
    })
    
    promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
   
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });


}




const formEl = document.querySelector('.form')

const onSubmitForm = event => {
  event.preventDefault()

  const firstDelay = Number(event.currentTarget[0].value)
  const stepDelay = Number(event.currentTarget[1].value)
  const amount = Number(event.currentTarget[2].value)

  let delay = firstDelay;

  for (let i = 1; i <= amount; i += 1) {
    
    createPromise(i, delay)
    
    delay += stepDelay
  }
}


formEl.addEventListener('submit', onSubmitForm)
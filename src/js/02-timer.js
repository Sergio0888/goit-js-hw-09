'use strict'


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

// CSS

const timerEl = document.querySelector('.timer')
const fieldEl = document.querySelectorAll('.field')

const valueEl = document.querySelectorAll('.value')
const labelEl = document.querySelectorAll('.label')

timerEl.style.cssText = 'display: flex;'
fieldEl.forEach(el => el.style.cssText = 'display: flex;flex-direction: column;width: 80px;align-items: center;')

valueEl.forEach(el => el.style.cssText = 'font-size: 40px')

labelEl.forEach(el => el.style.cssText = 'text-transform: uppercase; ')

const btnEl = document.querySelector('[data-start]')
btnEl.disabled = true

// Calendar

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {


        const defaultTime = options.defaultDate.getTime()
        const selectedTime = selectedDates[0].getTime()

        if (defaultTime > selectedTime) {
            Notiflix.Notify.failure("Please choose a date in the future")
            // window.alert()
            btnEl.disabled = true
            return
        }
        btnEl.disabled = false
        return
      
    },
  };

flatpickr('#datetime-picker', options)


// Timer 



const inputCalendarEl = document.querySelector('#datetime-picker')

const timer = {
    intervalId: null,
  
    start(rootSelector, deadline) {
      this.intervalId = setInterval(() => {
        const ms = deadline - Date.now();

            if (ms <= 0) {
            this.stop();
            return;
            }
            const { days, hours, minutes, seconds } = convertMs(ms);

            rootSelector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
            rootSelector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
            rootSelector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
            rootSelector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);
         
        }, 1000)
    },
    stop() {
        clearInterval(this.intervalId);
      },
      addLeadingZero(value) {
        return String(value).padStart(2, '0');
      }
}


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

  const onTimerClick = event => {

    const timerDeadline = new Date(inputCalendarEl.value)
    timer.start(timerEl, timerDeadline);

  }

  btnEl.addEventListener('click', onTimerClick)
  


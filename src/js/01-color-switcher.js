'use strict'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')

console.dir(bodyEl);

startBtnEl.style.cssText = 'width: 100px; height: 50px; font-size: 22px; position: absolute; left: 45%;top: 50%;text-transform: uppercase;'
stopBtnEl.style.cssText = 'width: 100px; height: 50px; font-size: 22px; position: absolute; left: 53%;top: 50%;text-transform: uppercase;'


let intervalId = null

const onStartChangeBackground = event => {

    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
    
    startBtnEl.disabled = true
    stopBtnEl.disabled = false
}

const onStopChangeBackground = event => {
    clearInterval(intervalId)
    startBtnEl.disabled = false
    stopBtnEl.disabled = true
}

stopBtnEl.addEventListener('click', onStopChangeBackground)
startBtnEl.addEventListener('click', onStartChangeBackground)
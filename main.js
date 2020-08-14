const appButton = document.querySelector('#app-button');
const restart_btn = document.querySelector('#app-btn-restart');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const upperText = document.querySelector('.usr-text');
const bottomText = document.querySelector('.bottom-text');
const randomNum = Math.floor(Math.random() * 100) + 1;
const halfnum = randomNum / 2;

appButton.addEventListener('click', (e) => {
  if(e.target.classList.contains('step-1')){
    messageHandler('Multiply guessed number by 2', 'Did you multiplyed guessed number by 2?  Click on next !!', 'step-2', 'step-1', e.target );
  } else if (e.target.classList.contains('step-2')) {
    messageHandler(`Add ${randomNum} to total value !!`,  `Did you add ${randomNum}? Click on next !!`, 'step-3', 'step-2', e.target );
  } else if (e.target.classList.contains('step-3')) {
    messageHandler(`Divide total value by 2`, `Did divide total value by 2 ? Click on next !!`, 'step-4', 'step-3', e.target );
  } else if(e.target.classList.contains('step-4')) {
    messageHandler(`deduct guessed number from total value`,`Did you deduct guessed number form total value ? Click on next !!`, 'step-5', 'step-4', e.target );
  } else if(e.target.classList.contains('step-5')) {
    appButton.style.display = 'none';
    restart_btn.style.display = 'block';
    messageHandler(`Remaining number will be ${halfnum}`,``, '', 'step-5', e.target );
  }
});

restart_btn.addEventListener('click', (e) => {
 window.location.reload();
});

document.addEventListener('DOMContentLoaded', () =>  {
  minNum.innerText = 1;
  maxNum.innerText = 1000;
});

const messageHandler = (text, bottomtext, addClass, rmClass, el) => {
  upperText.innerText = text;
  bottomText.innerText = bottomtext;
  if(addClass) {
    el.classList.add(addClass);
  }
  el.classList.remove(rmClass);
}
const hoursEl = document.querySelector('.limited-offer__time-hours');
const minutesEl = document.querySelector('.limited-offer__time-minutes');
const secondsEl = document.querySelector('.limited-offer__time-seconds');

const form = document.querySelector('.product__form-specifications');
const mainImg = document.querySelector('.product__main-img');
const btnImg = document.querySelectorAll('.product__item-img');


const timer = setInterval(() => {
  let hour = hoursEl.textContent;
  let minute = minutesEl.textContent;
  let second = secondsEl.textContent;

  second--;

  if(hour === 0 && minute === 0 && second === 0) {
    clearInterval(timer);
  }
  if(second < 0) {
    second = 59;
    minute--;
  }
  if(minute < 0) {
    minute = 59;
    hour--;
  }

  if(hour < 10) {
    hour = hour.toString().padStart(2, '0');
  }
  if(minute < 10) {
    minute = minute.toString().padStart(2, '0');
  }
  if(second < 10) {
    second = second.toString().padStart(2, '0');
  }

  hoursEl.textContent = hour;
  minutesEl.textContent = minute;
  secondsEl.textContent = second;
}, 1000);


form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  window.location.href = 'https://www.youtube.com/';
});


btnImg.forEach(btn => {
  btn.addEventListener('click', evt => {
    btnImg.forEach(btn => {
      if(evt.target !== btn) {
        btn.classList.remove('product__item-img_active');
      }
    });
    
    btn.classList.add('product__item-img_active');

    mainImg.src = getComputedStyle(btn)['backgroundImage'].match(/"(.*?)"/g)[0].replace(/['"]+/g, '');
  });
});

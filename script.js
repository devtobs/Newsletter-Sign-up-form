'use strict';

const mainContent = document.querySelector('main');
const successMsg = document.querySelector('.success-msg');
const footer = document.querySelector('footer');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');

document.getElementById('btn-subscribe').addEventListener('click', function () {
  if (emailInput.checkValidity()) {
    mainContent.classList.add('hidden');
    footer.classList.add('hidden');
    successMsg.classList.remove('hidden');
  } else {
    emailInput.placeholder = 'ash#loremcompany.com';
    document.documentElement.style.setProperty(
      '--placeholder-color',
      'hsl(4, 100%, 67%)'
    );
    emailInput.classList.add('invalid');
    errorMsg.classList.remove('hidden');
  }
});

emailInput.addEventListener('input', function () {
  if (emailInput.checkValidity()) {
    emailInput.placeholder = 'email@company.com';
    document.documentElement.style.setProperty(
      '--placeholder-color',
      'hsl(231, 7%, 60%)'
    );
    emailInput.classList.remove('invalid');
    errorMsg.classList.add('hidden');
  }
});

document.getElementById('btn-dismiss').addEventListener('click', function () {
  successMsg.classList.add('hidden');
  mainContent.classList.remove('hidden');
  footer.classList.remove('hidden');
  emailInput.value = '';
});

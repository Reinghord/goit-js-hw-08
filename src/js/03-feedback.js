import throttle from 'lodash.throttle';

const { form, email, message } = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const storageObject = {};
const onInputStoreData = function (e) {
  storageObject[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageObject));
};

form.addEventListener('input', throttle(onInputStoreData, 500));

const getStorageObject = localStorage.getItem('feedback-form-state');
const parsed = JSON.parse(getStorageObject);

if (getStorageObject !== null) {
  if (parsed.email !== undefined) {
    email.value = parsed.email;
  }
  if (parsed.message !== undefined) {
    message.value = parsed.message;
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log('This is current data from Local Storage', parsed);

  localStorage.removeItem('feedback-form-state');

  const currentData = {
    email: email.value,
    message: message.value,
  };

  console.log('This is current data from form', currentData);

  email.value = '';
  message.value = '';
});

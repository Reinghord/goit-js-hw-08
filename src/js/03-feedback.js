//Imports
import throttle from 'lodash.throttle';
//Refs
const { form, email, message } = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const storageObject = {};
//Function to store input data in local storage
const onInputStoreData = function (e) {
  storageObject[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageObject));
};

//Event Listener with throttle for form inputs
form.addEventListener('input', throttle(onInputStoreData, 500));

//Check for local storage and adding data to inputs on reload
const getStorageObject = localStorage.getItem('feedback-form-state');
const parsed = JSON.parse(getStorageObject);

if (getStorageObject !== null) {
  if (parsed.email) {
    email.value = parsed.email;
  }
  if (parsed.message) {
    message.value = parsed.message;
  }
}

//Function on submit to reset form, remove local storage data and log in console current data
form.addEventListener('submit', e => {
  e.preventDefault();
  const submitParsed = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('This is current data from Local Storage', submitParsed);

  localStorage.removeItem('feedback-form-state');

  const currentData = {
    email: email.value,
    message: message.value,
  };

  console.log('This is current data from form', currentData);

  form.reset();
});

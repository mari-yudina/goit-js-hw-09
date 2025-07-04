const formData = {
  email: '',
  message: '',
};
const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
form.addEventListener('submit', handleSubmit);

textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onTextareaInput(event) {
  const message = textarea.value;
  localStorage.setItem(key, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(key);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(key);
}

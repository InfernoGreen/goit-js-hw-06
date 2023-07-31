const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', () => {
  const expectedLength = parseInt(inputElement.getAttribute('data-length'));
  const enteredValue = inputElement.value.trim();
  const isValid = enteredValue.length === expectedLength;

  if (isValid) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});
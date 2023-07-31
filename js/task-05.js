const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');


function updateNameOutput() {
  const inputValue = nameInput.value.trim();

  if (inputValue !== '') {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
}

nameInput.addEventListener('input', updateNameOutput);
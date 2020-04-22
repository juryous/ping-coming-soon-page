const form = document.getElementById('form');
const input = form.querySelector('input');

form.addEventListener('submit', e => {
  e.preventDefault();
  validEmail(input.value) ? form.classList.remove('error') : form.classList.add('error');
});

function validEmail(email){
  var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  return regex.test(String(email).toLocaleLowerCase());
}
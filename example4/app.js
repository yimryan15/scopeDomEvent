window.onload = function() {
  const submitButton = document.querySelector('.button')
  const headline = document.querySelector('.header');

  submitButton.onclick = function validateForm() {
    const usernameInput = document.form.username.value;
    const emailInput = document.form.email.value;
    const passwordInput = document.form.password.value;
    const integerValidation = new RegExp('([0-9])')

    if(!integerValidation.test(usernameInput)) {
      alert('username incorrect')
      return false;
    }
    if(passwordInput !== '12345678') {
      alert('password incorrect');
      return false;
    }
    headline.innerText = 'The information in the form is correct';
  }
};

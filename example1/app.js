window.onload = function() {
  const buttonOne = document.querySelector('.button-one');
  const buttonTwo = document.querySelector('.button-two');
  const text = document.querySelector('.text');

  buttonOne.addEventListener('click', function() {
    text.innerHTML = "I'm right"
  });

  buttonTwo.addEventListener('click', function() {
    text.innerHTML = "No, I'm right!"
  });

};

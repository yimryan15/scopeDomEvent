window.onload = function() {
  const headerText = document.querySelector('.header');

  window.addEventListener('keypress', function(event) {
    const keyName = event.key;
    headerText.innerHTML = keyName;
  });
};

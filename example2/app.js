window.onload = function() {
  const headerText = document.querySelector('.header');

  headerText.addEventListener('mouseover', function() {
    alert("Hey, I told you not to hover over me!");
  });
};

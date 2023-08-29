function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function revealsl() {
    var reveals = document.querySelectorAll(".revealsl");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealsl);


function myFunction() {
    window.location.href = "blog.html";
  }

  const hoverElement = document.querySelector('.hover-element');

  // Add a 'mouseover' event listener to change the background image on hover
  hoverElement.addEventListener('mouseover', () => {
      hoverElement.style.backgroundImage = 'url("airplane.png")';
  });
  
  // Add a 'mouseout' event listener to revert to the initial background image
  hoverElement.addEventListener('mouseout', () => {
      hoverElement.style.backgroundImage = 'url("apusiqay")';
  });
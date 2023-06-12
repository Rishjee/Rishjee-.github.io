// Wait for the HTML document to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with the ID 'dynamic-content'
    var dynamicContent = document.getElementById('dynamic');
  
    // Create a new paragraph element
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Good communication skills, Analytical skills, Research skills, Creativity';
   
  
    // Append the paragraph element to the dynamic content element
    dynamicContent.appendChild(paragraph);
  });
  

// Wait for the HTML document to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Swiper instance
    var mySwiper = new Swiper('.swiper-wrapper', {
      // Optional configuration options
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });


  var element = document.getElementById('animated-element');
  var position = 0;
  var direction = 1;

  setInterval(function() {
    // Move the element horizontally
    position += direction * 5;
    element.style.left = position + 'px';

    // Reverse direction when reaching the edge
    if (position >= 200 || position <= 0) {
      direction *= -1;
    }
  }, 50); // Animation speed in milliseconds


  // Get the form element
  var form = document.querySelector('form');

  // Function to validate the form
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var nameInput = document.querySelector('input[type="text"][placeholder="Enter your name"]');
    var emailInput = document.querySelector('input[type="text"][placeholder="Enter your email"]');
    

    // Reset previous error messages
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
      errorMessage.remove();
    });

    // Validate name field
    if (nameInput.value.trim() === '') {
      displayErrorMessage(nameInput, 'Name is required');
      return;
    }

    // Validate email field
    if (emailInput.value.trim() === '') {
      displayErrorMessage(emailInput, 'Email is required');
      return;
    } else if (!isValidEmail(emailInput.value.trim())) {
      displayErrorMessage(emailInput, 'Invalid email');
      return;
    } 

    // If all fields are valid, submit the form
    form.submit();
  }

  // Function to display error messages
  function displayErrorMessage(element, message) {
    var errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    element.parentNode.insertBefore(errorMessage, element.nextSibling);
  }

  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add event listener to form submit
  form.addEventListener('submit', validateForm);
  
  // Smooth scrolling for anchor links
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();

    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 1000;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var ease = easeOutCubic(progress, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  }

  // Easing function for smooth scrolling
  function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

  window.addEventListener('load', function () {
    alert('Welcome to my portfolio!');
  });
 
  
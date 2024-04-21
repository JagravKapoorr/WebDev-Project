document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector("input[type='text']");
    const getStartedButton = document.querySelector(".hero-buttons .btn");
    
    getStartedButton.addEventListener("click", function() {
      const email = emailInput.value.trim();
      
      if (email !== "") {
        alert(`Thank you for signing up with email: ${email}. Enjoy Netflix!`);
      } else {
        alert("Please enter a valid email address.");
      }
    });
    
    const faqBoxes = document.querySelectorAll(".faqbox");
    
    faqBoxes.forEach(function(box) {
      box.addEventListener("click", function() {
        const question = box.querySelector("span").textContent;
        alert(`You clicked on: ${question}`);
      });
    });
  });
  
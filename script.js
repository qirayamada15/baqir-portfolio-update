// Navbar Toggle Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle class "show"
});


// Dynamic scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});


// interactyive skill bar
const skillProgressBars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
  skillProgressBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      bar.style.width = bar.getAttribute("data-skill") + "%";
    }
  });
});

// dynamic typing animation 
const text = ["a Front-End Developer","Artist", "a Problem Solver", "Passionate about ART and Design", "Passionate about Code"];
let index = 0;
let charIndex = 0;
let currentText = "";
const typingElement = document.getElementById("typing");
const typingStatic = document.getElementById("typing-static");

function type() {
  if (window.innerWidth <= 768) return; // Stop typing effect on small screens
  if (charIndex < text[index].length) {
    currentText += text[index].charAt(charIndex);
    typingElement.textContent = currentText;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 200); // Pause before erasing
  }
}

function erase() {
  if (window.innerWidth <= 768) return; // Stop typing effect on small screens
  if (charIndex > 0) {
    currentText = currentText.substring(0, charIndex - 1);
    typingElement.textContent = currentText;
    charIndex--;
    setTimeout(erase, 100);
  } else {
    index = (index + 1) % text.length; // Move to the next text
    setTimeout(type, 500);
  }
}

// Start typing effect if screen is larger than 768px
if (window.innerWidth > 768) {
  type();
}

// Update dynamic typing visibility on resize
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    typingElement.textContent = ""; // Clear the typing effect
  } else {
    currentText = "";
    charIndex = 0;
    index = 0;
    type(); // Restart typing effect on larger screens
  }
});


// form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out!");
      return false;
    }
    return true;
  }

  
// gallery
// function openModal(img) {
//     const modal = document.getElementById('imageModal');
//     const modalImage = document.getElementById('modalImage');
//     modal.style.display = "block";
//     modalImage.src = img.src;
//   }
  
//   function closeModal() {
//     const modal = document.getElementById('imageModal');
//     modal.style.display = "none";
//   }
  

// project countdown
// Set the date we're counting down to
// const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
// const x = setInterval(function() {

  // Get the current date and time
//   const now = new Date().getTime();
  
  // Find the distance between now and the count down date
//   const distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // If the countdown is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);




// slider button
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.slider-item');
  document.querySelector('.slider-container').appendChild(items[0])
});

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.slider-item');
  document.querySelector('.slider-container').prepend(items[items.length - 1])
});



window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});

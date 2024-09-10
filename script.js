function toggleMenu() {
  console.log("toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// Close menu on link click in mobile view
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none"; // Hide menu on link click in mobile view
    }
  });
});

function toggleFaq(faq) {
  faq.parentElement.classList.toggle("active");
}

let currentSlide = 0;
let testimonials;

function showSlide(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function prevSlide() {
  currentSlide =
    currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide =
    currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
}

// Initialize the slider on DOM load
document.addEventListener("DOMContentLoaded", () => {
  testimonials = document.querySelectorAll(".testimonial");

  // Set initial slide positions
  testimonials.forEach((testimonial, i) => {
    testimonial.style.transform = `translateX(${i * 100}%)`;
  });

  showSlide(currentSlide); // Show the first slide initially

  // Auto-slide every seconds
  setInterval(() => {
    nextSlide();
  }, 3000);
});

// Get the modal
var modal = document.getElementById("signupModal");

// Get the button that opens the modal
var signUpButtons = document.querySelectorAll(".signup-btn");

// Get the <span> element that closes the modal
var closeModal = document.querySelector(".close-btn");

// Open modal when any Sign-Up button is clicked
signUpButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.style.display = "flex";
  });
});

// Close modal when the 'x' is clicked
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the "Get Started Today" button and the promo banner
var getStartedBtn = document.querySelector(".get-started-btn");
var promoBanner = document.getElementById("promoBanner");
var closeBanner = document.querySelector(".close-banner");

// Show banner when "Get Started Today" is clicked
getStartedBtn.addEventListener("click", function () {
  promoBanner.style.display = "block"; // Display the banner below the button
});

// Close banner when the 'x' is clicked
closeBanner.addEventListener("click", function () {
  promoBanner.style.display = "none"; // Hide the banner when 'x' is clicked
});

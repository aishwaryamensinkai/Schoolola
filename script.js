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

// Slider Functionality for Testimonials with auto-slide
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

  // Add sliding functionality to testimonials
  testimonials.forEach((testimonial, i) => {
    testimonial.style.position = "absolute";
    testimonial.style.width = "100%";
    testimonial.style.transition = "transform 0.5s ease-in-out";
    testimonial.style.transform = `translateX(${i * 100}%)`;
  });

  showSlide(currentSlide); // Show the first slide initially

  // Auto-slide every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000); // 5000 ms (5 seconds)
});

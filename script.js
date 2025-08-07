// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mainNav = document.querySelector(".main-nav ul");

mobileMenuBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  mainNav.classList.toggle("active");
});

// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Theme Switcher
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    this.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    this.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

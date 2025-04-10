/**
 * Main JavaScript for Yang Li's GitHub Pages
 * Handles animations, interactions, and responsive behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  // Add smooth fade-in animation to content
  const content = document.querySelector('.content');
  if (content) {
    content.classList.add('fade-in');
  }
  
  // Handle mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Add scroll animation for elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('animated');
      }
    });
  };
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on page load
  animateOnScroll();
});

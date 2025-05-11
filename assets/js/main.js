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
  
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  const postList = document.querySelector('.post-list');
  const postItems = document.querySelectorAll('.post-item');

  if (searchForm && searchInput && postList) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
      searchInput.value = searchParam;
      filterPosts(searchParam);
    }
    
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchValue = searchInput.value.toLowerCase();
      filterPosts(searchValue);
      
      const newUrl = window.location.pathname + '?search=' + encodeURIComponent(searchValue);
      window.history.pushState({ path: newUrl }, '', newUrl);
    });
    
    searchInput.addEventListener('input', function() {
      const searchValue = searchInput.value.toLowerCase();
      filterPosts(searchValue);
    });
  }
  
  function filterPosts(searchValue) {
    const postItems = document.querySelectorAll('.post-item');
    let hasResults = false;
    
    postItems.forEach(item => {
      const title = item.querySelector('.post-title').textContent.toLowerCase();
      const excerpt = item.querySelector('.post-excerpt').textContent.toLowerCase();
      const categories = item.querySelectorAll('.post-category');
      
      let categoryMatch = false;
      if (categories.length > 0) {
        categories.forEach(category => {
          if (category.textContent.toLowerCase().includes(searchValue)) {
            categoryMatch = true;
          }
        });
      }
      
      if (title.includes(searchValue) || excerpt.includes(searchValue) || categoryMatch) {
        item.style.display = 'block';
        hasResults = true;
      } else {
        item.style.display = 'none';
      }
    });
    
    let noResultsMsg = document.querySelector('.no-results-message');
    if (!hasResults) {
      if (!noResultsMsg) {
        const message = document.createElement('li');
        message.classList.add('no-results-message');
        message.textContent = 'No posts found matching your search.';
        postList.appendChild(message);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  }
});

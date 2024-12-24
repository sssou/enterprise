
  document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('theme-switch');
  
    // Function to apply the theme
    function applyTheme(theme) {
      document.body.className = theme;
      const nav = document.querySelector('nav');
      const footer = document.querySelector('footer');
  
      if(nav) nav.className = theme;
      if(footer) footer.className = theme;
  
      localStorage.setItem('theme', theme);
    }
  
    // Load and apply the saved theme, if any
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if nothing is saved
    applyTheme(savedTheme);
  
    // Add event listener to the theme toggle button
    if (toggleThemeButton) {
      toggleThemeButton.addEventListener('click', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
      });
    } else {
      console.error('Toggle theme button not found.');
    }
  });
/*
  document.getElementById('toggleImages').addEventListener('click', function() {
    // Select all images with the class 'gallery-image'
    var images = document.querySelectorAll('.flip');

    // Loop through each image and update the src attribute based on its current state
    images.forEach(image => {
        if (image.src.includes("main.png")) {
            image.src = image.src.replace("main.png", "back.png");
        } else if (image.src.includes("back.png")) {
            image.src = image.src.replace("back.png", "main.png");
        }
    });
});
*/
// overlay

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay'); // Select the overlay
  const loadingPercentage = document.querySelector('.loading-percentage'); // Loading percentage text
  const loadingContainer = document.querySelector('.loading-container'); // Loading container
  const scrollDownIcon = document.querySelector('.scroll-down-icon'); // Scroll down icon, if exists
  let loadingComplete = false; // Track whether loading is complete
  let lastScrollPosition = 0;

  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5; // Increment progress
    loadingPercentage.textContent = `${progress}%`;

    // Adjust overlay opacity during loading
    if (overlay) {
      const opacity = 0.9 - (progress / 200); // Reduce opacity as loading progresses
      overlay.style.background = `rgba(0, 0, 0, ${Math.max(opacity, 0.5)})`; // Min opacity 0.5
    }

    // Check if loading is complete
    if (progress >= 100) {
      clearInterval(interval);
      loadingComplete = true;

      // Remove loading indicator
      loadingContainer.style.opacity = '0';
      loadingContainer.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loadingContainer.style.display = 'none';
      }, 500); // Remove from DOM after transition
    }
  }, 100);

  // Scroll functionality
  window.addEventListener('scroll', () => {
    if (!loadingComplete) return; // Do nothing if loading is not complete

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition === 0) {
      // Show overlay when at the very top
      overlay.classList.add('visible');
      overlay.classList.remove('hidden');
    } else {
      // Hide overlay on scroll
      overlay.classList.add('hidden');
      overlay.classList.remove('visible');
    }

    lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // Avoid negative values
  });

  // Scroll down icon click functionality
  if (scrollDownIcon) {
    scrollDownIcon.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight, // Scrolls one viewport height down
        behavior: 'smooth' // Smooth scrolling
      });
    });
  }
});
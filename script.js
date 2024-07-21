
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

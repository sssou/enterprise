/*
document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('theme-switch');
    
    if (toggleThemeButton) { // Check if the button exists
      toggleThemeButton.addEventListener('click', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
        
        document.body.className = newTheme;
        document.querySelector('nav').className = newTheme;
        document.querySelector('footer').className = newTheme;
        
        localStorage.setItem('theme', newTheme);
      });
    } else {
      console.error('Toggle theme button not found.');
    }
  });
  */
 /*
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
  
    // Function to apply the theme
    function applyTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.querySelector('nav').add('dark-mode')
        document.querySelector('nav').remove('light-mode')
        document.querySelector('footer').add('dark-mode')
        document.querySelector('footer').remove('light-mode')
        if(themeSwitch) themeSwitch.checked = true; // Ensures the switch is in the correct position
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.querySelector('nav').add('light-mode')
        document.querySelector('nav').remove('dark-mode')
        document.querySelector('footer').add('light-mode')
        document.querySelector('footer').remove('dark-mode')
        if(themeSwitch) themeSwitch.checked = false;
      }
    }
  
    // Load and apply the saved theme, if any
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if nothing is saved
    applyTheme(savedTheme);
  
    // Add event listener to the theme switch
    if (themeSwitch) {
      themeSwitch.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
      });
    }
  });
  */
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

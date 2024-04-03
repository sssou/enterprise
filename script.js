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
  
function applySystemTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.toggle('dark', prefersDark);
  document.body.classList.toggle('light', !prefersDark);
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.body.classList.add(storedTheme);
  } else {
    applySystemTheme();
  }
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  document.body.classList.toggle('dark', !isDark);
  document.body.classList.toggle('light', isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Apply theme on page load
applyStoredTheme();

// Button click to toggle theme
document.querySelector('button').addEventListener('click', toggleTheme);

// Listen for system theme changes only if no manual theme is stored
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!localStorage.getItem('theme')) {
    applySystemTheme();
  }
});

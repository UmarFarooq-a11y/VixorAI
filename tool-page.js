(() => {
  const themeButton = document.getElementById('theme-toggle');
  const themeIcon = themeButton.querySelector('.theme-icon');
  const themeLabel = themeButton.querySelector('.theme-label');
  const savedTheme = localStorage.getItem('vixor-theme');
  const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    themeButton.title = `Switch to ${nextTheme} theme`;
    themeLabel.textContent = nextTheme === 'light' ? 'Light' : 'Dark';
    themeIcon.textContent = nextTheme === 'light' ? '☼' : '☾';
  }

  setTheme(initialTheme);
  themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('vixor-theme', nextTheme);
  });
})();

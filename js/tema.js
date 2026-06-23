/* ── Modo oscuro ── */
(function () {
  const STORAGE_KEY = 'tema-pd';
  const html = document.documentElement;

  // Aplica el tema guardado ANTES de pintar (evita flash)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') html.setAttribute('data-theme', 'dark');

  function getTheme() { return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

  function setTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEY, theme);
    updateBtn();
  }

  function updateBtn() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const dark = getTheme() === 'dark';
    btn.textContent = dark ? '☀️ Modo claro' : '🌙 Modo oscuro';
    btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const navInner = document.querySelector('.nav-inner');
    if (!navInner) return;

    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    btn.onclick = function () { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); };
    navInner.appendChild(btn);
    updateBtn();
  });
})();

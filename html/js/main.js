/* Shared behaviour for every standalone page: renders the header/nav
   and wires up the mobile menu toggle + active-link highlighting. */

function renderHeader(activePath) {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  const links = NAVIGATION.links
    .map((link) => {
      const isActive = link.path === activePath ? ' is-active' : '';
      return `<a class="site-header__link${isActive}" href="${link.path}">${link.label}</a>`;
    })
    .join('');

  mount.innerHTML = `
    <div class="site-header__inner container">
      <a href="index.html" class="logo">
        <span class="logo__mark">&lt;/&gt;</span>
        <span>${NAVIGATION.brand}</span>
      </a>
      <nav class="site-header__nav" id="site-nav">${links}</nav>
      <a href="${NAVIGATION.cta.path}" class="btn btn--primary btn--sm site-header__cta">${NAVIGATION.cta.label}</a>
      <button class="site-header__toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || 'index.html';
  renderHeader(page);
});

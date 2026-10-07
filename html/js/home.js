document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const p = PROFILE;

  const stackHtml = p.heroStack.map((t) => `<span>${t}</span>`).join('');
  const statsHtml = p.heroStats
    .map((s) => `<div class="stat"><strong class="stat__value">${s.value}</strong><span class="stat__label">${s.label}</span></div>`)
    .join('');

  app.innerHTML = `
    <section class="section hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <span class="badge badge--accent">${p.role}</span>
          <h1 class="hero__title">${p.heroTitleLine1}<br /><span class="hero__title-accent">${p.heroTitleLine2}</span></h1>
          <p class="hero__desc">${p.heroDescription}</p>
          <div class="hero__actions">
            <a href="projects.html" class="btn btn--primary">View Projects</a>
            <a href="contact.html" class="btn btn--secondary">Contact Me</a>
          </div>
          <div class="hero__stack">${stackHtml}</div>
          <div class="hero__stats">
            ${statsHtml}
            <p class="hero__note">${p.heroNote}</p>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__visual-card"></div>
        </div>
      </div>
    </section>
  `;
});

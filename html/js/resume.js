document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const r = RESUME;

  const statsHtml = r.stats
    .map((s) => `<div class="stat"><strong class="stat__value">${s.value}</strong><span class="stat__label">${s.label}</span></div>`)
    .join('');

  app.innerHTML = `
    <section class="section resume">
      <div class="container resume__inner">
        <div class="resume__content">
          <h1 class="resume__title">${r.heading}</h1>
          <p class="resume__desc">${r.description}</p>
          <div class="resume__actions">
            <a href="${r.pdfUrl}" class="btn btn--primary">Download Resume (PDF)</a>
            <a href="${r.pdfUrl}" class="btn btn--ghost">View Online</a>
          </div>
          <div class="resume__stats">${statsHtml}</div>
        </div>
        <div class="resume__preview">
          <div class="resume__preview-card"></div>
        </div>
      </div>
    </section>
  `;
});

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const s = SERVICES;

  const cardsHtml = s.items
    .map(
      (item) => `
      <article class="service-card card">
        <span class="icon-box">&#9670;</span>
        <h3 class="service-card__title">${item.title}</h3>
        <p class="service-card__desc">${item.description}</p>
      </article>`
    )
    .join('');

  app.innerHTML = `
    <section class="section services">
      <div class="container">
        <div class="section-heading">
          <span class="section-heading__eyebrow">WHAT I OFFER</span>
          <h2 class="section-heading__title">${s.heading}</h2>
          <p class="section-heading__desc">${s.description}</p>
        </div>
        <div class="services__grid">${cardsHtml}</div>
      </div>
    </section>
  `;
});

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const s = SKILLS;

  const cardsHtml = s.categories
    .map(
      (cat) => `
      <article class="skill-card card">
        <span class="icon-box">&#9635;</span>
        <h3 class="skill-card__title">${cat.title}</h3>
        <ul class="skill-card__items">${cat.items.map((i) => `<li>${i}</li>`).join('')}</ul>
      </article>`
    )
    .join('');

  app.innerHTML = `
    <section class="section skills">
      <div class="container">
        <div class="section-heading">
          <span class="section-heading__eyebrow">SKILLS & TECHNOLOGIES</span>
          <h2 class="section-heading__title">${s.heading}</h2>
          <p class="section-heading__desc">${s.description}</p>
        </div>
        <div class="skills__grid">${cardsHtml}</div>
      </div>
    </section>
  `;
});

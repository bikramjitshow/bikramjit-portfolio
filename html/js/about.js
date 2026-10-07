document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const p = PROFILE;

  const statsHtml = p.aboutStats
    .map((s) => `<div class="stat"><strong class="stat__value">${s.value}</strong><span class="stat__label">${s.label}</span></div>`)
    .join('');

  const strengthsHtml = p.coreStrengths
    .map(
      (item) => `
      <div class="strength">
        <span class="icon-box icon-box--sm">&#9679;</span>
        <div>
          <h4 class="strength__title">${item.title}</h4>
          <p class="strength__desc">${item.description}</p>
        </div>
      </div>`
    )
    .join('');

  app.innerHTML = `
    <section class="section about">
      <div class="container about__inner">
        <div class="about__content">
          <span class="badge badge--accent">ABOUT ME</span>
          <h1 class="about__title">${p.aboutHeading}</h1>
          <p class="about__para">${p.aboutParagraph1}</p>
          <p class="about__para">${p.aboutParagraph2}</p>
          <div class="about__stats">${statsHtml}</div>
        </div>
        <div class="about__side">
          <div class="about__photo"></div>
          <div class="about__strengths card">
            <span class="about__strengths-title">My Core Strengths</span>
            ${strengthsHtml}
          </div>
        </div>
      </div>
      <div class="container about__quote">
        <p class="card">&ldquo;${p.philosophy}&rdquo;</p>
      </div>
    </section>
  `;
});

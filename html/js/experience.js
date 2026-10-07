document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const e = EXPERIENCE;

  const timelineHtml = e.timeline
    .map(
      (entry) => `
      <div class="timeline-item">
        <div class="timeline-item__marker">
          <span class="timeline-item__dot"></span>
          <span class="timeline-item__line"></span>
        </div>
        <div class="timeline-item__body">
          <span class="timeline-item__period">${entry.period}</span>
          <h3 class="timeline-item__role">${entry.role}</h3>
          <p class="timeline-item__company">${entry.company}</p>
          <ul class="timeline-item__points">${entry.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
          <div class="timeline-item__tags">${entry.tags.map((t) => `<span class="badge badge--outline">${t}</span>`).join('')}</div>
        </div>
      </div>`
    )
    .join('');

  app.innerHTML = `
    <section class="section experience">
      <div class="container">
        <div class="experience__header">
          <div class="section-heading">
            <span class="section-heading__eyebrow">WORK EXPERIENCE</span>
            <h2 class="section-heading__title">${e.heading}</h2>
            <p class="section-heading__desc">${e.description}</p>
          </div>
          <div class="experience__total card">
            <span>Total Experience</span>
            <strong>${e.totalExperience}</strong>
          </div>
        </div>
        <div class="experience__timeline">${timelineHtml}</div>
      </div>
    </section>
  `;
});

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const d = PROJECTS;
  let activeFilter = 'All';

  function projectCard(project) {
    return `
      <article class="project-card card">
        <div class="project-card__thumb"></div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tags">${project.tags.map((t) => `<span class="badge badge--outline">${t}</span>`).join('')}</div>
          <div class="project-card__footer">
            <span class="project-card__role">Role: ${project.role}</span>
            <a class="project-card__link" href="project-detail.html?id=${project.id}">View Case Study &rarr;</a>
          </div>
        </div>
      </article>`;
  }

  function renderGrid() {
    const items = activeFilter === 'All' ? d.items : d.items.filter((p) => p.category === activeFilter);
    document.getElementById('projects-grid').innerHTML = items.map(projectCard).join('');
  }

  const filtersHtml = d.filters
    .map((f) => `<button class="projects__filter${f === activeFilter ? ' is-active' : ''}" data-filter="${f}">${f}</button>`)
    .join('');

  app.innerHTML = `
    <section class="section projects">
      <div class="container">
        <div class="section-heading">
          <span class="section-heading__eyebrow">FEATURED PROJECTS</span>
          <h2 class="section-heading__title">${d.heading}</h2>
          <p class="section-heading__desc">${d.description}</p>
        </div>
        <div class="projects__filters" id="projects-filters">${filtersHtml}</div>
        <div class="projects__grid" id="projects-grid"></div>
      </div>
    </section>
  `;

  document.getElementById('projects-filters').addEventListener('click', (event) => {
    const btn = event.target.closest('.projects__filter');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.projects__filter').forEach((b) => b.classList.toggle('is-active', b === btn));
    renderGrid();
  });

  renderGrid();
});

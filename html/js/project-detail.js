document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || PROJECTS.items[0].id;
  const project = PROJECTS.items.find((p) => p.id === id);

  if (!project) {
    app.innerHTML = `
      <section class="section container text-center">
        <p>Project not found.</p>
        <a href="projects.html" style="color: var(--color-accent-soft-text); font-weight: 600;">Back to Projects</a>
      </section>`;
    return;
  }

  let activeTab = project.tabs[0];

  function render() {
    app.innerHTML = `
      <section class="section case-study">
        <div class="container">
          <a href="projects.html" class="case-study__back">&larr; Back to Projects</a>
          <div class="case-study__header">
            <div>
              <h1 class="case-study__title">${project.title}</h1>
              <p class="case-study__desc">${project.description}</p>
              <div class="case-study__tags">${project.tags.map((t) => `<span class="badge badge--outline">${t}</span>`).join('')}</div>
            </div>
            <div class="case-study__meta card">
              <div><span>Role</span><strong>${project.role}</strong></div>
              <div><span>Duration</span><strong>${project.duration}</strong></div>
              <div><span>Live Demo</span><a href="${project.liveDemo}" target="_blank" rel="noopener">${project.liveDemo}</a></div>
            </div>
          </div>
          <div class="case-study__preview"></div>
          <div class="case-study__tabs" id="case-tabs">
            ${project.tabs.map((tab) => `<button class="case-study__tab${tab === activeTab ? ' is-active' : ''}" data-tab="${tab}">${tab}</button>`).join('')}
          </div>
          <div class="case-study__body">
            <div class="case-study__overview">
              <h2>Project Overview</h2>
              <p>${project.overview}</p>
            </div>
            <div class="case-study__features card">
              <span class="case-study__features-title">Key Features</span>
              <ul>${project.keyFeatures.map((f) => `<li><span>&#10003;</span>${f}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </section>
    `;

    document.getElementById('case-tabs').addEventListener('click', (event) => {
      const btn = event.target.closest('.case-study__tab');
      if (!btn) return;
      activeTab = btn.dataset.tab;
      render();
    });
  }

  render();
});

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const c = CONTACT;

  app.innerHTML = `
    <section class="section contact">
      <div class="container contact__inner">
        <div class="contact__info">
          <span class="badge badge--accent">GET IN TOUCH</span>
          <h1 class="contact__title">${c.heading}</h1>
          <p class="contact__desc">${c.description}</p>
          <span class="badge badge--dot">${c.availability}</span>
          <div class="contact__list">
            <div class="contact-info">
              <span class="icon-box icon-box--sm">&#9993;</span>
              <div>
                <span class="contact-info__label">Email</span>
                <a class="contact-info__value" href="mailto:${c.email}">${c.email}</a>
              </div>
            </div>
            <div class="contact-info">
              <span class="icon-box icon-box--sm">in</span>
              <div>
                <span class="contact-info__label">LinkedIn</span>
                <a class="contact-info__value" href="https://${c.linkedin}" target="_blank" rel="noopener">${c.linkedin}</a>
              </div>
            </div>
            <div class="contact-info">
              <span class="icon-box icon-box--sm">&#9827;</span>
              <div>
                <span class="contact-info__label">GitHub</span>
                <a class="contact-info__value" href="https://${c.github}" target="_blank" rel="noopener">${c.github}</a>
              </div>
            </div>
          </div>
        </div>

        <form class="contact__form card" id="contact-form">
          <label class="field">
            <span class="field__label">Name</span>
            <input class="field__control" type="text" placeholder="Your name" required />
          </label>
          <label class="field">
            <span class="field__label">Email</span>
            <input class="field__control" type="email" placeholder="Your email" required />
          </label>
          <label class="field">
            <span class="field__label">Message</span>
            <textarea class="field__control" rows="4" placeholder="Your message..." required></textarea>
          </label>
          <button type="submit" class="btn btn--primary" id="contact-submit">Send Message &rarr;</button>
          <p class="contact__form-note">${c.formNote}</p>
        </form>
      </div>
    </section>
  `;

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitBtn.textContent = 'Message Sent';
    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = 'Send Message &rarr;';
    }, 2000);
  });
});

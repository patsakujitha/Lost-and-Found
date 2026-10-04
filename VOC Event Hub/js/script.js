const faqItems = document.querySelectorAll('.faq-item');
const form = document.getElementById('register-form');
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    faqItems.forEach((faqItem) => {
      faqItem.classList.remove('active');
      faqItem.querySelector('.faq-answer').hidden = true;
    });

    if (!isOpen) {
      item.classList.add('active');
      answer.hidden = false;
    }
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
      alert('Please complete your details before registering.');
      return;
    }

    form.submit();
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
  });
}

const registerButton = document.querySelector('.primary-btn');
if (registerButton) {
  registerButton.addEventListener('click', () => {
    const activeButton = document.querySelector('.primary-btn.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    registerButton.classList.add('active');
  });
}

const latestStats = document.querySelector('.faq-item .faq-answer');
if (latestStats) {
  latestStats.textContent = 'Seats are filling quickly for this year\'s workshop.';
}

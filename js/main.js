// Smooth scrolling for anchor links
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// FAQ toggle behaviour
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  question.addEventListener('click', () => {
    const expanded = question.getAttribute('aria-expanded') === 'true';
    question.setAttribute('aria-expanded', !expanded);
    if (expanded) {
      answer.style.height = 0;
      answer.style.marginTop = 0;
      answer.style.opacity = 0;
    } else {
      answer.style.height = answer.scrollHeight + 'px';
      answer.style.marginTop = '1rem';
      answer.style.opacity = 1;
    }
  });
});

// Basic form validation
const form = document.getElementById('gform_1');
if (form) {
  form.addEventListener('submit', (e) => {
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    const postcode = form.querySelector('#postcode');
    let valid = true;

    [name, phone, postcode].forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add('op-highlight-error');
      } else {
        input.classList.remove('op-highlight-error');
      }
    });

    const phonePattern = /^[0-9\s+()-]{6,}$/;
    if (phone.value && !phonePattern.test(phone.value)) {
      valid = false;
      phone.classList.add('op-highlight-error');
    }

    if (!valid) {
      e.preventDefault();
    }
  });
}

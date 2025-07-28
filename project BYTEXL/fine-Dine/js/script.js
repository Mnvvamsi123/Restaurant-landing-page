
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const reservationForm = document.querySelector('#reservation-form');
if (reservationForm) {
  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const guests = document.querySelector('#guests');

    if (!name.value || !date.value || !time.value || !guests.value) {
      alert('Please fill in all fields.');
      return;
    }

    alert('Reservation submitted successfully!');
    reservationForm.reset();
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#contact-name');
    const email = document.querySelector('#contact-email');
    const message = document.querySelector('#contact-message');

    if (!name.value || !email.value || !message.value) {
      alert('Please complete all contact form fields.');
      return;
    }

    alert('Thank you for reaching out. We will get back to you shortly.');
    contactForm.reset();
  });
}

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px;font-size:18px;display:none;z-index:999;';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

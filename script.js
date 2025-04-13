console.log("PowerUp PC сайт загружен");

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const modal = document.getElementById('modal-overlay');
  const openModal = document.getElementById('open-modal');
  const closeModal = document.getElementById('close-modal');
  const commentField = document.getElementById('comment');
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.main-nav');

  // === Тема ===
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('light');
      localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
  }

  // === Модальное окно ===
  if (openModal && closeModal && modal) {
    openModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  // === Авторасширение textarea ===
  if (commentField) {
    commentField.addEventListener('input', () => {
      commentField.style.height = 'auto';
      commentField.style.height = commentField.scrollHeight + 'px';
    });
  }

  // === Бургер-меню ===
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // === Появление секций при прокрутке ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});

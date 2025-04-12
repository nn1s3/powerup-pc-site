// Скрипт для будущих функций, сейчас просто лог
console.log("PowerUp PC сайт загружен");
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  // При загрузке — проверить и применить тему
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // запускается один раз
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const modal = document.getElementById('modal-overlay');
  const openModal = document.getElementById('open-modal');
  const closeModal = document.getElementById('close-modal');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const icon = toggle.querySelector('.toggle-icon');
      icon.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });
  }

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
});

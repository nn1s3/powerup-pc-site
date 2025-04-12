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

// Скрипт для будущих функций, сейчас просто лог
console.log("PowerUp PC сайт загружен");
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });
  }
});

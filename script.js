// Скрипт для будущих функций, сейчас просто лог
console.log("PowerUp PC сайт загружен");
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });
  } else {
    console.error("Кнопка переключения темы не найдена!");
  }
});

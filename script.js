// Скрипт для будущих функций, сейчас просто лог
console.log("PowerUp PC сайт загружен");
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    toggle.addEventListener('click', () => {
      body.classList.toggle('light');
      toggle.textContent = body.classList.contains('light') ? '🌙' : '☀️';
    });
  });
  
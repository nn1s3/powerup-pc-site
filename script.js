// Скрипт для будущих функций, сейчас просто лог
console.log("PowerUp PC сайт загружен");
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌑';
  });
});
.price-table h3 {
  margin-top: 40px;
  color: #9333ea;
  text-align: center;
}

.price-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0 30px;
}

.price-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #333;
  font-size: 1rem;
}

body.light .price-table td {
  border-color: #ddd;
}

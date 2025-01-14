document.addEventListener('DOMContentLoaded', () => {
  // Функція для завантаження HTML контенту в елемент
  const loadHTML = (selector, url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error("Error loading HTML:", error));
  };

  // Завантажуємо контент у відповідні секції
  loadHTML("#header", "partials/header.html");
  loadHTML("#hero", "partials/hero.html");
  loadHTML("#about-us", "partials/about-us.html");
  loadHTML("#our-services", "partials/our-services.html");
  loadHTML("#reviews", "partials/reviews.html");
  loadHTML("#footer-container", "partials/footer.html");
});




// Отримуємо елементи лоадера та основного контенту
const heroAnimation = document.querySelector('.hero-animation');
const heroSection = document.querySelector('.hero-section');


// Додаємо затримку для анімації
setTimeout(() => {
  // Приховуємо анімацію лоадера
  heroAnimation.style.opacity = '0'; // Анімація зникнення
  heroAnimation.style.transition = 'opacity 0.5s ease';

 // Через 2 секунди (час анімації) ховаємо лоадер повністю
 setTimeout(() => {
  heroAnimation.style.display = 'none'; // Прибираємо з DOM
  heroSection.style.display = 'block'; // Відображаємо основний контент
  document.body.style.overflow = 'auto'; // Включаємо прокрутку

  setTimeout(() => {
    heroSection.style.opacity = '1'; // Плавне з'явлення
  }, 10); // Невелика затримка для плавного переходу
}, 2000); // Час переходу opacity
}, 3000); // 3 секунди затримки перед відображенням основного контенту








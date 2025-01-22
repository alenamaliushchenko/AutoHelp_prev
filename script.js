document.addEventListener('DOMContentLoaded', () => {
  // Функція для завантаження HTML контенту в елемент
  const loadHTML = (selector, url, callback) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(html => {
        document.querySelector(selector).innerHTML = html.replace(/<script.*script>/, "");
        if (callback) callback(); // Викликаємо callback після завантаження
      })
      .catch(error => console.error("Error loading HTML:", error));
  };


  // Завантажуємо контент у секцію #hero
  loadHTML("#hero", "partials/hero.html", () => {
    const title = document.getElementById("animated-title");

    if (title) {
      const text = title.innerText;
      title.innerText = ""; // Очищуємо початковий текст

      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        title.appendChild(span);

        // Застосовуємо анімацію з затримкою для кожного символу
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 200 * index);
      });
    } else {
      console.error('Елемент з id "animated-title" не знайдено');
    }

    // Анімація підзаголовка
    const subtitle = document.getElementById("subtitle");
    if (subtitle) {
      const subText = subtitle.innerText;
      subtitle.innerText = ""; // Очищуємо початковий текст

      // Розбиваємо текст підзаголовка на символи, включаючи пробіли як окремі елементи
      const subtitleChars = subText.split('');

      // Застосовуємо анімацію для підзаголовка після завершення анімації заголовка
      const animateSubtitle = () => {
        subtitleChars.forEach((char, index) => {
          const subSpan = document.createElement('span');
          subSpan.innerText = char === ' ' ? '\u00A0' : char; // використовуємо \u00A0 для пробілу, щоб він анімувався
          subtitle.appendChild(subSpan);

          // Затримка для кожного символу підзаголовка
          setTimeout(() => {
            subSpan.style.opacity = "1";
            subSpan.style.transform = "translateY(0)";
          }, 100 * index); // Затримка для підзаголовка
        });
      };

      // Чекаємо завершення анімації заголовка, потім анімувати підзаголовок
      const titleSpans = title.querySelectorAll('span');
      const lastTitleSpan = titleSpans[titleSpans.length - 1];

      // Викликаємо animateSubtitle після завершення анімації останнього символу заголовка
      lastTitleSpan.addEventListener('transitionend', animateSubtitle,  { once: true });
    } else {
      console.error('Елемент з id "subtitle" не знайдено');
    }
  });

  // Завантаження інших частин сторінки
  loadHTML("#header", "partials/header.html");
  loadHTML("#about-us", "partials/about-us.html");
  loadHTML("#our-services", "partials/our-services.html");
  loadHTML("#reviews", "partials/reviews.html");
  loadHTML("#footer-container", "partials/footer.html");

 // Функція для закриття меню
function closeMenu() {
  document.getElementById('menu-toggle').checked = false;
}

// Відслідковуємо прокручування сторінки
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) { // Якщо сторінка прокручена вниз
    closeMenu(); // Закрити меню
  }
});

// Відслідковуємо кліки по посиланнях
const menuLinks = document.querySelectorAll('.mobile-menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu); // Закриваємо меню при кліку
});
});
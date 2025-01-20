document.addEventListener('DOMContentLoaded', () => {
  // Функція для завантаження HTML контенту в елемент
  const loadHTML = (selector, url, callback) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
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


  loadHTML("#header", "partials/header.html", () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const headerList = document.querySelector('.header-list');

    if (menuBtn && mobileMenu && headerList) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            headerList.classList.toggle('hidden');
        });
    } else {
        console.error('Елементи меню не знайдено');
    }
});
});






// const openMenuBtn = document.getElementById('open-menu-btn');
// const closeMenuBtn = document.getElementById('close-menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// // Відкриваємо меню при натисканні на кнопку "Відкрити меню"
// openMenuBtn.addEventListener('click', function() {
//   mobileMenu.style.display = 'block';
// });

// // Закриваємо меню при натисканні на кнопку "Закрити меню"
// closeMenuBtn.addEventListener('click', function() {
//   mobileMenu.style.display = 'none';
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const openMenuBtn = document.getElementById("open-menu-btn");
//   const closeMenuBtn = document.getElementById("close-menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");

//   // // Перевірка на існування елементів
//   // if (!openMenuBtn || !closeMenuBtn || !mobileMenu) {
//   //   console.error("Один або декілька елементів не знайдено в DOM.");
//   //   return;
//   // }

// //  / Відкрити меню
//   openMenuBtn.addEventListener("click", function() {
//     mobileMenu.classList.add("open"); // Додати клас open для показу меню
//     openMenuBtn.classList.add("hidden"); // Сховати кнопку відкриття
//     closeMenuBtn.classList.remove("hidden"); // Показати кнопку закриття
//   });

//   // Закрити меню
//   closeMenuBtn.addEventListener("click", function() {
//     mobileMenu.classList.remove("open"); // Видалити клас open для приховування меню
//     closeMenuBtn.classList.add("hidden"); // Сховати кнопку закриття
//     openMenuBtn.classList.remove("hidden"); // Показати кнопку відкриття
//   });









// document.addEventListener('DOMContentLoaded', () => {
//   // Пошук елементів
//   const burgerMenu = document.querySelector('.burger-menu');
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   const mobileLinks = document.querySelectorAll('.mobile-menu-link');

//   // Функції відкриття/закриття меню
//   const openMenu = () => {
//     mobileMenu.classList.add('is-open');
//     document.body.style.overflow = 'hidden'; // Блокуємо прокручування
//   };

//   const closeMenu = () => {
//     mobileMenu.classList.remove('is-open');
//     document.body.style.overflow = ''; // Відновлюємо прокручування
//   };

//   // Додавання слухачів подій
//   if (burgerMenu) {
//     burgerMenu.addEventListener('click', openMenu);
//   }

//   if (closeMenuBtn) {
//     closeMenuBtn.addEventListener('click', closeMenu);
//   }

//   mobileLinks.forEach(link => {
//     link.addEventListener('click', closeMenu); // Закриття меню при натисканні на лінки
//   });
// });




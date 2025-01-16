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
  // loadHTML("#hero-animation", "partials/hero-animation.html");
  loadHTML("#hero", "partials/hero.html");
  loadHTML("#about-us", "partials/about-us.html");
  loadHTML("#our-services", "partials/our-services.html");
  loadHTML("#reviews", "partials/reviews.html");
  loadHTML("#footer-container", "partials/footer.html");
});


// window.onload = function () {
//   const introVideo = document.getElementById('intro-video');

//   if (introVideo) {  // Перевіряємо, чи існує елемент
//     // Затримка на 5 секунд, після чого відео зникає
//     setTimeout(() => {
//       introVideo.style.opacity = 0; // Робимо відео невидимим
//     }, 5000); // 5000 мілісекунд = 5 секунд
//   } else {
//     console.error('Відео з ID "intro-video" не знайдено');
//   }
// };



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
// });








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



// // Анімація
// // Стилі для контейнера, щоб центрований заголовок був по центру по вертикалі
// document.body.style.display = "flex";
// document.body.style.flexDirection = "column";
// document.body.style.justifyContent = "center";
// document.body.style.height = "100vh";
// document.body.style.margin = "0";
// document.body.style.background = "black";
// document.body.style.color = "aqua";


// const title = document.getElementById("animated-title");
// title.style.fontSize = "90px";
// title.style.textAlign = "center";
// title.style.fontWeight = "bold"; // Робимо шрифт жирним
// title.style.letterSpacing = "5px"; // Задаємо відстань між літерами
// title.style.textShadow = "2px 2px 5px rgba(0, 255, 255, 0.5)"; // Тінь для тексту

// const text = title.innerText;
// title.innerText = "";   // Очищуємо початковий текст

// // Додаємо кожну літеру в окремий <span>
// [...text].forEach((char, index) => {
//   const span = document.createElement('span');
//   span.innerText = char;

//   // Додаємо початкові стилі для анімації
//   span.style.opacity = "0";
//   span.style.transform = "translateY(20px)";
//   span.style.transition = "opaсity 1s, transform 1s";
//   span.style.display = "inline-block";
  
  
//   title.appendChild(span);

//   setTimeout(() => {
//     // Додаємо стилі для анімації
//     span.style.opacity = "1";
//     span.style.transform = "translateY(0)";

//   }, 200 * index);  // Кожна літера буде з'являтися з інтервалом 200 мс
// });

// const subtitle = document.querySelector("h2");
// subtitle.style.fontSize = "40px";
// subtitle.style.textAlign = "center";
// subtitle.style.marginTop = "20px";
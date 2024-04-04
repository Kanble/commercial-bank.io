// Переключение меню на мобильных устройствах
const toggleButton = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Анимация появления блоков услуг при достижении секции
const servicesSection = document.querySelector('#services');
const services = document.querySelectorAll('.service');

function fadeInServices(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      services.forEach((service, index) => {
        setTimeout(() => {
          service.style.opacity = '1';
          service.style.transform = 'translateY(0)';
        }, 500 * (index + 1));
      });

      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const servicesObserver = new IntersectionObserver(fadeInServices, options);
servicesObserver.observe(servicesSection);

document.addEventListener("DOMContentLoaded", function() {
  var aboutSection = document.querySelector("#about");

  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function checkVisibility() {
    if (isInViewport(aboutSection)) {
      aboutSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
  var contactSection = document.querySelector("#contact");
  var contactForm = document.querySelector(".contact-form");

  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function checkVisibility() {
    if (isInViewport(contactSection)) {
      contactForm.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.querySelector("#scrollToTop");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
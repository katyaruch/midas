const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => {
        
      if(dropdown !== c) {
        c.classList.remove("active");
      }
    })

    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    } else {
      dropdown.classList.add("active");
    }
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains('dropdown') === false) {
    dropdowns.forEach((c) => c.classList.remove("active"));
  }
});


const btnCloseHeaderTop = document.querySelector(".header-top-close");
const headerTop = document.querySelector(".header-top");
btnCloseHeaderTop.addEventListener("click", (e) => {
  e.stopPropagation();
  headerTop.remove();
});


import {CountUp} from "./modules/countUp.min.js";
window.addEventListener('DOMContentLoaded', () => {
  const countNums = () => {
    const numbersObserver = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if (entry.isIntersecting) { // проверяем, находится ли элемент в видимой области браузера
          const count = new CountUp(
            entry.target.id, // идентификатор элемента с числом
            entry.target.dataset.num, // конечное число (берем из data-атрибута)            
            {
              duration: entry.target.dataset.duration || 3,
              decimalPlaces: entry.target.dataset.decimalPlaces || '',
              separator: ',', 
              prefix: entry.target.dataset.prefix || '',
              suffix: entry.target.dataset.suffix || '',
              // enableScrollSpy: true
            }
          );
          count.start();
          observer.unobserve(entry.target); // отключаем наблюдение за элементом
        }
      })
    });
    document.querySelectorAll('.metrics-value, .stake-value, .support-value').forEach(num => {
      numbersObserver.observe(num);
    });
  }
  countNums();

  const needAnimate = () => {
    let animateObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {          
          entry.target.classList.add('animation');
          console.log('need animate!!');
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('animation');
          // if (entry.target.classList.contains('block-howbuy-item__graph')) {
          //   entry.target.classList.add('animated');
          // }
        }
      })
    }, {
      threshold: .5
    });
    document.querySelectorAll('.need-animate').forEach(el => {
      animateObserver.observe(el);
    });
  }
  needAnimate();

  
  const blockHowbuyScroll = () => {
    let animateObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { 

          var lastScrollTop = 0;
          window.addEventListener("scroll", function(){
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // downscroll code
              entry.target.classList.remove('animated-down');
              entry.target.classList.add('animated-up');
            } else if (st < lastScrollTop) {
                // upscroll code
              entry.target.classList.remove('animated-up');
              entry.target.classList.add('animated-down');
            }
            lastScrollTop = st <= 0 ? 0 : st;
          }, false);
          
          entry.target.classList.add('animation');
          if (entry.target.classList.contains('animated')){
            entry.target.classList.remove('animated');
            // entry.target.classList.replace('animated','animation');
          }
          // entry.target.classList.remove('animated');
          // window.addEventListener('scroll', function() {
          // });
        } else {
          if (entry.target.classList.contains('animation')){
            entry.target.classList.replace('animation', 'animated');
          }
          // entry.target.classList.remove('animation');
          // entry.target.classList.add('animated');
        }
      })
    }, {
      threshold: 0.5
    });
    document.querySelectorAll('.block-howbuy-item__graph').forEach(el => {
      animateObserver.observe(el);
    });
  }
  blockHowbuyScroll();

  
  const animateAccordion = (el) => {
    const question = el.querySelector('.faq-list__question');
    const answer = el.querySelector('.faq-list__answer');

    const activateEl = (i) => {
      i.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
    const disableEl = (i) => {
      i.classList.remove('active');
      i.querySelector('.faq-list__answer').style.maxHeight = null;
    }

    question.addEventListener('click', () => {
      faqItems.forEach((j) => {
        if(el !== j ) {
          disableEl(j);
        }
      })
      if (el.classList.contains('active')) {
        disableEl(el);
      } else {
        activateEl(el);
      }
    });
  };
  const faqItems = document.querySelectorAll('.faq-list__item');
  faqItems.forEach(item => {
    animateAccordion(item);
  });

  const buttonBurgerMenu = document.querySelector('.header-burger');
  const headerMenu = document.querySelector('.header-menu');
  buttonBurgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (buttonBurgerMenu.classList.contains("active")) {
      buttonBurgerMenu.classList.remove("active");
      headerMenu.classList.remove("active");
    } else {
      buttonBurgerMenu.classList.add("active");
      headerMenu.classList.add("active");
    }
  })

});
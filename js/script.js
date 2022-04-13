

///================================drop-down=====================
//

if (isMobile.touchScreen()) { //window.innerWidth > 767 &&
   let arrow = document.querySelectorAll('.menu__arrow');
   if (arrow.length > 0) {
      for (let index = 0; index < arrow.length; index++) {
         const thisarrow = arrow[index];
         thisarrow.addEventListener("click", function (e) {
            thisarrow.parentElement.classList.toggle("_active");

         });
      }
   }
}
///
// if (isMobile.touchScreen()) { //window.innerWidth > 767 &&
//    let arrow = document.querySelectorAll('.menu__item-dropdown');
//    if (arrow.length > 0) {
//       for (let index = 0; index < arrow.length; index++) {
//          const thisarrow = arrow[index];
//          thisarrow.addEventListener("click", function (e) {
//             thisarrow.classList.toggle("_active");

//          });
//       }
//    }
// }

// window.onload = function () {
//    document.addEventListener("click", documentActions);

//    function documentActions(e) {
//       const targetElement = e.target;

//       if (isMobile.touchScreen()) {
//          //===add clas "active" to open seacth form and close it when klick anywhere else
//          if (targetElement.classList.contains('menu__arrow')) {
//             targetElement.closest('.menu__item-dropdown').classList.toggle('_active');
//          }
//           if (!targetElement.closest('.menu__item-dropdown') && document.querySelector('.menu__item-dropdown._active').length > 0) {
//             document.querySelector('.menu__item-dropdown').classList.remove('_active');
//          }
//       }
//    }
// }


//=================================Burger===========================

const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');
if (burger) {
   burger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      burger.classList.toggle("_active");
      menuBurger.classList.toggle('_active');
   });
}

//==================================clickToSlide==========================
//
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

         if (burger.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burger.classList.remove("_active");
            menuBurger.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}



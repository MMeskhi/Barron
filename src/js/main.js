//Preload no transitions
document.body.classList.remove("preload");

//Sliders
if (document.querySelector(".collection")) {
  const swiper = new Swiper(".collection .collection-swipper", {
    slidesPerView: 6,
    spaceBetween: 16,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1.25,
      },
    },
    scrollbar: {
      el: ".collection .swiper-scrollbar",
      draggable: true,
    },
  });
}

const addToFavBtns = document.querySelectorAll(".add-to-fav");
function navbarDropdownFn() {
  const navbarLiItems = [...document.querySelectorAll(".header-cat > li")];
  const dropdownItems = [...document.querySelectorAll(".navbar-li-dropdown")];
  const nav = document.querySelector("header nav");
  const navbarUl = document.querySelector("header nav >ul");
  let index;

  function removeAllActiveClasses() {
    navbarLiItems.forEach((li) => {
      li.classList.remove("active");
    });
    dropdownItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
  function addActiveClassToLiItem(e) {
    if (e.target.classList.contains("navbar-li")) {
      index = navbarLiItems.findIndex((el) => el === e.target);
      removeAllActiveClasses();
      navbarLiItems[index].classList.add("active");
      dropdownItems[index].classList.add("active");
    }
  }
  function removeActiveClassFromLiItem(e) {
    if (e.target.tagName === "NAV" && index) {
      dropdownItems[index].classList.remove("active");
      navbarLiItems[index].classList.remove("active");
    }
  }
  nav.addEventListener("mouseenter", addActiveClassToLiItem, true);
  nav.addEventListener("mouseleave", removeActiveClassFromLiItem);
  if (window.innerWidth < 1024) {
    nav.removeEventListener("mouseenter", addActiveClassToLiItem, true);
    nav.removeEventListener("mouseleave", removeActiveClassFromLiItem);
  }
  navbarLiItems.forEach((li, i) => {
    if (window.innerWidth < 1024) {
      li.addEventListener("click", (e) => {
        e.preventDefault();
        if (li.classList.contains("active")) {
          console.log("same element");
          li.classList.remove("active");
          dropdownItems[i].classList.remove("active");
        } else {
          removeAllActiveClasses();
          li.classList.toggle("active");
          dropdownItems[i].classList.toggle("active");
        }
      });
    }
  });
}

function addToFav() {
  addToFavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("added");
    });
  });
}

navbarDropdownFn();
addToFav();

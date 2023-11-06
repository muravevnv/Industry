const heroSlider = new Swiper(".hero__slider ", {
  spaceBetween: 30,
  pagination: {
    el: ".hero__slider-pagination",
  },

  navigation: {
    nextEl: ".hero__slider-next",
    prevEl: ".hero__slider-prev",
  },
});

const newsSlider = new Swiper(".js-news-slider ", {
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    375: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    575: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const supplySlider = new Swiper(".supply__slider  ", {
  slidesPerView: 1.7,
  spaceBetween: 16,
  breakpoints: {
    375: {
      slidesPerView: 2.1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 3.1,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 5.1,
      spaceBetween: 24,
    },
  },

  scrollbar: {
    el: ".supply__scrollbar",
  },
});

//burger

const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__nav");
const burgerClosed = document.querySelector(".header__nav-closed ");

burger.addEventListener("click", function () {
  burgerMenu.classList.remove("header__nav--hidden");
  burger.classList.add("is-active");
});

burgerClosed.addEventListener("click", function () {
  burgerMenu.classList.add("header__nav--hidden");
  burger.classList.remove("is-active");
});

//catalog btn

$(".header__btn").on("click", function () {
  $(".header__catalog-nav").toggleClass("is-active");

  $('.header__catalog-overlay').addClass('is-active')
});

$('.header__catalog-overlay').on('click', function(){
  $(this).removeClass('is-active');
  $(".header__catalog-nav").removeClass('is-active')
})

// $('.header__search-select').toggleClassClass('is-open')

//sidebar

const sidebarBtn = document.querySelector(".catalog__sidebar-btn");

if (sidebarBtn) {
  const sidebarMenu = document.querySelector(".catalog__nav");

  sidebarBtn.addEventListener("click", function () {
    sidebarMenu.classList.toggle("catalog__nav--hidden");
  });
}

//catalog-filter

const settingsBtn = document.querySelector(
  ".catalog-product__control-settings"
);

if (settingsBtn) {
  const catalogilter = document.querySelector(".catalog-filter");

  settingsBtn.addEventListener("click", function () {
    catalogilter.classList.toggle("catalog-filter--hidden");
    settingsBtn.classList.toggle("is-active");
  });
  а;
}

let amountItems = document.querySelectorAll(".amount");

amountItems.forEach(function (el) {
  let itemToggler = el.querySelector(".amount-item__arrow");
  let itemList = el.querySelector(".amount-list");
  let itemInput = el.querySelector(".amount-item__input");
  let itemListElements = el.querySelectorAll(".amount-list__item");

  function openList() {
    itemList.classList.add("is-open");
    itemToggler.classList.add("is-active");
  }

  function closeList() {
    itemList.classList.remove("is-open");
    itemToggler.classList.remove("is-active");
  }

  itemToggler.addEventListener("click", () => {
    if (itemList.classList.contains("is-open")) {
      closeList();
    } else {
      openList();
    }
  });

  itemListElements.forEach(function (k) {
    let listItem = k.querySelector("span");
    let listItemVal = listItem.innerText;
    console.log(listItemVal);
    listItem.addEventListener("click", () => {
      itemInput.value = listItemVal;
      closeList();
    });
  });
});

let rangeSlider = document.querySelector(".range-slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [10, 30],
    connect: true,
    range: {
      min: 0,
      max: 40,
    },
  });
}

function showFilter() {
  $(".js-filter").slideToggle();
}

$(".js-filter-toggle").on("click", function () {
  $(this).toggleClass("is-active");
  showFilter();
});

$(".js-catalog-toggle").on("click", function () {
  $(this).toggleClass("is-active");

  if ($(this).hasClass("is-active")) {
    $(".js-catalog").hide();
  } else {
    $(".js-catalog").show();
  }
});

$(".js-open-modal").on("click", function () {
  $(".modal").show();
});

$(".js-close-modal").on("click", function () {
  $(".modal").hide();
});

$(".form-control").each(function () {
  let $this = $(this);

  $this.on("change", function () {
    if ($this.val() !== "") {
      $this.addClass("is-filled");
    } else {
      $this.removeClass("is-filled");
    }
  });
});

$(".catalog-item__add").on("click", function () {
  $(this).toggleClass("is-added");
});

$(".product__add").on("click", function () {
  $(this).toggleClass("is-added");
});

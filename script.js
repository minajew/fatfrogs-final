var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)





const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',

    },
});
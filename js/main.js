const navMenu = document.getElementById("nav__menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav__close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })

}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })

}

const navLink = document.querySelectorAll(".nav__link")
function linkAction() {
    const navMenu = document.getElementById("nav__menu")
    navMenu.classList.remove("show-menu")

}
navLink.forEach(item => item.addEventListener("click", linkAction))


//SWIPER

const homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },


})


let newSwiper = new Swiper(".new-swiper", {
    centerSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
})


//SCROLL UP

function scrollUp() {
    const scrollup = document.getElementById("scroll-up")
    if (this.scrollY >= 460) scrollup.classList.add("show-scroll"); else scrollup.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)


//SECTION ACTIVE

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector("#nav__menu a[href*=" + sectionId + "]");

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);


//SCROLL REVEAL

const sr = ScrollReveal({
    origin: "top",
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, footer__content`, { interval: 100 })
sr.reveal(`.about__data, .discount__img`, { origin: "left" })
sr.reveal(`.about__img, .discount__data`, { origin: "right" })
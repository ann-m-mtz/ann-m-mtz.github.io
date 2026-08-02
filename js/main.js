// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    console.log(window.scrollY);

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

//Prohibido guardar

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

//Slider Prueba

//Slider Mapu - Primeros

const primerosSwiper = new Swiper(".primerosSwiper", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 2,
    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        992: {
            slidesPerView: 3.3,
        }
    }
});

const crecimientoSwiper = new Swiper(".crecimientoSwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 2,

    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        992: {
            slidesPerView: 3.3,
        }
    }
});

const expansionSwiper = new Swiper(".expansionSwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 2,
    breakpoints: {
        768: {
            slidesPerView: 2.3
        },
        992: {
            slidesPerView: 3.3,
        }
    }

});

const otrosSwiper = new Swiper(".otrosSwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 2,
    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        992: {
            slidesPerView: 3.3,
        }
    }
});

//Revista

const revistaSwiper = new Swiper(".revistaSwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 8,
    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        992: {
            slidesPerView: 3.3,
        }
    }
});


//Prevención

const prevencionSwiper = new Swiper(".prevencionSwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 2,
    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        992: {
            slidesPerView: 3.3,
        }
    }
});

// Packaging

const packagingSwiper = new Swiper(".packagingSwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 2,
    breakpoints: {
        768: {
            slidesPerView: 2.3,
        },
        992: {
            slidesPerView: 3.3,
        }
    }
});

//Educación
const educacionSwiper = new Swiper(".educacionSwiper", {
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.1,
    spaceBetween:15
});

//Ilustración

const ilustracionSwiper = new Swiper(".ilustracionSwiper", {
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.1,
    spaceBetween:15
});
// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

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

//Efectos Index

const reveals = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

}, {
    threshold:0.2
});


reveals.forEach(element=>{
    observer.observe(element);
});

//Slider Index Proyectos

const projectsSwiper = document.querySelector(".projectsSwiper") && new Swiper(".projectsSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.2,
    spaceBetween:10,
    speed:800,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    }
});

//Slider Mapu - Primeros

const primerosSwiper = document.querySelector(".primerosSwiper") && new Swiper(".primerosSwiper", {
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

const crecimientoSwiper = document.querySelector(".crecimientoSwiper") && new Swiper(".crecimientoSwiper", {
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

const expansionSwiper = document.querySelector(".expansionSwiper") && new Swiper(".expansionSwiper", {
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

const otrosSwiper = document.querySelector(".otrosSwiper") && new Swiper(".otrosSwiper", {
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

const revistaSwiper = document.querySelector(".revistaSwiper") && new Swiper(".revistaSwiper", {
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

const prevencionSwiper = document.querySelector(".prevencionSwiper") && new Swiper(".prevencionSwiper", {
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

const packagingSwiper = document.querySelector(".packagingSwiper") && new Swiper(".packagingSwiper", {
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
const educacionSwiper = document.querySelector(".educacionSwiper") && new Swiper(".educacionSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.1,
    spaceBetween:15
});

//Ilustración

const ilustracionSwiper = document.querySelector(".ilustracionSwiper") && new Swiper(".ilustracionSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.1,
    spaceBetween:15
});

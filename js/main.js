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

const heroScrollCue = document.querySelector(".hero-scroll-cue");

if (heroScrollCue) {
    let heroScrollCueHidden = false;

    const hideOnFirstScroll = () => {
        if (window.scrollY > 0) {
            hideHeroScrollCue();
        }
    };

    const hideHeroScrollCue = () => {
        if (heroScrollCueHidden) return;

        heroScrollCueHidden = true;
        heroScrollCue.classList.add("is-hidden");
        heroScrollCue.setAttribute("aria-hidden", "true");
        heroScrollCue.setAttribute("tabindex", "-1");
        heroScrollCue.setAttribute("inert", "");
        heroScrollCue.inert = true;
        window.removeEventListener("scroll", hideOnFirstScroll);
    };

    window.addEventListener("scroll", hideOnFirstScroll, { passive: true });
    heroScrollCue.addEventListener("click", (event) => {
        const target = heroScrollCue.getAttribute("href");

        hideHeroScrollCue();

        if (target && target.startsWith("#")) {
            event.preventDefault();
            document.querySelector(target)?.scrollIntoView();
            window.history.pushState(null, "", target);
        }
    });
}

//Slider Index Proyectos

const projectsSwiper = document.querySelector(".projectsSwiper") && new Swiper(".projectsSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.2,
    spaceBetween:10,
    speed:800
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

// MAPU: conserva únicamente la altura necesaria para las slides que se ven.
// autoHeight sólo considera la slide activa y podría recortar las previews laterales.
function enableVisibleSlidesHeight(swiper) {
    if (!swiper) return;

    let animationFrame;

    const updateHeight = () => {
        cancelAnimationFrame(animationFrame);

        animationFrame = requestAnimationFrame(() => {
            const carouselRect = swiper.el.getBoundingClientRect();
            const visibleImages = [...swiper.slides]
                .filter((slide) => {
                    const slideRect = slide.getBoundingClientRect();

                    return slideRect.right > carouselRect.left && slideRect.left < carouselRect.right;
                })
                .map((slide) => slide.querySelector("img"))
                .filter(Boolean);

            if (!visibleImages.length) return;

            const wrapperRect = swiper.wrapperEl.getBoundingClientRect();
            const imageRects = visibleImages.map((image) => image.getBoundingClientRect());
            const visualTop = Math.min(wrapperRect.top, ...imageRects.map((rect) => rect.top));
            const visualBottom = Math.max(...imageRects.map((rect) => rect.bottom));
            const requiredHeight = Math.ceil(visualBottom - visualTop) + 2;

            const currentHeight = parseFloat(swiper.el.style.height) || 0;

            if (requiredHeight > 0 && Math.abs(currentHeight - requiredHeight) > 1) {
                swiper.el.style.height = `${requiredHeight}px`;
            }
        });
    };

    [
        "slideChange",
        "slideChangeTransitionStart",
        "slideChangeTransitionEnd",
        "resize",
        "imagesReady"
    ].forEach((eventName) => swiper.on(eventName, updateHeight));

    swiper.el.querySelectorAll("img").forEach((image) => {
        image.addEventListener("load", updateHeight);
        image.addEventListener("transitionend", (event) => {
            if (event.propertyName === "transform") {
                updateHeight();
            }
        });
    });

    updateHeight();
}

enableVisibleSlidesHeight(crecimientoSwiper);

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

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// NAVBAR MÃ“VIL: Bootstrap conserva los atributos ARIA al cerrar el collapse.
const mobileNavToggle = document.querySelector('.navbar-toggler[data-bs-toggle="collapse"]');
const mobileNavCollapse = document.querySelector('.navbar-collapse');
const mobileNavMediaQuery = window.matchMedia('(max-width: 991.98px)');
const mobileNavCollapseApi = window.bootstrap?.Collapse;

if (mobileNavToggle && mobileNavCollapse && mobileNavCollapseApi) {
    const closeMobileNav = () => {
        if (!mobileNavMediaQuery.matches || !mobileNavCollapse.classList.contains('show')) return;

        mobileNavCollapseApi.getOrCreateInstance(mobileNavCollapse, { toggle: false }).hide();
    };

    document.addEventListener('click', (event) => {
        if (!mobileNavCollapse.contains(event.target) && !mobileNavToggle.contains(event.target)) {
            closeMobileNav();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileNavCollapse.classList.contains('show')) {
            closeMobileNav();
            mobileNavToggle.focus();
        }
    });
}

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
            const scrollTarget = document.querySelector(target);
            scrollTarget?.scrollIntoView();
            scrollTarget?.focus({ preventScroll: true });
            window.history.pushState(null, "", target);
        }
    });
}

// Accesibilidad nativa de Swiper: el teclado actúa sólo sobre carruseles
// visibles y los mensajes siguen el idioma de cada documento.
const isEnglishDocument = document.documentElement.lang.startsWith("en");
const swiperAccessibility = {
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false
    },
    a11y: {
        enabled: true,
        containerMessage: isEnglishDocument ? "Carousel" : "Carrusel",
        prevSlideMessage: isEnglishDocument ? "Previous slide" : "Diapositiva anterior",
        nextSlideMessage: isEnglishDocument ? "Next slide" : "Diapositiva siguiente",
        firstSlideMessage: isEnglishDocument ? "This is the first slide" : "Esta es la primera diapositiva",
        lastSlideMessage: isEnglishDocument ? "This is the last slide" : "Esta es la última diapositiva",
        paginationBulletMessage: isEnglishDocument ? "Go to slide {{index}}" : "Ir a la diapositiva {{index}}",
        slideLabelMessage: isEnglishDocument ? "{{index}} of {{slidesLength}}" : "{{index}} de {{slidesLength}}"
    }
};

// Refinamiento visual compartido: en desktop comienza cerca del centro para
// mostrar continuidad a ambos lados; tablet y móvil conservan el primer slide.
// La paginación se crea en runtime para no alterar el markup de cada página.
function getSwiperPresentation(selector) {
    const swiperElement = document.querySelector(selector);
    const slidesCount = swiperElement.querySelectorAll(".swiper-wrapper > .swiper-slide").length;
    let paginationElement = swiperElement.querySelector(".swiper-pagination");

    if (!paginationElement) {
        paginationElement = document.createElement("div");
        paginationElement.className = "swiper-pagination";
        swiperElement.append(paginationElement);
    }

    paginationElement.classList.add("swiper-pagination--minimal");

    return {
        initialSlide: window.matchMedia("(min-width: 992px)").matches
            ? Math.floor((slidesCount - 1) / 2)
            : 0,
        pagination: {
            el: paginationElement,
            clickable: true
        }
    };
}

//Slider Index Proyectos

const projectsSwiper = document.querySelector(".projectsSwiper") && new Swiper(".projectsSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.2,
    spaceBetween:10,
    speed:800,
    ...getSwiperPresentation(".projectsSwiper"),
    ...swiperAccessibility
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
    },
    ...getSwiperPresentation(".primerosSwiper"),
    ...swiperAccessibility
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
    },
    ...getSwiperPresentation(".crecimientoSwiper"),
    ...swiperAccessibility
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
    },
    ...getSwiperPresentation(".expansionSwiper"),
    ...swiperAccessibility

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
    },
    ...getSwiperPresentation(".otrosSwiper"),
    ...swiperAccessibility
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
    },
    ...getSwiperPresentation(".revistaSwiper"),
    ...swiperAccessibility
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
    },
    ...getSwiperPresentation(".prevencionSwiper"),
    ...swiperAccessibility
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
    },
    ...getSwiperPresentation(".packagingSwiper"),
    ...swiperAccessibility
});

//Educación
const educacionSwiper = document.querySelector(".educacionSwiper") && new Swiper(".educacionSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.1,
    spaceBetween:15,
    ...getSwiperPresentation(".educacionSwiper"),
    ...swiperAccessibility
});

//Ilustración

const ilustracionSwiper = document.querySelector(".ilustracionSwiper") && new Swiper(".ilustracionSwiper", {
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:1.1,
    spaceBetween:15,
    ...getSwiperPresentation(".ilustracionSwiper"),
    ...swiperAccessibility
});

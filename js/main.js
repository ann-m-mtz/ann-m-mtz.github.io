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
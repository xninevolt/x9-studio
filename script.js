const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let zeroFoodwaste = document.getElementById("zero-foodwaste");
let navbar = document.getElementById("main-nav");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        header.classList.add('navbarOffsetMargin');
    } else {
        navbar.classList.remove('sticky');
        header.classList.remove('navbarOffsetMargin');
    }
});
/*
Template Name: Wellness Workx - Website Template
Author: Claude
*/
(function () {
    //===== Prealoder
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }
    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
/*=====================================
Sticky
======================================= */
window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    var logo = document.querySelector('.navbar-brand');
    var shaklee_button = document.querySelector(".home-btn");
    
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
        // Hide the logo when scrolling down
        if (logo) {
            logo.style.opacity = "0";
            logo.style.visibility = "hidden";
            logo.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
        }
        // Hide the Shaklee button when scrolling down
        if (shaklee_button) {
            shaklee_button.style.opacity = "0";
            shaklee_button.style.visibility = "hidden";
            shaklee_button.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
        }
    } else {
        header_navbar.classList.remove("sticky");
        // Show the logo when at the top
        if (logo) {
            logo.style.opacity = "1";
            logo.style.visibility = "visible";
        }
        // Show the Shaklee button when at the top
        if (shaklee_button) {
            shaklee_button.style.opacity = "1";
            shaklee_button.style.visibility = "visible";
        }
    }
    // show or hide the back-top-top button
    var backToTop = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};
    // WOW active
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });
    }
})();

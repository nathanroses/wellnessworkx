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
    var logo = document.querySelector('.navbar-brand img');
    
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
        if (logo) {
            logo.src = 'assets/images/logo/logo.svg';
        }
    } else {
        header_navbar.classList.remove("sticky");
        if (logo) {
            logo.src = 'assets/images/logo/white-logo.svg';
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

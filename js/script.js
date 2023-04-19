/*=========Menu Icon navbar==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

/*=========sticky navbar==========*/

window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    let windowcrollY = window.scrollY > 0;
    header.classList.toggle("sticky", windowcrollY);


    /*=========Remove Menu Icon navbar when click navabar link (scroll)==========*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
});